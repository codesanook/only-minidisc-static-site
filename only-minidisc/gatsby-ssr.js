// https://www.gatsbyjs.com/docs/porting-from-create-react-app-to-gatsby/#context-providers
import React from 'react';

// // https://fontawesome.com/v5/docs/web/use-with/react
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

// library.add(fab, faCheckSquare, faCoffee)

export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  setHeadComponents([
    <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/luckysheet@latest/dist/plugins/css/pluginsCss.css' />,
    <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/luckysheet@latest/dist/plugins/plugins.css' />,
    <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/luckysheet@latest/dist/css/luckysheet.css' />,
    <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/luckysheet@latest/dist/assets/iconfont/iconfont.css' />,
    <script src="https://cdn.jsdelivr.net/npm/luckysheet@latest/dist/plugins/js/plugin.js"></script>,
    <script src="https://cdn.jsdelivr.net/npm/luckysheet@latest/dist/luckysheet.umd.js"></script>,
  ]);
};

// export const onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
//   const headComponents = getHeadComponents();

//   // Reordering the files so custom css is at the end
//   const orderedComponents = headComponents.sort((a, b) => Number(b.order) - Number(a.order));
//   replaceHeadComponents(orderedComponents);
// }
