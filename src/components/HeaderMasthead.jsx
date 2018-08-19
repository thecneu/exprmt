import React, { Component } from 'react'
import { Inventory } from 'controllers/Inventory'
import ZipInput from './ZipInput'
import FilterButton from './FilterButton'
import ModelDropdown from './ModelDropdown'
import ToTop from './ToTop'
import FilterList from './FilterList'
import './header-masthead.scss'

const Masthead = ({ filteredCars, chosenModel, results }) => (
  <section className="vw__top-header">
    <div className="top-bar" />
    <div className="container">
      <div className="inner-container">
        <div className="inner-content">
          <h1>Let's find your perfect Volkwagen.</h1>
          <p>Select a model to find inventory near you.</p>

          There are <b>{filteredCars.length} matches for {chosenModel}</b> at <b>{'Volkwagen of Santa Monica'}</b>
          <FilterList />
        </div>

        <div className="actions-content">
          <FilterButton />
          <ZipInput />
          <ModelDropdown />
          <ToTop />
        </div>
      </div>
    </div>
  </section>
)

class HeaderMasthead extends Component {
  render() {
    return (
      <Inventory.Consumer>
        {({ filteredCars, chosenModel }) => <Masthead chosenModel={chosenModel} filteredCars={filteredCars} {...this.props} />}
      </Inventory.Consumer>
    )
  }
}

export default HeaderMasthead
