import React from 'react';
import cx from 'classnames';

const ButtonLink = ({ url = '/', stroked = false, full = false, fill = false, children, className, ...props }) => (
  <a href={url} {...props} className={cx('vw__button', { 'btn-stroked': stroked }, { 'btn-full': full }, { 'btn-fill': fill }, className)}>
    {children}
  </a>
);

export default ButtonLink;
