import Default from "../Default";
const React = require('react')

export default function Edit({ place, id }){
    return(
        <Default>
            <main>
                <form method="POST" action={`/places/${id}?_method=PUT`}>
                    <div className="row">
                        <div className="form-group col-sm-6">
                        <label htmlFor="name">Place Name:</label>
                        <input  className="form-control" 
                                id="name" 
                                name="name" 
                                value={place.name} 
                                required />
                        </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="name">Place City:</label>
                        <input  className="form-control" 
                                id="city" 
                                name="city" 
                                value={place.city} 
                                />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="name">Place State:</label>
                        <input  className="form-control" 
                                id="state" 
                                name="state" 
                                value={place.state} 
                                />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="name">Cuisine:</label>
                        <input  className="form-control" 
                                id="cuisines" 
                                name="cuisines" 
                                value={place.cuisines} 
                                required />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="name">Place Picture:</label>
                        <input  className="form-control" 
                                id="pic" 
                                name="pic" 
                                value={place.pic} 
                                />
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