import React from 'react'
import { Link } from 'react-router-dom'

const LinkAnchor = ({ url = '', className = 'vw__link', children, ...props }) => (
  <Link to={url} className={className} {...props}>{children}</Link>
)

export default LinkAnchor