import React from 'react'

const DetailAccessories = ({ accessories }) => (
  <div className="vw__detail-accessories-container">
    Accessories
    Not all accessories are available on all trims.
    Please <a href="/" className="vw__link">Contact Dealer</a>

    {accessories.map(accessory => (
      <div className="accessory-item" key={accessory.title}>
        <div className="item-image"><img src={`/assets/${accessory.image}`} /></div>
        <div className="accessory-tile">
          <span>{accessory.title}</span>
        </div>

        <div className="accessory-price">
          <span>{accessory.price}</span>
        </div>

        <div className="accessory-description">
          <p>{accessory.description}</p>
        </div>
      </div>
    ))}
  </div>
)

export default DetailAccessories