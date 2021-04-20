/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    siteMetadata: {
        title: 'Simply Recipes',
        description: 'Nice and clean recipes site',
        author: '@johnsmilga',
        person: { name: 'john', age: 32 },
        simpleData: ['item 1', 'item 2'],
        complexData: [
            { name: 'john', age: 32 },
            { name: 'susan', age: 21 },
        ],
    },

    plugins: [`gatsby-plugin-styled-components`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `fhn0bmmbdecd`,
                // Learn about environment variables: https://gatsby.dev/env-vars
                accessToken: `Q4XEZ7EhZY0TKRSJ1V1vONhLyAbRqU3G4x2aeQUsf_s`,
            },
        },
    ],
}