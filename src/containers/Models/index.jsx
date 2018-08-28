import React from 'react'
import ModelsDataProvider from 'data-providers/Models'


const ModelsContainer = ({ children }) => (
  <ModelsDataProvider>
    {(data) => children(data)}
  </ModelsDataProvider>
)

export default ModelsContainer