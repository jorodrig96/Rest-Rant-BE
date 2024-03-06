const React = require('react')
import Default from '../Default'

export default function Show(data) {
    return(
        <Default>
            <main>
                <div className="card-body">
                <div className='ratingGroup'>
                    <h5>Rating</h5>
                    <h5>Not Rated</h5>
                    </div>
                    <br/>
                    <h5 className="card-title">{data.place.name}</h5>
                    <h5 className="card-title">{data.place.cuisines} Cuisine</h5>
                    <br/>
                    <p className="card-text"><img src= {data.place.pic}/></p>
                    <h5 className="card-title">{data.place.showEstablished()}</h5>

                    <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                      Edit</a>  
                        <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                            <button type="submit" className="btn btn-danger">
                                Delete 
                            </button>
                        </form>     
                    <div>
                        <h5>Comments</h5>
                        <h5>No Comments Yet!</h5>
                        </div>
                    <a href="/places">
                        <button className='inputButton'> Return to Places</button></a>
                    
                </div>
            </main>
        </Default>
    )
}