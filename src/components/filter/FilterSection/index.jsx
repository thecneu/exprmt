import React, { Component } from 'react'

class FilterSection extends Component {
  state = { isOpen: false }

  toggle = () => this.setState(({ isOpen }) => ({ isOpen: !isOpen }))

  render() {
    const { isOpen } = this.state

    return (
      <div className="vw__filter-section">
        <header onClick={this.toggle}>
          <div className="grid-container">
            <div className="headline-container">
              <h2>section</h2>
            </div>

            <div className="filter-actions">
              <div className="filtered-choices">

              </div>

              <div className="action">
                <button>{isOpen ? '-' : '+'}</button>
              </div>
            </div>
          </div>
        </header>

        {isOpen && (
          <div className="section-content">
            <ul>

            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default FilterSection
