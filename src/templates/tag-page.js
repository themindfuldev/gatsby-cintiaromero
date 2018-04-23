import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import Banner from '../components/banner/Banner';
import InlinePost from '../components/inline-post/InlinePost';
import { headings } from '../utils/headings';
import Link from 'gatsby-link';
import './tag-page.sass';

const Tags = ({ pathContext, data }) => {
  const { tag } = pathContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const heading = headings[tag] || {};
  let isLeft = false;

  return (
    <div>
      <Helmet title={`Cintia Romero | ${heading.title}`} />
      <Banner title={heading.title} subtitle={heading.subtitle} color={heading.color}/>
      <ul className="inline-posts">
        {edges.map(({ node }) => {
          const { path } = node.frontmatter;
          isLeft = !isLeft;
          return (
            <li key={path}>              
              <InlinePost isLeft={isLeft} {...node.frontmatter} />
            </li>
          );
        })}
      </ul>      
    </div>
  );
};

Tags.propTypes = {
  pathContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired,
      ),
    }),
  }),
};

export default Tags;

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 50
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            path
            description
            image
          }
        }
      }
    }
  }
`;