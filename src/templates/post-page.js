import React from 'react';
import graphql from 'graphql';
import Helmet from 'react-helmet';
import Banner from '../components/banner/Banner';
import Content, { HTMLContent } from '../components/content/Content';
import './post-page.sass';

export const PostPageTemplate = ({
  content, contentComponent, description, title, helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <div>
      { helmet || ''}
      <Banner title={title} color='is-info' />
      <section className="section">
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <article className="message">
                <div className="message-body">
                  {description}
                </div>
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
  const { title, description } = post.frontmatter;

  return (<PostPageTemplate
    content={post.html}
    contentComponent={HTMLContent}
    description={description}
    helmet={<Helmet title={`Cintia Romero | ${title}`} />}
    title={title}
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
        description
      }
    }
  }
`;
