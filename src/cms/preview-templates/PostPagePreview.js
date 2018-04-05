import React from 'react';
import { PostPageTemplate } from '../../templates/post-page';

const PostPagePreview = ({ entry, widgetFor }) => (
  <PostPageTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
);

export default PostPagePreview;
