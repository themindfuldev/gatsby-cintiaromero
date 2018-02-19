export const extractTags = (post) => {
    const htmlRegex = /<p>Tags:\[.*\]<\/p>/g;
    const tagsRegex = /(?:\[)(.*)(?:\])/; 

    const { html } = post;
    if (html.search(htmlRegex) > -1) {
        post.tags = html.match(htmlRegex)[0].match(tagsRegex)[1].split(',');
        post.html = html.replace(htmlRegex, '');
    }

    return post;
};