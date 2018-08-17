import React from 'react'

const ButtonLink = ({ url = '/', children }) => (
  <a href={url} className="vw__button">{children}</a>
)

export default ButtonLink