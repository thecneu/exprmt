import React, { Component } from 'react'

class FilterButton extends Component {
  state = { active: false }
  toggle = () => this.setState(state => ({ active: !state.active}))

  render() {
    return (
      <div className="vw__filter-button">
        <svg onClick={this.toggle} style={{ width: 30 }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 32"><defs></defs><g transform="translate(-3108 -444)"><g style={{fill: 'none',}} transform="translate(3108 444)"><rect style={{stroke: 'none'}} width="40" height="32" rx="6"/><rect style={{fill: this.state.active ? '#00b1eb' : 'none', stroke:'#00b0ea',opacity:'0.6'}} x="0.5" y="0.5" width="39" height="31" rx="5.5"/></g><path style={{fill: this.state.active ? 'white' : '#00b1eb'}} d="M3129.746,460.784h-1.634v-8.916a.606.606,0,0,0-1.209,0v8.916h-1.634a.587.587,0,0,0-.6.568v4.2a.587.587,0,0,0,.6.568h1.634v3.01a.606.606,0,0,0,1.209,0v-3.01h1.634a.587.587,0,0,0,.605-.568v-4.2A.587.587,0,0,0,3129.746,460.784Zm-.605,4.2h-3.267v-3.067h3.267Zm-6.655-10.108h-1.634v-3.01a.606.606,0,0,0-1.209,0v3.01h-1.634a.586.586,0,0,0-.6.567v4.2a.586.586,0,0,0,.6.568h1.634v8.916a.606.606,0,0,0,1.209,0v-8.916h1.634a.586.586,0,0,0,.6-.568v-4.2A.586.586,0,0,0,3122.486,454.878Zm-.6,4.2h-3.267v-3.067h3.267Zm15.125-4.2h-1.634v-3.01a.606.606,0,0,0-1.21,0v3.01h-1.633a.588.588,0,0,0-.606.567v4.2a.588.588,0,0,0,.606.568h1.633v8.916a.606.606,0,0,0,1.21,0v-8.916h1.634a.588.588,0,0,0,.606-.568v-4.2A.588.588,0,0,0,3137.006,454.878Zm-.6,4.2h-3.268v-3.067h3.268Z" transform="translate(0.596)"/></g></svg>
      </div>
    )
  }
}

export default FilterButton