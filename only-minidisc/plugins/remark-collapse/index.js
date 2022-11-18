// https://www.gatsbyjs.com/tutorial/remark-plugin-tutorial/
const headingRange = require('mdast-util-heading-range')
const toString = require('mdast-util-to-string')
const visit = require("unist-util-visit")
const findAfter = require('unist-util-find-after');

module.exports = ({ markdownAST }) => {

  visit(markdownAST, 'heading', (node) => {
    const { depth } = node;
    // Skip if not an h2
    if (depth !== 1) return;

    const headingText = toString(node);

    node.type = 'html';
    node.value = `<details class='collapse'><summary>${headingText}</summary>Hello world</details>`;

  });

  //headingRange(markdownAST, 'foo', (start, nodes, end) => {
  // visit(markdownAST, 'heading', (node) => {
  //   const { depth } = node;
  //   // Skip if not an h2
  //   if (depth !== 1) return;

  //   // test (Function, string, Object, or Array<Test>, optional) — check:
  //   // when nullish, checks if node is a Node
  //   // when string, works like passing node => node.type === test
  //   // when array, checks if any one of the subtests pass
  //   // when object, checks that all fields in test are in node and that they have strictly equal values
  //   // when function checks if function passed the node is true


  //   // Grab the innerText of the heading node
  //   const headingText = toString(node);
  //   // get next paragraph node
  //   // const next = findAfter(markdownAST, node);

  //   // const html = `
  //   //     <details>
  //   //       <summary>Details</summary>
  //   //       ${headingText}
  //   //     </details>
  //   //   `;
  //   node.type = 'paragraph';
  //   node.children = [
  //     {
  //       type: 'html',
  //       value: `<details>`
  //     },
  //     {
  //       type: 'html',
  //       value: `<summary> ${headingText}</summary>`
  //     },
  //     {
  //       type: 'paragraph',
  //       children: [
  //         {
  //           type: 'text',
  //           value: `details of ${headingText}`
  //         }
  //       ]
  //     },
  //     {
  //       type: 'html',
  //       value: `</details>`
  //     }
  //   ];

  // });

  return markdownAST;
};
