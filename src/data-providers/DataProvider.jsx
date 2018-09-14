import { Component } from 'react'
import dealersJson from 'data/dealers.json'
import modelsJson from 'data/models.json'
import modelsLayoutJson from 'data/models-layout.json'
import pageJson from 'data/page.json'

const parseModelsData = (data) => {
  const newData = data.map(({ filterAttributes, ...model }) => ({
    ...model,
    filterAttributes: filterAttributes.map(fa => Array.isArray(fa.values[0]) ? ({ ...fa, values: fa.values.map(value => ({ description: value[0], color: value[1] })) }) : fa)
  }))
  return newData
}

class DataProvider extends Component {
  state = {
    dealersData: dealersJson,
    modelsData: parseModelsData(modelsJson),
    modelsLayoutData: modelsLayoutJson,
    pageData: pageJson
  }

  render() {
    return this.props.children(this.state)
  }
}

export default DataProvider
