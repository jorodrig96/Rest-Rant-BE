const React = require('react')
import Default from '../Default'

export default function Show(data) {
    let comments = (
        <h3 className='inactive'>
            No comments yet!
        </h3>
    )
    let rating = (
        <h3 className="inactive">
          Not yet rated
        </h3>
      )

    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
          }, 0)
          let averageRating = sumRatings / data.place.comments.length // getting length of a places comments and averaging them out to get a rating
          rating = (
            <h3>
              {Math.round(averageRating)} stars
              {/*math.round allows for the math so be rounded to the nearest whole */}
            </h3>
          )
          
        comments = data.place.comments.map(c => {
      return (
            <div className="border">
              <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
              <h4>{c.content}</h4>
              <h3>
                <stong>- {c.author}</stong>
              </h3>
              <h4>Rating: {c.stars}</h4>
              <form method="POST" action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
              <input type="submit" className="btn btn-danger" value="Delete Comment" />
              </form>
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
                    <h5> {rating} </h5>
                    <h5>Not Rated</h5>
                    </div>
                    <br/>
                    <h5 className="card-title">{data.place.name}</h5>
                    <h5 className="card-title">{data.place.cuisines} Cuisine</h5>
                    <br/>
                    <p className="card-text"><img src= {data.place.pic}/></p>
                    <h5 className="card-title">{data.place.showEstablished()}</h5>

                    <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
                      Edit</a>  
                        <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
                            <button type="submit" className="btn btn-danger">
                                Delete 
                            </button>
                        </form>     
                    <div>
                        <h5>Comments</h5>
                        {comments}
                    </div>
                    <hr />
                    <h2>Got Your Own Rant or Rave?</h2>
                    <form action={`/places/${data.place.id}/comment`} method="POST">
                    <div className="row">
                        <div className="form-group col-sm-12">
                        <label htmlFor="content">Content</label>
                        <textarea id="content" name="content" className="form-control"></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-4">
                        <label htmlFor="author">Author</label>
                        <input id="author" name="author" className="form-control" />
                        </div>
                        <div className="form-group col-sm-4">
                        <label htmlFor="stars">Star Rating</label>
                        <input type="range" step="0.5" min="1" max="5" id="stars" name="stars" className="form-control" />
                        </div>
                        <div className="form-group col-sm-2">
                        <label htmlFor="rant">Rant?</label>
                        <input type="checkbox" id="rant" name="rant" className="form-control" />
                        </div>
                    </div>
                    <input type="submit" className="btn btn-primary" value="Add Comment" />
                    </form>
                        <a href="/places">
                        <button className='inputButton'> Return to Places</button></a>
                    </div>
                </main>
            </Default>
         )
        }