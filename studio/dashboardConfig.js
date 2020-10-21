export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5f9060ca83da1300f9fab0cb',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-tq95qv3j',
                  apiId: 'aca0ce83-4f72-4f9b-b752-cd841833e395'
                },
                {
                  buildHookId: '5f9060ca70f2bb00962d077b',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-jmj42z9x',
                  apiId: '02f4a942-6712-4302-becb-b610e174badc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/beepbleep/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-jmj42z9x.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
