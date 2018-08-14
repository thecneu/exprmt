import React from 'react'
import CardModel from 'components/CardModel'

const car = {
  "vin": "3VWN57BU0KM007219",
  "model": "Jetta",
  "mpgCombined": "34",
  "exteriorColorBaseColor": "BLACK",
  "modelYear": "2019",
  "id": "3VWN57BU0KM007219",
  "engineDisplacement": "1.4",
  "mpgCity": "30",
  "subTrimLevel": "S",
  "engineDescription": "1.4L, 147 HP, 4 cylinder",
  "interiorColorBaseColor": "BLACK",
  "exteriorColorDescription": "Black",
  "mpgHighway": "40",
  "trimLevel": "S",
  "engineDisplacementUom": "L",
  "transmissionDescription": "6-speed manual transmission",
  "transmissionType": "Manual",
  "interiorColorDescription": "Titan Black Cloth",
  "factoryOrderDate": "12/31/2018 12:30:00 PM",
  "mediaImageUrl": "http://www.vwimg.com/iris/iris?width=450&vehicle=2018_BU32M2_7CB_S0B_2017_12_10&pov=E45%2CCGD&paint=A1A1&fabric=BC&bkgnd=transparent&resp=png&X=2500&Y=0&w=5000&h=10000&bkgnd=transparent&RESP=PNG&height=450",
  "mediaImageUrlAlt": "http://www.vwimg.com/iris/iris?bkgnd=transparent&fabric=BC&height=882&paint=A1A1&pov=E39,CGD&quality=60&resp=png&vehicle=2018_BU32M2_7CB_S0B_2017_12_10",
  "DealerNameTruncated": "Volkswagen Santa Monica, L.L.C.",
  "Distance": 3,
  "DealerName": "Volkswagen Santa Monica, L.L.C.",
  "isDealerAOR": 1,
  "AORclass": "aorDealer",
  "Year": "2019",
  "Tagline": "The compact sedan",
  "msrp_pretty": "19,395",
  "vehicleURL": "/car-profile.2018$BU32M2$7CB$S0B$2017-12-10.html#!v=3VWN57BU0KM007219",
}

const models = [{
  type: 'sedans',
  cars: Array(3).fill(car)
}, {
  type: 'suvs',
  cars: Array(3).fill(car)
}, {
  type: 'wagons',
  cars: Array(2).fill(car)
}, {
  type: 'compacts',
  cars: Array(5).fill(car)
}, {
  type: 'convertibles',
  cars: Array(1).fill(car)
}]

const ModelsContainer = () => (
  <div className="vw__models-container">
    <div className="container">
      {models.map(model => (
        <section key={model.type}>
          <div className="model-type">
            <h3>{model.type}</h3>
          </div>

          <div className="flex-container">
            {model.cars.map(car => <div className="flex-item" key={car.vin}><CardModel car={car} /></div>)}
          </div>
        </section>
      ))}
    </div>
  </div>
)

export default ModelsContainer