import React from 'react'
import Link from './Link'
import CarStats from './CarStats'
import DealerMap from './DealerMap'
import ButtonLink from './ButtonLink'

const CarDetail = ({ car }) => (
  <div className="content">
    <div className="inner-content-detail">
      <div className="top">
        <CarStats city={car.mpgCity} highway={car.mpgHighway} hp={car.engineDescription} />

        <div className="car-features">
          <div>The {car.subTrimLevel} includes:</div>
          <ul className="subtrim-features">
            <li><strike-through>2.0L Turbo Engine</strike-through></li>
          </ul>

          {car.packages.length > 0 && (
            <ul className="packages">
              {car.packages.map(({ packageId, packageName }) =>
                <li key={packageId}>{packageName}</li>
              )}
            </ul>
          )}
        </div>

        <div className="view-details"><Link url={`/details/${car.vin}` || car.vehicleURL}>View Details</Link></div>
      </div>

      <div className="bottom">
        <div className="view-details"><Link url={`/details/${car.vin}` || car.vehicleURL}>View Details</Link></div>
        <div className="contact-dealer"><ButtonLink>Contact Dealer</ButtonLink></div>
      </div>
    </div>

    <DealerMap name={car.DealerNameTruncated} distance={car.distance} />
  </div>
)

export default CarDetail