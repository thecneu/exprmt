import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import cx from 'classnames';
import ArrowRightIcon from 'icons/ArrowRight';

const Link = ({ url = '/', external = false, caret = true, children, className, ...props }) => (
  external
    ? <a href={url} className={cx('vw__link', className)} {...props}>{children} {caret && <ArrowRightIcon />}</a>
    : <RouterLink to={url} className={cx('vw__link', className)} {...props}>{children} {caret && <ArrowRightIcon />}</RouterLink>
);

export default Link;