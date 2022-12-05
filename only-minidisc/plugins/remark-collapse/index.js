// https://www.gatsbyjs.com/tutorial/remark-plugin-tutorial/
// const headingRange = require('mdast-util-heading-range')
// const findAfter = require('unist-util-find-after');

// https://astexplorer.net/ and select Markdown for debugging Markdown tree

const toString = require('mdast-util-to-string')
const visit = require("unist-util-visit")

// https://github.com/syntax-tree/unist-util-find-after/blob/main/index.js
const is = require('unist-util-is');
const toHAST = require('mdast-util-to-hast');
const toHTML = require('hast-util-to-html');

module.exports = ({ markdownAST }) => {

  visit(markdownAST, 'heading', (node) => {
    const { depth } = node;
    // Skip if not an h1
    if (depth !== 1) return;

    const headingText = toString(node);
    let index = markdownAST.children.indexOf(node)

    const contentNodes = [];
    while (++index < markdownAST.children.length) {
      const currentNode = markdownAST.children[index];
      if (is({ type: 'heading', depth: 1 }, currentNode)) {
        break;
      }

      if (!is({ type: 'heading', depth: 1 }), currentNode) {
        console.log(currentNode);
        contentNodes.push(currentNode);
      }
    }

    const htmlContent = contentNodes.map(n => toHTML(toHAST(n)));
    node.type = 'html';
    node.value = `<details class='collapse'><summary class='title'>${headingText}</summary>${htmlContent.join('')}</details>`;

    markdownAST.children = markdownAST.children.filter(n => !contentNodes.includes(n))
  });

  return markdownAST;
};
