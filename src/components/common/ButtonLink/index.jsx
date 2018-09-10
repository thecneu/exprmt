import React from 'react';
import cx from 'classnames';

const ButtonLink = ({ url = '/', stroked = false, full = true, children, ...props }) => (
  <a href={url} {...props} className={cx('vw__button', { 'btn-stroked': stroked }, { 'btn-full': full })}>
    {children}
  </a>
);

export default ButtonLink;
