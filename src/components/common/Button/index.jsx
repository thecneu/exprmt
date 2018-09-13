import React from 'react';
import cx from 'classnames';

const Button = ({ stroked = false, fill = false, full = false, children, className, ...props }) => (
  <button {...props} className={cx('vw__button', { 'btn-stroked': stroked }, { 'btn-full': full }, { 'btn-fill': fill }, className)}>
    {children}
  </button>
);

export default Button;
