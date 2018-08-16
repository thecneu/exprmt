<div 'FilterHeader'>
  Loading`height: 10px;background: #00b1eb;width: 100%;`
  <styled.div`background: white;`>
    <div className="container">
      <styled.div`padding: 50px 0;`>
        <Inventory.Consumer>
          {({ filteredCars, chosenModel }) => (
            <>
              <h1>Let's find your perfect Volkswagen</h1>
              <p>Select a model to find inventory near you</p>
              <p>There are {filteredCars.length} {chosenModel}s</p>
            </>
          )}
        </Inventory.Consumer>
      </div>
    </div>
  </div>
</div>

<styled.div`background: #f3f6f7;` 'Inventory'>
  <div className="container">
    <div className="flex-container">
      <div 'FilterSidebar'>
        <Inventory.Consumer>
          {({ models, chosenModel, changeState }) =>
            <CarDropdown chosenModel={chosenModel} models={models} changeState={changeState} />
          }
        </Inventory.Consumer>
        <Inventory.Consumer>
            {({ filterables, updateFilter, filter }) => Object.keys(filterables).map(headline =>
              <FilterSection updateFilter={updateFilter} filterables={filterables[headline]} headline={headline} filter={filter[headline]} key={headline}>
                const Box = styled.div`
                  width: 15px;
                  height: 15px;
                  margin-right: 8px;
                  display: inline-block;
                `

                class Section extends Component {
                  state = {
                    checked: this.props.filter || []
                  }

                  formatLabelList(item) {
                    const isObject = _.isObject(item)
                    const label = isObject ? item.colorName : item

                    return (
                      <li key={label}>
                        <label>
                          <input type="checkbox" checked={this.state.checked.includes(label)} value={label} onChange={this.onChange} />
                          {isObject && <Box style={{ backgroundColor: item.color }} />}
                          <span>{label}</span>
                        </label>
                      </li>
                    )
                  }

                  onChange = (e) => {
                    const value = e.currentTarget.value
                    const isChecked = this.state.checked
                    const checked = isChecked.includes(value) ? isChecked.filter(chk => chk !== value) : [ ...isChecked, value ]
                    this.setProviderState(checked)
                    this.setState({ checked })
                  }

                  setProviderState = (checked) => {
                    this.props.updateFilter(this.props.headline, checked)
                  }

                  render() {
                    const { headline, filterables } = this.props

                    return (
                      <div>
                        <h2>{headline}</h2>
                        <ul>
                          {filterables.map(label => this.formatLabelList(label))}
                        </ul>
                      </div>
                    )
                  }
                }
              </FilterSection>
            )}
          </Inventory.Consumer>
      </div>

      <div 'CarResults'>
        <div 'InventoryViewToolbar'>
          <button>list</button>
          <button>grid</button>
        </div>
        <Inventory.Consumer>
          {({ filteredCars, sortBy }) => (
            <div className="flex-container">
              {filteredCars.map(car =>
                <Card car={car} key={car.vin} type={this.state.type} />
              )}
            </div>
          )}
        </Inventory.Consumer>
      </div>
    </div>
  </div>
</div>