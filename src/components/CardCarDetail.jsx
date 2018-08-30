import React from 'react'
import CarStats from './CarStats'
import ColorSwatch from './ColorSwatch'
import Link from './Link'
import ButtonLink from './ButtonLink'
import './card-cardetail.scss'

const CardCarDetail = ({ car, type }) => (
  <div className={`vw__card-cardetail ${type === 'list' ? 'is-list' : ''}`}>
    <div className="card-container">
      <div className="car-info car-panel">
        <div className="content">
          <div className="content-container">
            <div className="top">
              <div className="car-image">
                <img src={car.mediaImageUrl} alt={car.mediaImageUrlAlt} />
              </div>

              <div className="car-title">
                <div>{car.modelYear} {car.model}</div>
                <div>{car.subTrimLevel}</div>
              </div>

              <div className="vin">
                {car.isMatched}
                <nobr><b>vin</b> {car.vin}</nobr>
              </div>
            </div>

            <div className="bottom">
              <div className="exterior-color">{car.exteriorColorDescription}</div>
              <div className="interior-color">{car.interiorColorDescription}</div>
              <ColorSwatch exteriorColorBaseColor={car.exteriorColorBaseColor} interiorColorBaseColor={car.interiorColorBaseColor} />
              <div className="dealer-name">{car.DealerNameTruncated}</div>
              <div className="dealer-mileage">{car.distance} miles away</div>
              <div className="car-price">{car.msrpFormatted}</div>
              <div className="contact-dealer"><ButtonLink full>Contact Dealer</ButtonLink></div>
              <div className="view-details"><Link url={`/details/${car.vin}` || car.vehicleURL}>View Details</Link></div>
            </div>
          </div>
        </div>
      </div>

      <div className="car-details car-panel">
        <div className="content">
          <div className="content-container details-content">
            <div className="top">
              <CarStats city={car.mpgCity} highway={car.mpgHighway} hp={car.engineDescription} />

              <div className="car-features">
                <div>The {car.subTrimLevel} includes:</div>

                <ul className="subtrim-features">
                  <li><del>2.0L Turbo Engine</del></li>
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
              <div className="contact-dealer"><ButtonLink full>Contact Dealer</ButtonLink></div>
            </div>
          </div>

          <div className="content-container dealer-content">
            <div className="top">
              <div className="dealer-info">
                <div className="dealer-name">{car.DealerNameTruncated}</div>
                <div className="dealer-mileage">{car.distance} miles away</div>
                <img src="/assets/map.jpg" className="dealer-map" alt="Map" />
              </div>
            </div>

            <div className="bottom">
              <div className="contact-dealer"><ButtonLink full>Contact Dealer</ButtonLink></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default CardCarDetail