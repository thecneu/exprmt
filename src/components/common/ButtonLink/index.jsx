import React from 'react';
import cx from 'classnames';

const ButtonLink = ({ url = '/', stroked = false, inverted = false, fill = false, children, className, ...props }) => (
  <a href={url} {...props} className={cx('vw__button', { 'btn-stroked': stroked }, { 'btn-inverted': inverted }, { 'btn-fill': fill }, className)}>
    {children}
  </a>
);

export default ButtonLink;
