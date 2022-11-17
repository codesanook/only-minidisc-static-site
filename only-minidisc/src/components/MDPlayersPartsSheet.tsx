import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import data from './md-players-parts-data';

const containerId = 'mdPlayerPartsSheet';
// demo https://mengshukeji.github.io/LuckysheetDemo/
export default function MDPlayersPartsSheet() {
  const [cellData] = useState(data);

  useEffect(() => {
    const luckysheet = window.luckysheet;

    // configuration https://mengshukeji.github.io/LuckysheetDocs/guide/config.html
    luckysheet.create({
      container: containerId,
      showtoolbar: false,
      showinfobar: false,
      lang: 'en',
      column: 5,
      row: 30,
      enableAddRow: false,
      showsheetbar: false,
      //showsheetbarConfig: { }

      data: [
        // Sheet configuration https://mengshukeji.github.io/LuckysheetDocs/guide/sheet.html
        {
          name: 'MD players parts',
          color: '',
          status: '1',
          order: '0',
          celldata: luckysheet.getGridData(cellData),
          index: 0,
          config: {
            columnlen: {
              0: 100,
              1: 220,
              2: 150,
              3: 150,
              4: 150,
            }, // Table column width
          },
        }, // End sheet 1
      ],
    });
    console.log('sheet loaded');
  }, []);

  const style = css`
    margin: 0;
    padding: 0;
    width: 100%;
    height: 350px;
  `;

  return (
    <div id={containerId} css={style}>
    </div>
  );
}
