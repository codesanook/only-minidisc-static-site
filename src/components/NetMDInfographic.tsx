import React, { Fragment } from 'react';
import SequentialCard from './SequentialCard';
import { css } from '@emotion/react';

const style = css`
    display: flex;
    flex-direction: column;
    > div {
      padding: 10px;
    }

    @media (min-width: 540px) {
      flex-direction: row;
      flex-wrap: wrap;
      > div {
        width: 50%;
      }
    }
  `

export default function NetMDInfographic({ data }) {

  return (
    <div css={style}>
      {
        data.map((item, index) =>
          <Fragment key={item.id}>
            <SequentialCard number={index + 1} description={item.description} imageUrl={item.imageUrl} />
          </Fragment>
        )
      }
    </div>
  )

}
