import React, { Component } from 'react'
import styled from 'styled-components'

const Div = styled.div`
  width: 95px;
  top: 0;
  position: fixed;
  height: 100%;
  box-shadow: 10px 0px 30px rgba(0, 0, 0, 0.15);
`;

class Navigation extends Component {
  render() {
    return (
      <Div />
    )
  }
}

export default Navigation