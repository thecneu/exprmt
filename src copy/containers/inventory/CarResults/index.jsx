import React, { Component } from 'react'
import styled from 'styled-components'
import { Inventory } from 'controllers/Inventory'
import InventoryViewToolbar from 'components/InventoryViewToolbar'
import Card from 'components/Card'

const Header = styled.div``;
const Content = styled.div``;
const Container = styled.div`
  flex: 1;
`

class CarResults extends Component {
  state = { view: 'list' }

  changeView = (view) => {
    this.setState({ view })
  }

  render() {
    return (
      <Container>
        <Header>
          <InventoryViewToolbar changeView={this.changeView} />
        </Header>

        <Content>
          <Inventory.Consumer>
            {({ filteredCars, sortBy }) => (
              <div className={`flex-container`}>
                {filteredCars.map(car => <Card car={car} key={car.vin} view={this.state.view} />)}
              </div>
            )}
          </Inventory.Consumer>
        </Content>
      </Container>
    )
  }
}

export default CarResults
