import React from 'react';
import graphql from 'graphql';
import Helmet from 'react-helmet';
import Banner from '../components/banner/Banner';
import Content, { HTMLContent } from '../components/content/Content';
import { headings } from '../utils/headings';
import './post-page.sass';

export const PostPageTemplate = ({
  content, contentComponent, helmet, title, subtitle, description, tags
}) => {
  const PostContent = contentComponent || Content;
  const tag = tags[0];
  const heading = headings[tag] || {};

  return (
    <div>
      { helmet || ''}
      <Banner title={title} subtitle={subtitle} color={heading.color} />
      <section className="section">
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <article className="message">
                {description &&
                  <div className="message-body">
                    {description}
                  </div>
                }
              </article>
              <PostContent content={content} className="post" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ({ data }) => {
  const { markdownRemark: post } = data;
  const { title, subtitle, description, tags } = post.frontmatter;

  return (<PostPageTemplate
    content={post.html}
    contentComponent={HTMLContent}
    helmet={<Helmet title={`Cintia Romero | ${title}`} />}
    title={title}
    subtitle={subtitle}
    description={description}
    tags={tags}
  />);
};

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        title
        subtitle
        description
        tags
      }
    }
  }
`;
