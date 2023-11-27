/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
// import React from 'react';

import RootWrapper from './src/components/ui/root-wrapper'
export const wrapRootElement = RootWrapper

// exports.onRenderBody = ({ setHtmlAttributes }) => {
//   setHtmlAttributes({ lang: `en` })
// }


// export const onRenderBody = ({ setHeadComponents }) => {
//     setHeadComponents([
//       <meta key="charset-utf-8" charSet="utf-8" />
//       // Add other meta tags as needed
//     ]);
//   };