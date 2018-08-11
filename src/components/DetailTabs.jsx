import React, { Component } from 'react'
import CheckboxIcon from 'icons/Checkbox'

class DetailTabs extends Component {
  render() {
    const { tabs, features } = this.props

    return (
      <div className="container">
        <section className="vw__tabbed-content-container">
          <div className="vw__tab-header-container">
            {tabs.map(headline => <div key={headline}><span>{headline}</span></div>)}
          </div>

          <div className="vw__tabs-container">
            <div className="vw__tab">
              {features.map(feature => (
                <div className="feature-item" key={feature}>
                  <div className="icon-container"><CheckboxIcon /></div>
                  <div className="description-container"><p>{feature}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default DetailTabs