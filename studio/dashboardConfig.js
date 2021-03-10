export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6049477b1aa0a8157f467119',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-pvtvf9u5',
                  apiId: '0956ce7a-552f-48a7-beb6-276bc798ef58'
                },
                {
                  buildHookId: '6049477b79eba0151170875f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-1ghmjfq6',
                  apiId: '846793eb-3d2d-4fa9-8e42-9c11577123ec'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vladlr/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-1ghmjfq6.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
