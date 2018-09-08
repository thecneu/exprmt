import { Component } from 'react'
import dealersJson from 'data/dealers.json'
import filtersJson from 'data/model-filters.json'
import modelsJson from 'data/models.json'
import modelsLayoutJson from 'data/models-layout.json'
import pageJson from 'data/page.json'

class DataProvider extends Component {
  state = {
    dealersData: dealersJson,
    modelsData: modelsJson,
    modelsLayoutData: modelsLayoutJson,
    pageData: pageJson
  }

  render() {
    return this.props.children(this.state)
  }
}

export default DataProvider
