const page = {
    name: "page",
    title: "Pages",
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            }
        },
        // {
        //     name: 'layout',
        //     type: 'string',
        //     title: 'Layout',
        //     options: {
        //       list: [
        //         { title: 'Center Left', value: 'center-left' },
        //         { title: 'Center Center', value: 'center-center' },
        //         { title: 'Center Right', value: 'center-right' }
        //       ],
        //       layout: 'dropdown'
        //     }
        //   },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }]
        }
    ]
}

export default page;