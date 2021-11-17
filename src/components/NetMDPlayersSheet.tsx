import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import data from './net-md-players-data.json';

const containerId = 'netMDPlayersSheet';

// demo https://mengshukeji.github.io/LuckysheetDemo/
export default function NetMDPlayersSheet() {
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
          name: 'Net MD players',
          color: '',
          status: '1',
          order: '0',
          celldata: luckysheet.getGridData(cellData),
          index: 0,
          config: {
            columnlen: {
              0: 100,
              1: 100,
              2: 100,
              3: 100,
              4: 50,
              5: 150,
              6: 150,
              7: 150,
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
