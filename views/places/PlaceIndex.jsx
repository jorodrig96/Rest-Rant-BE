const React = require('react')
import Default from '../Default'

export default function PlaceIndex (data) {
    const placesFormatted = data.places.map((place) => {
      return (
        <div className='col-sm-6'>
            <h2 className='text-center'>{place.name}</h2>
            <h2 className='text-center'>{place.city},{place.state}</h2>
            <h3 className='text-center'>{place.cuisines}</h3>
            <img src= {place.pic} alt= {place.name} /> 
        </div>
      )
    })

    return (
      <Default>
          <main>
              <h1>Places to Rant About</h1>
              <a href='/'>
                    <button className='btn-primary'> return home</button>
                </a>
              <div className='row'>
              {placesFormatted}
              </div>
          </main>
      </Default>
  )
  }
  
