import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import data from './netmd-players-data.json';

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
          frozen: {
            type: 'column'
          },
          config: {
            columnlen: {
              0: 110, // Model name
              1: 80, // Device type
              2: 80, // Release date
              3: 50, // Hi-MD
              4: 150, // Input
              5: 150, // Output
              6: 150, // Connection to a computer
              7: 150, // Remark
            }, // End columns' width
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
