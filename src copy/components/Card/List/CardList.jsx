import React from 'react'

const findHp = (hp) => hp.split(',').reduce((next, s) => s.includes('HP') ? s.replace('HP', '').trim() : next, '')

const CardList = ({ car }) => (
  <div className="vw__card-list">
    <div className="car-basic">
      <div className="content">
        <div className="top">
            <div className="car-image">
              <img src={car.mediaImageUrl} className="car-img" alt={car.mediaImageUrlAlt} />
            </div>
            <span className="car-title">
              {car.Year} {car.modelYear}<br />
              {car.subTrimLevel}  <span dangerouslySetInnerHTML={{ __html: car.transmissionDescription}} />
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

    <div className="car-detail">
      <div className="content">
        <div className="inner-content-detail">
          <div className="top">
            <div className="car-stats">
              <ul>
                <li>
                  <span>{car.mpgCity}</span>
                  <span>City</span>
                </li>
                <li>
                  <span>{car.mpgHighway}</span>
                  <span>Hwy</span>
                </li>
                <li>
                  <span>{findHp(car.engineDescription)}</span>
                  <span>hp</span>
                </li>
              </ul>
            </div>

            <span>The {car.subTrimLevel} includes:</span>
            <ul className="subtrim-features">
              <li>2.0L Turbo Engine</li>
            </ul>

            {car.packages.length > 0 && (
                <ul className="packages">
                  {car.packages.map(({ packageId, packageName }) =>
                    <li key={packageId}>{packageName}</li>
                  )}
                </ul>
            )}
          </div>

          <div className="bottom">
            <a href={car.vehicleURL} className="vw__link">View Details</a>
          </div>
        </div>

        <div className="inner-content-map">
          <div className="top">
            <span className="dealer-name">{car.DealerNameTruncated}</span>
            <span className="dealer-mileage">{car.distance} miles away</span>
            <img src="/map" alt="Google Map" />
          </div>

          <div className="bottom">
            <button className="vw__button">Contact Dealer</button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default CardList