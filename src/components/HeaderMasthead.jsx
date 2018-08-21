import React, { Component } from 'react'
import { Inventory } from 'controllers/Inventory'
import ZipInput from './ZipInput'
import FilterButton from './FilterButton'
import ModelDropdown from './ModelDropdown'
import ToTop from './ToTop'
import FilterList from './FilterList'
import './header-masthead.scss'

const HeaderMasthead = ({ results = false, filteredCars, chosenModel, filters }) => (
  <Inventory.Consumer>
    {({ filteredCars, chosenModel, filters }) => (
      <section className="vw__header-masthead">
        <div className="top-bar" />
        <div className="container">
          <div className="grid-container">
            <div className="inner-content">
              <h1>Let's find your perfect Volkwagen.</h1>
              {!results && <p>Select a model to find inventory near you.</p>}

              {results && (
                <>
                  There are <b>{filteredCars.length} matches for {chosenModel}</b> at <b>{'Volkwagen of Santa Monica'}</b>
                  <FilterList filters={filters} />
                </>
              )}
            </div>

            {results && (
              <div className="actions-content">
                <FilterButton />
                <ZipInput />
                <ModelDropdown />
                <ToTop />
              </div>
            )}
          </div>
        </div>
      </section>
    )}
  </Inventory.Consumer>
)

export default HeaderMasthead