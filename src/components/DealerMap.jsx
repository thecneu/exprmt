import React from 'react'

const DealerMap = ({ name, distance }) => (
  <div className="inner-content-map">
    <div className="top">
      <div className="dealer-name">{name}</div>
      <div className="dealer-mileage">{distance} miles away</div>
      <img src="/map" alt="Google Map" />
    </div>

    <div className="bottom">
      <ButtonLink>Contact Dealer</ButtonLink>
    </div>
  </div>
)

export default DealerMap