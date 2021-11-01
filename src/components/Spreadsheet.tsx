import React, { useState, useEffect } from 'react';
import data from './ipod-specification-data';
import { css } from '@emotion/react';

const Spreadsheet = () => {
  const [cellData] = useState(data);

  useEffect(() => {
    const luckysheet = window.luckysheet;
    luckysheet.create({
      container: 'spreadsheet',
      showtoolbar: false,
      showinfobar: false,
      data: [
        {
          name: 'iPod specification',
          color: '',
          status: '1',
          order: '0',
          celldata: luckysheet.getGridData(cellData),
          index: 0,
          config: {
            columnlen: {
              0: 250,
              1: 150,
              2: 150,
              3: 150,
              4: 150,
            }, //Table column width
          },
        },//end sheet 1
      ],
    });
    console.log('sheet download');
  }, []);

  const style = css`
    margin: 0;
    padding: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  `;

  return (
    <div id="spreadsheet" css={style}></div>
  );
}

export default Spreadsheet;
