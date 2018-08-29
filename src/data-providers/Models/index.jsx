import React from 'react'
import sortBy from 'lodash/sortBy'
import modelJson from 'data/models.json'

const carModels = modelJson.reduce((next, section) => {
  const models = section.models.map(model => ({
    name: model.name,
    slug: model.slug
  }))
  return [
    ...next,
    ...models
  ]
}, [])

const ModelsDataProvider = ({ children }) => children({
  models: modelJson,
  carModels: sortBy(carModels, 'name')
})

export default ModelsDataProvider