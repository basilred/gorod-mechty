block('root').replace()(node => {
    var data = node.data = node.ctx.data,
        title = data.page.url !== '/' ? data.page.title + ' / ' : '';

    title += data.pages[0].title;

    return {
        block: 'page',
        title: title,
        head: [
            { elem: 'css', url: '/index.min.css' }
        ],
        scripts: [
            { elem: 'js', url: '/index.min.js' }
        ]
    };
});
