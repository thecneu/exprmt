import React from 'react'

const DisplayHtml = ({ children }) => (
  <span dangerouslySetInnerHTML={{ __html: children }} />
)

export default DisplayHtml