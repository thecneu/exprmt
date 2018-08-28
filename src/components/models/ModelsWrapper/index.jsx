import React from 'react'
import ModelsContainer from 'containers/Models'
import CardModel from 'components/cards/Model'
import './wrapper.scss'

const ModelsWrapper = () => (
  <div className="vw__models">
    <div className="container">
      <ModelsContainer>
        {({ models }) => (
          models.map(group => (
            <section key={group.name}>
              <div className="model-group">
                <h3 className="title-1">{group.name}</h3>
              </div>

              <div className="grid-container">
                {group.models.map(model => (
                  <div className="grid-item" key={model.slug}>
                    <CardModel model={model} />
                  </div>
                ))}
              </div>
            </section>
          ))
        )}
      </ModelsContainer>
    </div>
  </div>
)

export default ModelsWrapper