import React, { Component } from 'react'
import { Inventory } from 'controllers/Inventory'
import ZipInput from './ZipInput'
import FilterButton from './FilterButton'
import ModelDropdown from './ModelDropdown'
import ToTop from './ToTop'
import FilterList from './FilterList'
import './header-masthead.scss'

const HeaderMasthead = ({ results = false }) => (
  <Inventory.Consumer>
    {({ filteredCars, chosenModel }) => (
      <section className="vw__header-masthead">
        <div className="top-bar" />
        <div className="container">
          <div className="masthead-container">
            <div className="content-container">
              <div className="info-content">
                <h1 className="headline">Let's find your perfect Volkwagen.</h1>
                {!results && <p>Select a model to find inventory near you.</p>}

                {results && (
                  <>
                    There are <b>{filteredCars.length} matches for {chosenModel}</b> at <b>{'Volkwagen of Santa Monica'}</b>
                    <FilterList />
                  </>
                )}
              </div>

              <div className="actions-content">
                {results && <FilterButton />}
                <ZipInput />
                <ModelDropdown />
                {results && <ToTop />}
              </div>
            </div>
          </div>
        </div>
      </section>
    )}
  </Inventory.Consumer>
)

export default HeaderMasthead