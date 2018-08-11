import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

class InventoryViewToolbar extends Component {
  render() {
    return (
      <Container>
        <button onClick={() => this.props.changeView('list')}>list</button>
        <button onClick={() => this.props.changeView('grid')}>grid</button>
      </Container>
    )
  }
}

export default InventoryViewToolbar