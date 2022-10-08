// yarn add gatsby-source-filesystem gatsby-transformer-yaml
import { useStaticQuery, graphql } from 'gatsby';

// https://www.gatsbyjs.cn/docs/use-static-query/#composing-custom-usestaticquery-hooks
export default function NetMDInfographicData() {
  // alias property node of allNetMDInfographicDataYaml to data
  const { allNetMdInfographicDataYaml: { nodes: data } } = useStaticQuery(graphql`
    query netMDInfographicDataQuery {
      allNetMdInfographicDataYaml {
        nodes {
          description
          imageUrl
        }
      }
    }
  `);

  return data;
};

