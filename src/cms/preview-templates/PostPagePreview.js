import React from 'react';
import { PostPageTemplate } from '../../templates/post-page';

const PostPagePreview = ({ entry, widgetFor }) => (
  <PostPageTemplate
    content={widgetFor('body')}
    title={entry.getIn(['data', 'title'])}
    subtitle={entry.getIn(['data', 'subtitle'])}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
  />
);

export default PostPagePreview;
