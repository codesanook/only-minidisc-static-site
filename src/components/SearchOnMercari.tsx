import React from 'react';
import { css } from '@emotion/react';

const style = css`
  margin: 10px 0;
`;

type Props = {
  title: string;
}

export default function SearchOnMercari({ title }: Props) {

  const keyword = title.trim().replace(/\s+/g, '-');
  const searchUrl = `https://jp.mercari.com/search?keyword=${keyword}&status=on_sale&page=1`

  return (
    <div css={style}>
      <h3>{title} </h3>
      <a href={searchUrl} title={title} target='_blank'>
        Checking {title} on Mercari
      </a>
    </div>
  );
}
