import React, { Component } from 'react'
import styled from 'styled-components'
import _ from 'lodash'

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

export default Section
