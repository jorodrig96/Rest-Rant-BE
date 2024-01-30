const React = require('react')
import Default from '../Default'

export default function PlaceIndex (data) {
    const placesFormatted = data.places.map((place) => {
      return (
        <div>
            <h2>{place.name}</h2>
            <h2>{place.city},{place.state}</h2>
            <h3>{place.cuisines}</h3>
            <img src= {place.pic} alt= {place.name} /> 
        </div>
      )
    })

    return (
      <Default>
          <main>
              <h1>PLACES INDEX PAGE</h1>
              {placesFormatted}
          </main>
      </Default>
  )
  }
  
