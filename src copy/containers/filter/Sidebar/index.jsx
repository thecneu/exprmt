import React, { Component } from 'react'
import styled from 'styled-components'
import { Inventory } from 'controllers/Inventory'
import FilterSection from 'containers/filter/Section'
import CarDropdown from 'components/CarDropdown'

const SidebarContainer = styled.div`
  width: 400px;
  @media (max-width: 1023px) { display: none; }
`;
const Header = styled.div``;
const Content = styled.div``;

class Sidebar extends Component {
  render() {
    return (
      <SidebarContainer>
        <Header>
          <Inventory.Consumer>
            {({ models, chosenModel, changeState }) =>
              <CarDropdown chosenModel={chosenModel} models={models} changeState={changeState} />
            }
          </Inventory.Consumer>
        </Header>

        <Content>
          <Inventory.Consumer>
            {({ filterables, updateFilter, filter }) => Object.keys(filterables).map(headline =>
              <FilterSection
                updateFilter={updateFilter}
                filterables={filterables[headline]}
                headline={headline}
                filter={filter[headline]}
                key={headline} />
            )}
          </Inventory.Consumer>
        </Content>
      </SidebarContainer>
    )
  }
}

export default Sidebar
