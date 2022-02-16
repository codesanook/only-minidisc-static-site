// https://www.gatsbyjs.com/tutorial/building-a-theme/#add-static-data-to-a-theme
// https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/
// https://www.gatsbyjs.com/plugins/gatsby-transformer-yaml/

// yarn add gatsby-source-filesystem gatsby-transformer-yaml
import { useStaticQuery, graphql } from 'gatsby';

// https://www.gatsbyjs.cn/docs/use-static-query/#composing-custom-usestaticquery-hooks
export default function DifferencesOfRecordingData() {
  const { allDifferencesOfRecordingDataYaml: { nodes: data } } = useStaticQuery(graphql`
    query differencesOfRecordingDataQuery {
      allDifferencesOfRecordingDataYaml {
        nodes {
          oneToOne
          netMD
          feature
        }
      }
    }
  `);

  return data;
};

