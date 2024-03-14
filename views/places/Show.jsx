const React = require('react')
import Default from '../Default'

export default function Show(data) {
    let comments = (
        <h3 className='inactive'>
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
          return (
            <div className="border">
              <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
              <h4>{c.content}</h4>
              <h3>
                <stong>- {c.author}</stong>
              </h3>
              <h4>Rating: {c.stars}</h4>
            </div>
          )
        })
      }
      
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
                        {comments}
                        </div>
                    <a href="/places">
                        <button className='inputButton'> Return to Places</button></a>
                    
                </div>
            </main>
        </Default>
    )
}