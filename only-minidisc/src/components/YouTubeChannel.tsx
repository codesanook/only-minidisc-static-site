import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { css } from '@emotion/react';
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const style = css`
  display: flex;
  gap: 10px;
`;

export default function YouTubeChannel({ title, url }) {
  return (
    <a href={url} title={title} css={style}>
      <FontAwesomeIcon icon={faYoutube as IconProp} size='2x' color='#FF1A1A' />
      <span>{title}</span>
    </a>
  );
}
