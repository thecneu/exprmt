import React, { Component } from 'react';
import { InventoryContext } from 'controllers/Inventory';

class Dropdown extends Component {
  state = { expanded: false }

  toggleExpanded = () => this.setState(({ expanded }) => ({ expanded: !expanded }))

  onChange = (slug) => {
    this.props.onModelChange(slug);
    this.toggleExpanded();
  }

  renderDropdown() {
    const { currentModel, models } = this.props;

    return (
      <>
        <button className="chosen" onClick={this.toggleExpanded} tabIndex="0">
          {currentModel.name}
        </button>

        {this.state.expanded && (
          <div className="options">
            {models.map((model) => (
              <button
                className="option"
                key={model.slug}
                onClick={() => this.onChange(model.slug)}
              >
                {model.name}
              </button>
            ))}
          </div>
        )}
      </>
    );
  }

  render() {
    const { currentModel, models, onModelChange } = this.props;

    return (
      <div className="vw__models-dropdown">
        <select
          value={currentModel.slug}
          onChange={(e) => onModelChange(e.currentTarget.value)}
          onBlur={(e) => onModelChange(e.currentTarget.value)}
        >
          {models.map((model) => (
            <option key={model.slug} value={model.slug}>
              {model.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

const ModelsDropdown = () => (
  <InventoryContext.Consumer>
    {({ currentModel, models, onModelChange }) => (
      <Dropdown
        currentModel={currentModel}
        models={models}
        onModelChange={onModelChange}
      />
    )}
  </InventoryContext.Consumer>
);

export default ModelsDropdown;
