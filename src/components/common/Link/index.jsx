import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

const Link = ({ url = '/', external = false, children, ...props }) => (
  external
    ? <a href={url} className="vw__link" {...props}>{children}</a>
    : <RouterLink to={url} className="vw__link" {...props}>{children}</RouterLink>
)

export default Link