import React, { Component } from 'react'
import styled from 'styled-components'
import { Content } from 'ui'
import FilterContent from 'containers/filter/FilterContent'

const Loading = styled.div`
  height: 10px;
  background: #00b1eb;
  width: 100%;
`

const HeaderContainer = styled.div`
  background: white;
`

const FilterHeaderContainer = styled.div`
  padding: 50px 0;
`

class Header extends Component {
  render() {
    return (
      <>
        <Loading />
        <HeaderContainer>
          <Content>
            <FilterHeaderContainer>
              <FilterContent />
            </FilterHeaderContainer>
          </Content>
        </HeaderContainer>
      </>
    )
  }
}

export default Header
