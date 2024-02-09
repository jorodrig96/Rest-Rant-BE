import Default from "../Default";
const React = require('react')

export default function Edit({ place, id }){
    return(
        <Default>
            <main>
                <form method="POST" action={`/places/${id}?_method=PUT`}>
                    <div className="row">
                        <div className="form-group col-sm-6">
                        <label htmlFor="name">Place Name"</label>
                        <input  className="form-control" 
                                id="name" 
                                name="name" 
                                value={place.name} 
                                required />
                        </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="name">Place City:</label>
                        <input  className="form-control" 
                                id="name" 
                                name="name" 
                                value={place.city} 
                                required />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="name">Place State:</label>
                        <input  className="form-control" 
                                id="name" 
                                name="name" 
                                value={place.state} 
                                required />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="name">Cuisine:</label>
                        <input  className="form-control" 
                                id="name" 
                                name="name" 
                                value={place.cuisines} 
                                required />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="name">Place Picture:</label>
                        <input  className="form-control" 
                                id="name" 
                                name="name" 
                                value={place.pic} 
                                required />
                    </div>
                    <div>
                    <input type="submit" value='Edit'/>
                    </div>
                    
                    </div>
                    </form>

            </main>
        </Default>
    )
}