import React from 'react';
import graphql from 'graphql';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import Banner from '../components/banner/Banner';
import ImageGrid from '../components/image-grid/ImageGrid';
import Content, { HTMLContent } from '../components/content/Content';
import { headings } from '../utils/headings';
import './post-page.sass';

export const PostPageTemplate = ({
  content, contentComponent, helmet, title, subtitle, description, tags, isImageGrid
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
              {description &&
                <React.Fragment>
                  <nav className="breadcrumb" aria-label="breadcrumbs">
                    <ul>
                      <li><Link to={`/tags/${tag}`}>{heading.title}</Link></li>
                      <li className="is-active"><a aria-current="page">{title}</a></li>
                    </ul>
                  </nav>
                  <article className="message">
                    <div className="message-body">
                      {description}
                    </div>
                  </article>
                </React.Fragment>
              }
              {isImageGrid &&
                <ImageGrid images={content} />
              }
              {!isImageGrid &&
                <PostContent content={content} className="post" />
              }
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ({ data }) => {
  const { markdownRemark: post } = data;
  const { title, subtitle, description, tags, isImageGrid } = post.frontmatter;

  return (<PostPageTemplate
    content={post.html}
    contentComponent={HTMLContent}
    helmet={<Helmet title={`Cintia Romero | ${title}`} />}
    title={title}
    subtitle={subtitle}
    description={description}
    tags={tags}
    isImageGrid={isImageGrid}
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
        isImageGrid
      }
    }
  }
`;
