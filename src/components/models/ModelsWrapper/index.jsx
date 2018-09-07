import React from 'react'
import DataProvider from 'data-providers/DataProvider'
import CardModel from 'components/cards/Model'
import './wrapper.scss'

const formatModels = (models, layout) => {
  return layout.map(modelType => ({
    name: modelType.name,
    models: modelType.models.map(type => models.find(model => model.slug === type))
  }))
}

const ModelsWrapper = () => (
  <div className="vw__models">
    <div className="container">
      <DataProvider>
        {({ modelsData, modelsLayoutData }) => (
          formatModels(modelsData, modelsLayoutData).map(modelGroup => (
            <section key={modelGroup.name}>
              <div className="model-group">
                <h3 className="title-1">{modelGroup.name}</h3>
              </div>

              <div className="grid-container">
                {modelGroup.models.map(model => (
                  <div className="grid-item" key={model.slug}>
                    <CardModel model={model} />
                  </div>
                ))}
              </div>
            </section>
          ))
        )}
      </DataProvider>
    </div>
  </div>
)

export default ModelsWrapper
