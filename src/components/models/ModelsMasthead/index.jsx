import React from 'react';
import ZipInput from 'components/common/ZipInput';
import './masthead.scss';

const ModelsMasthead = () => (
  <section className="vw__models-masthead">
    <div className="top-bar" />
    <div className="container">
      <div className="content-container">
        <div className="info-content">
          <h1 className="h5-light headline">Let's find your perfect Volkwagen.</h1>
          <p className="h9 info">Select a model to find inventory near you.</p>
        </div>

        <div className="actions-content">
          <div className="zip-container">
            <ZipInput />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ModelsMasthead;
