import React from 'react'

const CarInfo = ({ car }) => (
  <div className="content">
    <div className="top">
      <div className="car-image">
        <img src={car.mediaImageUrl} alt={car.mediaImageUrlAlt} />
      </div>

      <div className="car-title">
        <div>{car.Year} {car.modelYear}</div>
        <div>{car.subTrimLevel} <DisplayHtml>{car.transmissionDescription}</DisplayHtml></div>
      </div>

      <div className="vin">
        <b>vin</b> {car.vin}
      </div>
    </div>

    <div className="bottom">
      <div className="exterior-color">{car.exteriorColorDescription}</div>
      <div className="interior-color">{car.interiorColorDescription}</div>
      <Swatch exteriorColorBaseColor={car.exteriorColorBaseColor} interiorColorBaseColor={car.interiorColorBaseColor} />
      <div className="dealer-name">{car.DealerNameTruncated}</div>
      <div className="dealer-mileage">{car.distance} miles away</div>
      <div className="price">{car.msrpFormatted}</div>
      <div className="contact-dealer"><ButtonLink>Contact Dealer</ButtonLink></div>
      <div className="view-details"><Link url={car.vehicleURL}>View Details</Link></div>
    </div>
  </div>
)

export default CarInfo