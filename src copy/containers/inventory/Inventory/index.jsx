import React, { Component } from 'react'
import styled from 'styled-components'
import { Content } from 'ui'
import FilterSidebar from 'containers/filter/Sidebar'
import CarResults from 'containers/inventory/CarResults'

const Container = styled.div`display: flex;`
const BackgroundContainer = styled.div`background: #f3f6f7;`

class Inventory extends Component {
  render() {
    return (
      <BackgroundContainer>
        <Content>
          <Container>
            <FilterSidebar />
            <CarResults />
          </Container>
        </Content>
      </BackgroundContainer>
    )
  }
}

export default Inventory
