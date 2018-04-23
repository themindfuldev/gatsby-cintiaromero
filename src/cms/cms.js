import CMS from 'netlify-cms';
import 'netlify-cms/dist/cms.css';

import PostPagePreview from './preview-templates/PostPagePreview';

CMS.registerPreviewStyle('/styles.css');
CMS.registerPreviewTemplate('blog', PostPagePreview);
