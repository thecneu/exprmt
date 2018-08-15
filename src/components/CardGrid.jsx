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

        <div className="car-title">
          <div>{car.Year} {car.modelYear}</div>
          {car.subTrimLevel} <span dangerouslySetInnerHTML={{ __html: car.transmissionDescription}} />
        </div>

        <div className="vin">
          <b>vin</b> {car.vin}
        </div>
      </div>

      <div className="bottom">
        <div className="exterior-color">{car.exteriorColorDescription}</div>
        <div className="interior-color">{car.interiorColorDescription}</div>
        <div className="color-wheel">{car.exteriorColorBaseColor}{car.interiorColorBaseColor}</div>
        <div className="dealer-name">{car.DealerNameTruncated}</div>
        <div className="dealer-mileage">{car.distance} miles away</div>
        <div className="price">{car.msrpFormatted}</div>
        <button className="vw__button">Contact Dealer</button>
        <div><a href={car.vehicleURL} className="vw__link">View Details</a></div>
      </div>
    </div>
  </div>
)

export default CardGrid