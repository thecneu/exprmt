import React, { Component } from 'react'
import Button from 'components/Button'
import WheelIcon from 'icons/Wheel'
import PhoneIcon from 'icons/Phone'
import LocationIcon from 'icons/Location'

class DetailTopHeader extends Component {
  showIcon(name) {
    return <WheelIcon />
  }

  render() {
    const { car } = this.props

    return (
      <div className="vw__detail-top-header">
        <div className="top-bar">
          <div className="flex-container">
            <div className="car-model">
              <a href="/model/">{'<'} <span className="model">{'tiguan'}</span> {'inventory'}</a>
              <div className="car-image"></div>
              <div className="car-title">
                <span>{'2018 Tiguan'} {'SEL Premium with 4 Motion'}</span>
                <span><b>vin</b>{'WVGBV7AX7HK029960'}</span>
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
                <img src={`/assets/${car.image}`} alt={car.model} />
              </div>
              <div className="car-price">
                <h3>{car.price}</h3>
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
              <span className="car-name">{car.displayName}</span>
              <span className="car-trim">{car.trim}</span>
              <div className="car-vin-container">
                <span className="car-vin"><b>vin</b> {car.vin}</span>
              </div>
              <div className="car-price-container">
                <span className="car-price">{car.price}</span>
              </div>

              <div className="car-packages">
                {car.packages.map(carPackage => (
                  <div className="car-package-container" key={carPackage.title}>
                    <span className="car-package">
                      {this.showIcon(carPackage.image)} {carPackage.title}
                    </span>
                  </div>
                ))}
              </div>

              <div className="car-dealer-container">
                <span>{'On the lot at'}</span>
                <span className="car-dealer-name">{car.dealer.name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default DetailTopHeader

/*
<div className="top-bar">
  <a href="/model/">< <span className="model">{'tiguan'}</span> inventory</a>

  <div className="car-image"></div>
  <div class="car-title">
    <span>{'2018 Tiguan'} {'SEL Premium with 4 Motion'}</span>
    <span><b>vin</b>{'WVGBV7AX7HK029960'}</span>
  </div>
</div>
 */