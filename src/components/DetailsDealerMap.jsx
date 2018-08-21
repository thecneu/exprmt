import React, { Component } from 'react'

class DetailsDealerMap extends Component {
  render() {
    const { name, address } = this.props.dealer

    return (
      <div className="vw__dealer-map">
        <div>{name}</div>
        <div><mark>{JSON.stringify(address)}</mark></div>
        <div>direction: https://maps.google.com/maps?saddr=&daddr=2440 Santa Monica Blvd Santa Monica CA 90404</div>
        <div>map image: http://maps.googleapis.com/maps/api/staticmap?&center=2440 Santa Monica Blvd Santa Monica CA 90404&markers=icon:http://www.vw.com/content/dam/vwcom/pages/2014_find_a_dealer_icons/staticMapDealerMarker.png|shadow:false|2440 Santa Monica Blvd Santa Monica CA 90404&zoom=14&size=250x250&client=gme-volkswagenag3&channel=vwpkw-mdp-vwoa&signature=JoNaf34YbdRpEEirc3fkmly4HDU=</div>
      </div>
    )
  }
}

export default DetailsDealerMap