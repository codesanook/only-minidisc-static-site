import React from 'react';
import { css } from '@emotion/react';

const style = css`
  margin: 10px 0;
`;

type Props = {
  searchTerm: string;
}

export default function SearchOnYahooAuctions({ searchTerm }: Props) {

  // const keyword = title.trim().replace(/\s+/g, '-');
  const keyword = encodeURIComponent(searchTerm.trim());
  const searchUrl = `https://auctions.yahoo.co.jp/search/search?p=${keyword}`

  return (
    <div css={style}>
      <h3>{searchTerm} </h3>
      <a href={searchUrl} title={searchTerm} target='_blank'>
        Checking <strong>{searchTerm}</strong> on Yahoo Auctions Japan
      </a>
    </div>
  );
}
