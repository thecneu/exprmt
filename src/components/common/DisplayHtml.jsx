import React from 'react';

const DisplayHtml = ({ children, ...props }) => (
  <span {...props} dangerouslySetInnerHTML={{ __html: children }} />
);

export default DisplayHtml;
