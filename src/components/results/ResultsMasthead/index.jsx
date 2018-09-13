import React, { Component } from 'react';
import cx from 'classnames';
import { InventoryContext } from 'controllers/Inventory';
import FilterButton from 'components/filter/FilterButton';
import FilterList from 'components/filter/FilterList';
import ModelsDropdown from 'components/models/ModelsDropdown';
import ButtonToTop from 'components/common/ButtonToTop';
import ZipInput from 'components/common/ZipInput';
import './masthead.scss';

class Masthead extends Component {
  state = { isSticky: false }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    const y = window.scrollY
    const isSticky = this.state.isSticky
    const rect = this.masthead.getBoundingClientRect()
    if (y > rect.height + 108 && !isSticky) {
      return this.setState({ isSticky: true })
    }

    if (y < rect.height && isSticky) {
      return this.setState({ isSticky: false })
    }
  }

  render() {
    const { currentModel, filteredCarsCount, aorDealer } = this.props;
    const { isSticky } = this.state

    return (
      <section ref={(masthead) => this.masthead = masthead} className={cx('vw__results-masthead', { 'is-sticky': isSticky })}>
        <div className="top-bar" />
        <div className="container">
          <div className="content-container">
            <div className="info-content">
              <h1 className="heading-5-light headline">
                Great, let’s get you into a {currentModel.name}.
              </h1>

              <p className="info">
                <span className="heading-9-light">
                  {filteredCarsCount.exact !== undefined && (
                    <>
                      There are{' '}
                      <strong className="heading-9">
                        {filteredCarsCount.exact} exact matches
                      </strong>{' '}

                      and{' '}
                      <strong className="heading-9">
                        {filteredCarsCount.close} close matches
                      </strong>
                    </>
                  )}

                  {filteredCarsCount.exact === undefined && (
                    <>
                      There are{' '}
                      <strong className="heading-9">{filteredCarsCount.total} matches</strong>
                    </>
                  )}

                  {' '}
                  for {currentModel.name} at{' '}
                  <strong className="heading-9 label-dealer">{aorDealer.name}</strong>
                </span>
              </p>

              <div className="filter-list-container">
                <FilterList />
              </div>
            </div>

            <div className="actions-content">
              <div className="models-container">
                <ModelsDropdown />
              </div>

              <div className="zip-container">
                <ZipInput />
              </div>

              <div className="button-container">
                <FilterButton />
              </div>

              <div className="totop-container">
                <ButtonToTop />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const ResultsMasthead = () => (
  <InventoryContext.Consumer>
    {(props) => <Masthead {...props} />}
  </InventoryContext.Consumer>
);

export default ResultsMasthead;
