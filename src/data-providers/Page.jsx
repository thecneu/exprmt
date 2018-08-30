import React from 'react'
import jsonData from 'data/page.json'

const PageDataProvider = ({ children }) => children(jsonData)

export default PageDataProvider