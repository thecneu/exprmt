import React from 'react'

const CardGrid = ({ car }) => (
  <div className="vw__card-grid">
    <div className="label-match">F</div>
    <div className="favorite">F</div>
    <div className="content">
      <div className="top">
        <div className="car-image">
          <img src={car.mediaImageUrl} alt={car.mediaImageUrlAlt} />
        </div>
        <span className="car-title">
          {car.Year} {car.modelYear}<br />
          {car.subTrimLevel} <span dangerouslySetInnerHTML={{ __html: car.transmissionDescription}} />
        </span>
        <span className="vin">
          <b>vin</b> {car.vin}
        </span>
      </div>

      <div className="bottom">
        <span className="exterior-color">{car.exteriorColorDescription}</span>
        <span className="interior-color">{car.interiorColorDescription}</span>
        <div className="color-wheel">{car.exteriorColorBaseColor}{car.interiorColorBaseColor}</div>
        <span className="dealer-name">{car.DealerNameTruncated}</span>
        <span className="dealer-mileage">{car.distance} miles away</span>
        <span className="price">{car.msrpFormatted}</span>
        <button className="vw__button">Contact Dealer</button>
        <a href={car.vehicleURL} className="vw__link">View Details</a>
      </div>
    </div>
  </div>
)

export default CardGrid