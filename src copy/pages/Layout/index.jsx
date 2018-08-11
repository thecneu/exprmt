import React, { Component } from 'react'

class Layout extends Component {
  render() {
    return (
      <main>
        <div className="navigation"></div>
        <div className="main-content">
          <div className="container">
            <div className="vw__flex-container">
              <div className="vw__card-grid">
                <div className="label-match">F</div>
                <div className="favorite">F</div>
                <div className="content">
                  <div className="top">
                    <div className="text-center">
                      <img src="/" className="car-img" />
                    </div>
                    <span className="car-title">
                      2018 tiguan <br />
                      sel premium with 4motion
                    </span>
                    <span className="vin">
                      <b>vin</b> WVGBV7AX7HK029960
                    </span>
                  </div>

                  <div className="bottom">
                    <span className="exterior-color">Habanero Orange Metallic</span>
                    <span className="interior-color">Titan Black V-Tex Leatherette</span>
                    <div className="color-wheel"></div>
                    <span className="dealer-name">VOLKSWAGEN SANTA MONICA</span>
                    <span className="dealer-mileage">6.2 miles away</span>
                    <span className="price">$20,592</span>
                    <button className="vw__button">Contact Dealer</button>
                    <a href="#" className="vw__link-button">View Details</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="vw__card-list">
              <div className="car-basic">
                <div className="content">
                  <div className="top">
                      <div className="text-center">
                        <img src="/" className="car-img" />
                      </div>
                      <span className="car-title">
                        2018 tiguan <br />
                        sel premium with 4motion
                      </span>
                      <span className="vin">
                        <b>vin</b> WVGBV7AX7HK029960
                      </span>
                    </div>

                    <div className="bottom">
                      <span className="exterior-color">Habanero Orange Metallic</span>
                      <span className="interior-color">Titan Black V-Tex Leatherette</span>
                      <div className="color-wheel"></div>
                      <span className="dealer-name">VOLKSWAGEN SANTA MONICA</span>
                      <span className="dealer-mileage">6.2 miles away</span>
                      <span className="price">$20,592</span>
                      <button className="vw__button">Contact Dealer</button>
                      <a href="#" className="vw__link">View Details</a>
                    </div>
                  </div>
                </div>

              <div className="car-detail">
                <div className="content">
                  <div className="inner-content-detail">
                    <div className="top">
                      <div className="car-stats"></div>
                      <span>The S includes:</span>
                      <ul>
                        <li>2.0L Turbo Engine</li>
                        <li>VW Car-Net App-Connect</li>
                        <li>Composition Color touchscreen sound system</li>
                        <li>LED Daytime Running Lights (DRL)</li>
                      </ul>

                      <div className="packages">
                        <span>Cold weather package</span>
                        <span>16" alloy wheel package</span>
                      </div>
                    </div>

                    <div className="bottom">
                      <a href="#" className="vw__link">View Details</a>
                    </div>
                  </div>

                  <div className="inner-content-map">
                    <div className="top">
                      <span className="dealer-name">VOLKSWAGEN SANTA MONICA</span>
                      <span className="dealer-mileage">6.2 miles away</span>
                      <img src="/map" />
                    </div>

                    <div className="bottom">
                      <button className="vw__button">Contact Dealer</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default Layout