import React from 'react'
import { css } from '@emotion/react';

const style = css`
  display: flex;
  flex-direction: column;
  position: relative;
  // outline: #0f0 1px solid;

  > span {
    margin:0;
    position: absolute;
    top: -10px;
    left: 10px;
    border-radius: 2px;
    padding:2px;
    min-width: 40px;
    text-align: center;
    background-color: #10ABEE;
    font-weight: bold;
    color: #FFF;
  }

  > div {
    padding:5px 0;
  }

  > div:nth-of-type(1) {
    flex-grow: 1;
    //outline: #f00 1px solid;
  }

  > div:nth-of-type(2) {
    //outline: #00f 1px solid;
  }
`;

export default function SequentialCard({ number = null, description, imageUrl }) {
  return (
    <div css={style}>
      {number && <span>{number}</span>}
      <div>
        {description}
      </div>
      <div>
        <img src={imageUrl} />
      </div>
    </div>
  )
}
