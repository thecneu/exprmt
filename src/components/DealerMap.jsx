import React from 'react'
import ButtonLink from './ButtonLink'

const DealerMap = ({ name, distance }) => (
  <div className="inner-content-map">
    <div className="top">
      <div className="dealer-name">{name}</div>
      <div className="dealer-mileage">{distance} miles away</div>
      <img src={encodeURI('http://maps.googleapis.com/maps/api/staticmap?&center=2440 Santa Monica Blvd Santa Monica CA 90404&markers=icon:http://www.vw.com/content/dam/vwcom/pages/2014_find_a_dealer_icons/staticMapDealerMarker.png|shadow:false|2440 Santa Monica Blvd Santa Monica CA 90404&zoom=14&size=250x250')} alt="Google Map" />
    </div>

    <div className="bottom">
      <ButtonLink>Contact Dealer</ButtonLink>
    </div>
  </div>
)

export default DealerMap
