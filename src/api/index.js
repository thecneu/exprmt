import dataJson from './data.json'
import _ from 'lodash'

const thingsToFilter = {
  'model': 'model',
  'transmission': 'transmissionType',
  'trims': 'trimLevel',
  'exterior color': ['exteriorColorDescription', 'exteriorColorBaseColor'],
  'interior': ['interiorColorDescription', 'interiorColorBaseColor'],
  // 'drivetrain': false
}

export const getModels = () => {
  const carFilter = 'model' // interiorColorImage vehicleURL
  return _.uniq(_.map(dataJson, carFilter)).sort()
}

export const getCarModels = (models) => (
  models.map(model => dataJson.find(car => car.model === model))
)

export const getFilterables = (carsData) => {
  const reducedData = carsData.map(json => {
    return Object.keys(thingsToFilter).reduce((next, thingKey) => {
      const thing = thingsToFilter[thingKey]

      return {
        ...next,
        [thingKey]: Array.isArray(thing) ?
          thing.reduce((next, theThing) => ({
            ...next,
           [theThing]: json[theThing]
          }), {})
          : json[thingsToFilter[thingKey]]
      }
    }, {})
  })

  const filteredData = Object.keys(thingsToFilter).filter(k => k !== 'model').reduce((next, thingKey) => {
    const values = _.map(reducedData, thingKey)
    return {
      ...next,
      [thingKey]: Array.isArray(thingsToFilter[thingKey])
        ? _.uniqWith(values, _.isEqual) : _.uniq(values)
    }
  }, {})

  const normalized = Object.keys(filteredData).reduce((next, thing) => {
    return {
      ...next,
      [thing]: filteredData[thing].map(data => {
        return _.isObject(data) ? Object.keys(data).reduce((next, key, index) => {
          return {
            ...next,
            [index === 0 ? 'colorName' : 'color']: data[key]
          }
        }, {}) : data
      })
    }
  }, {})

  return normalized
}

export const getCars = (model) => {
  return dataJson.filter(cars => cars.model === model)
}

export const filterCars = (cars, theFilter = {}) => {
  console.group('car filter called')
  const filter = Object.keys(theFilter).reduce((next, key) =>
    theFilter[key].length ? { ...next, [key]: theFilter[key] } : next
  , {})

  if (Object.keys(filter).length === 0) {
    console.log('just cars')
    console.groupEnd()
    return cars
  }

  console.log('filtering:', filter)

  const filtered = cars.filter(car => {
    const some = Object.keys(filter).some(filterKey => {
      const filterValue = filter[filterKey]
      const carKey = mapHeadingToKey(filterKey)
      const carValue = car[carKey]
      return filterValue.includes(carValue)
    })

    return some
  })

  console.log(filtered.length)
  console.groupEnd()

  return filtered
}

export const checkMatch = (cars) => {

}

const mapHeadingToKey = (key) => {
  const filterKey = thingsToFilter[key]
  return Array.isArray(filterKey) ? filterKey[0] : filterKey
}


export const getCar = (vin) => dataJson.find(car => car.vin === vin)
export const getDealer = () => ({
  name: 'VOLKSWAGEN OF SANTA MONICA',
  address: {
    street: '2440 Santa Monica Blvd',
    city: 'Santa Monica, CA 90404',
    phone: '(424) 322-2756'
  }
})
