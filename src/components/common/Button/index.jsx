import React from 'react';
import cx from 'classnames';

const Button = ({ stroked = false, fill = false, inverted = false, children, className, ...props }) => (
  <button {...props} className={cx('vw__button', { 'btn-stroked': stroked }, { 'btn-inverted': inverted }, { 'btn-fill': fill }, className)}>
    {children}
  </button>
);

export default Button;
