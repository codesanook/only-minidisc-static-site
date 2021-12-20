// https://www.gatsbyjs.com/tutorial/building-a-theme/#add-static-data-to-a-theme
// https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/
// https://www.gatsbyjs.com/plugins/gatsby-transformer-yaml/

// yarn add gatsby-source-filesystem gatsby-transformer-yaml

import { useStaticQuery, graphql } from 'gatsby';

// https://www.gatsbyjs.cn/docs/use-static-query/#composing-custom-usestaticquery-hooks
const recordingComparisonData = () => {
  const { recordingComparisonDataYml } = useStaticQuery(graphql`
    query queryReportYAML {
      allReportingYaml {
        nodes {
          id
          feature
          oneOnOne
          netMD
        }
      }
    }
  `);

  return recordingComparisonDataYml.nodes;
};

export default recordingComparisonData;
