import React, { Component } from 'react'
import FilterAttribute from 'components/filter/FilterAttribute'
import './filter-section.scss'

class FilterSection extends Component {
  state = { isOpen: false }

  toggle = () => this.setState(({ isOpen }) => ({ isOpen: !isOpen }))

  render() {
    const { isOpen } = this.state
    const { name, attributes } = this.props

    return (
      <div className="vw__filter-section">
        {console.log('filtersection render')}
        <header onClick={this.toggle}>
          <div className="grid-container">
            <div className="headline-container">
              <h2>{name}</h2>
            </div>

            <div className="filter-actions">
              <div className="filtered-choices"></div>

              <div className="action">
                <button>{isOpen ? '-' : '+'}</button>
              </div>
            </div>
          </div>
        </header>

        {isOpen && (
          <div className="section-content">
            {attributes.map(attribute => <FilterAttribute key={attribute.value} {...attribute} />)}
          </div>
        )}
      </div>
    )
  }
}

export default FilterSection
