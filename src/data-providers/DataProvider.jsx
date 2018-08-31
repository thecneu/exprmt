import React, { Component } from 'react'
import sortBy from 'lodash/sortBy'
import dealersJson from 'data/dealers.json'
import modelsJson from 'data/models.json'
import modelsLayoutJson from 'data/models-layout.json'
import pageJson from 'data/page.json'

class DataProvider extends Component {
  state = {
    dealers: dealersJson.dealers,
    models: modelsJson,
    modelsLayout: modelsLayoutJson,
    page: pageJson
  }

  render() {
    return this.props.children(this.state)
  }
}

export default DataProvider
