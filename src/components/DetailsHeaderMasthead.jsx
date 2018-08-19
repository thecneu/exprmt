import React, { Component } from 'react'
import kebabCase from 'lodash/kebabCase'
import Button from 'components/Button'
import LinkAnchor from 'components/LinkAnchor'
import WheelIcon from 'icons/Wheel'
import PhoneIcon from 'icons/Phone'
import LocationIcon from 'icons/Location'

class DetailsHeaderMasthead extends Component {
  showIcon(name) {
    return <WheelIcon />
  }

  render() {
    const { car, dealer } = this.props

    return (
      <div className="vw__detail-header-masthead">
        <div className="top-bar">
          <div className="flex-container">
            <div className="car-model">
              <LinkAnchor url={`/results/${kebabCase(car.model)}`}>{'<'} <span className="model">{car.model}</span> {'inventory'}</LinkAnchor>
              <div className="car-image"></div>
              <div className="car-title">
                <div>{car.modelYear} {car.model} {car.subTrimLevel}</div>
                <div><b>vin</b> {car.vin}</div>
              </div>
            </div>

            <div className="btn-container">
              <Button>Contact Dealer</Button>
            </div>
          </div>
        </div>

        <div className="container">
          {/*<FavoriteButton />*/}
          <div className="flex-container">
            <div className="car-basic">
              <div className="car-image">
                <img src={car.mediaImageUrl} alt={car.mediaImageUrlAlt} />
              </div>
              <div className="car-price">
                <h3>{car.msrpFormatted}</h3>
              </div>
              <div className="dealer-actions">
                <div className="btn-container">
                  <PhoneIcon />
                </div>
                <div className="btn-container">
                  <LocationIcon />
                </div>
            </div>

            <div className="car-detail">
              <div className="car-name">{car.modelYear} {car.model}</div>
              <div className="car-trim">{car.subTrimLevel}</div>
              <div className="car-vin"><b>vin</b> {car.vin}</div>
              <div className="car-price">{car.msrpFormatted}</div>

              {car.packages && (
                <div className="car-packages">
                  {car.packages.map(carPackage => (
                    <div className="car-package-container" key={carPackage.packageId}>
                      <span className="car-package">
                        {this.showIcon(carPackage.packageName)} {carPackage.packageName}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {dealer && (
                <div className="car-dealer-container">
                  <span>{'On the lot at'}</span>
                  <span className="car-dealer-name">{dealer.name}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default DetailsHeaderMasthead
