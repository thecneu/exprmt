import React from 'react'

const Link = ({ url = '/', children }) => (
  <a href={url} className="vw__link">{children}</a>
)

export default Link