import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { css } from '@emotion/react';

const style = css`
  display: flex;
  gap: 10px;
`;


export default function FacebookPage({ title, url }) {
  return (
    <a href={url} title={title} css={style}>
      <FontAwesomeIcon icon={faFacebook} size='2x' color='#1198F6' />
      <span>{title}</span>
    </a>
  );
}

