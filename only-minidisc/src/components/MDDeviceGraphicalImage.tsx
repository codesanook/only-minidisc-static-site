import React from 'react';
import { css } from '@emotion/react';

const style = css`
  display: inline-flex;
  flex-direction: column;
  margin: 5px;
  width: 80%;
  max-width: 200px;
  justify-content: start;

  h4{
    margin: 2px;
    padding: 0;
    text-align: center;
  }

  img {
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
  }
`;

export default function MDDeviceGraphicalImage({ deviceName = null, deviceGraphicalImageUrl }) {
  return (
    <div css={style}>
      <h4>{deviceName ?? ''}</h4>
      <img alt={deviceName} title={deviceName} src={deviceGraphicalImageUrl} css={style} />
    </div>
  );
}
