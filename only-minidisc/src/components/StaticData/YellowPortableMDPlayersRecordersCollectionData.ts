// yarn add gatsby-source-filesystem gatsby-transformer-yaml
import { useStaticQuery, graphql } from 'gatsby';

// https://www.gatsbyjs.cn/docs/use-static-query/#composing-custom-usestaticquery-hooks
export default function YellowPortableMDPlayersRecordersCollectionData() {
  const { allYellowPortableMdPlayersRecordersCollectionDataYaml: { nodes: data } } = useStaticQuery(graphql`
    query allYellowPortableMdPlayersRecordersCollectionDataYamlQuery  {
      allYellowPortableMdPlayersRecordersCollectionDataYaml {
        nodes {
          deviceGraphicalImageUrls
          deviceName
        }
      }
    }
  `);

  return data;
};

