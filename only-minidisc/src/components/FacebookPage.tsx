import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { css } from '@emotion/react';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const style = css`
  display: flex;
  gap: 10px;
`;

export default function FacebookPage({ title, url }) {
  return (
    <a href={url} title={title} css={style}>
      <FontAwesomeIcon icon={faFacebook as IconProp} size='2x' color='#1198F6' />
      <span>{title}</span>
    </a>
  );
}

