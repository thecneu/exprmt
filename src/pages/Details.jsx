import React from 'react'
import DetailHeaderMasthead from 'components/DetailHeaderMasthead'
import DetailTabs from 'components/DetailTabs'
import DetailAccessories from 'components/DetailAccessories'

const props = {
  features: [
    'Volkswagen Digital Cockpit 12.3" high-resolution digital display cluster',
    'Remote start',
    '12V power outlets: 1 in front console, 1 in rear console, and 1 in cargo area',
    'Keyless access with push-button start',
    'Volkswagen Car-Net® App-Connect',
    'Bluetooth® technology with audio streaming for compatible devices',
    '2 front USB data ports and 1 rear USB charging port',
    'Discover Media touchscreen navigation system with 8” color display, proximity sensor, AM/FM/HD radio, and voice control',
    'Fender® Premium Audio System',
    'Volkswagen Car-Net® Security & Service with 6-month trial subscription',
    'Volkswagen Car-Net® Guide & Inform with 3-month SiriusXM® Traffic trial subscription and 3-month SiriusXM Travel Link® trial subscription',
    'Rear View Camera System',
    'High Beam Control (Light Assist)',
    'Overhead View Camera (Area View)',
    'Adaptive Front Lighting System (AFS)',
    'Park Distance Control with Rear Maneuver Braking (Park Pilot)',
    'Adaptive Cruise Control (ACC) Stop & Go',
    'Forward Collision Warning and Autonomous Emergency Braking (Front Assist)',
    'Pedestrian Monitoring (included in Front Assist)',
    'Blind Spot Monitor',
    'Lane Departure Warning (Lane Assist)',
    'Rear Traffic Alert',
  ],
  accessories: [
    { image: 'cargotech.png', title: 'CARGOTECH® Blocks', price: '$41 MSRP', description: 'Help increase the practicality of your MuddyBuddy™ Trunk Liner with the addition of CargoTech® Blocks. Designed to help secure your cargo—such as groceries, cartons, sporting equipment, and luggage—these blocks couple a durable plastic fence with a non-slip underside to help ensure your cargo remains stable.' },
    { image: 'muddybuddy.png', title: 'MuddyBuddy™ Trunk Liner', price: '$99 MSRP', description: 'Custom molded for your Volkswagen model and designed with a raised edge to help contain spills, this liner features a textured skid-resistant finish to help keep items from shifting, along with a durable easy-to-clean surface.' },
    { image: 'heavyduty.png', title: 'Heavy Duty Trunk Liner with VW CarGo Blocks', price: '$130 MSRP', description: 'This ingenious trunk tray fits snugly in your trunk area and is easy to remove. Heavy-duty rubber backing helps make the bottom rugged and durable. Comes standard with a set of four cargo-organizer blocks.' },
    { image: 'mojomats.png', title: 'MojoMats® – Jetta', price: '$99 MSRP', description: 'Customized to fit your vehicle, these mats help provide coverage and protection. Made from durable, plush, 24-ounce carpet weight for improved appearance and durability. Nylon fibers provide color-fade resistance and cleanability. Positive retention clips and anti-slip backing help ensure they stay in place. Features Jetta logo. Set of four.' }
  ],
  car: {
    model: 'Tiguan',
    displayName: '2018 TIGUAN',
    trim: 'SEL Premium with 4MOTION®',
    vin: 'WVGBV7AX7HK029960',
    price: '$20,342',
    image: 'car.png',
    packages: [{
      title: '16” ALLOY WHEEL PACKAGE',
      image: 'snow'
    }],
    dealer: {
      name: 'VOLKSWAGEN OF SANTA MONICA',
      address: { street: '2440 Santa Monica Blvd', city: 'Santa Monica, CA 90404', phone: '(424) 322-2756' },
      map: 'map.jpg'
    }
  },
  tabs: ['exterior', 'performance', 'interior', 'technology', 'safety', 'dimensions', 'warranty']
}


const Details = () => (
  <main>
    <DetailHeaderMasthead car={props.car} />
    <DetailTabs features={props.features} tabs={props.tabs} />
    <DetailAccessories accessories={props.accessories} />
  </main>
)

export default Details