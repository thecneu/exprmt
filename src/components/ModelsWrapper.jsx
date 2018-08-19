import React from 'react'
import compact from 'lodash/compact'
import { Inventory } from 'controllers/Inventory'
import CardModel from 'components/CardModel'
import './models-container.scss'

const groupModelMappings = {
  sedans: ['Jetta', 'Passat'],
  suvs: ['Atlas', 'Tiguan', 'Tiguan Limited'],
  wagons: ['Golf', 'Golf Alltrack', 'Golf GTI', 'Golf R', 'Golf SportWagen'],
  compacts: ['Beetle'],
  convertibles: ['Beetle Convertible']
}

const getGroupModels = (models) => (
  Object.keys(groupModelMappings).map(type => ({
    type,
    models: compact(
      groupModelMappings[type].map(model => models.find(theModel => theModel.model === model))
    )
  }))
)

const ModelsWrapper = () => (
  <div className="vw__models-container">
    <Inventory.Consumer>
      {({ carModels }) => (
        <div className="container">
          {getGroupModels(carModels).map(group => (
            <section key={group.type}>
              <div className="model-type">
                <h3>{group.type}</h3>
              </div>

              <div className="flex-container">
                {group.models.map(model => (
                  <div className="flex-item" key={model.model}>
                    <CardModel model={model} />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </Inventory.Consumer>
  </div>
)

export default ModelsWrapper
