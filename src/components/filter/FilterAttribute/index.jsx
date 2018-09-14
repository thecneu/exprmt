import React, { Component } from 'react';
import cx from 'classnames';
import ColorBox from 'components/filter/ColorBox';
import DisplayHtml from 'components/common/DisplayHtml';
import CheckmarkIcon from 'icons/Checkmark';
import './filter-attribute.scss';
import 'components/common/checkbox.scss';

class FilterAttribute extends Component {
  updateFilter = () => {
    const { attribute, updateAppliedFilter } = this.props;

    if (attribute.required === undefined) {
      updateAppliedFilter(attribute);
    }
  }

  render() {
    const { selected, attribute, isSwatch } = this.props;

    return (
      <button
        className={cx('vw__filter-attribute', { swatch: isSwatch })}
        onClick={this.updateFilter}
      >
        <div
          className={cx(
            'label',
            { selected: isSwatch && (selected || attribute.required === true) },
            { 'is-disabled': attribute.required === false }
          )}
        >
          {!isSwatch && (
            <div className="vw__checkbox">
              <div
                className={cx(
                  'checkbox',
                  { selected: selected || attribute.required === true },
                  { 'is-disabled': attribute.required === false }
                )}
              >
                <CheckmarkIcon />
              </div>
            </div>
          )}

          {attribute.color && (
            <ColorBox color={attribute.color} isSwatch={isSwatch} selected={selected} />
          )}

          {!isSwatch && (
            <DisplayHtml className="attribute-value">{attribute.value}</DisplayHtml>
          )}
        </div>
      </button>
    );
  }
}

export default FilterAttribute;
