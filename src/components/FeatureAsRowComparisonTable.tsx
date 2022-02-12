// This table fits for many comparison features (rows) but less products (columns)
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Wrapper = styled.div`
  //overflow-x: auto;
`;

const comparisonTableStyle = () => css`
  border-collapse: collapse;
  position: relative;
  height: 100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

  * {
    box-sizing: border-box
  }

  th, td {
    padding: 10px 10px;
  }

  th {
    min-width: 150px;
    position: sticky;
    top: 0;
    background-color: #fff;
    color: #000;
  }

  tbody tr{
    padding: 10px 0;
    &:nth-child(even) {
      background-color: #fff;
    }

    &:nth-child(odd) {
      background-color: #fff;
    }
    &:hover {
      background-color: #fff;
    }
  }

  @media screen and (max-width: 768px) {
    th, td {
      width: 50%;
    }

    th {
      display: inline-block;
    }

    tbody tr {
      display: flex;
      flex-flow: row wrap;
    }

    td {
      flex: auto; // Same as 1 1 auto.
    }

    th:first-child {
      display:none;
    }

    td:first-child {
      text-align: center;
      width: 100%;
      font-weight: bold;
    }
  }
`;

// https://www.sitepoint.com/responsive-solutions-for-feature-comparison-tables/
export default function FeatureAsRowComparisonTable({ data }) {

  return (
    <Wrapper>
      <table css={comparisonTableStyle()}>
        <thead>
          <tr>
            <th></th>
            <th>1:1 (optical input)</th>
            <th>Net MD (Web MiniDisc)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) =>
            <tr key={item.id}>
              <td data-column={item.feature}>{item.feature}</td>
              <td data-column='oneToOne'>{item.oneToOne}</td>
              <td data-column='netMD'>{item.netMD}</td>
            </tr>
          )}
        </tbody>
      </table>
    </Wrapper>
  );
};

