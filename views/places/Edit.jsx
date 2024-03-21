import Default from "../Default";
const React = require('react')

export default function Edit(data){
    return(
        <Default>
            <main>
                <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
                    <div className="row">
                        <div className="form-group col-sm-6">
                        <label htmlFor="name">Place Name:</label>
                        <input  className="form-control" 
                                id="name" 
                                name="name" 
                                value={data.place.name} 
                                required />
                        </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="name">Place City:</label>
                        <input  className="form-control" 
                                id="city" 
                                name="city" 
                                value={data.place.city} 
                                />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="name">Place State:</label>
                        <input  className="form-control" 
                                id="state" 
                                name="state" 
                                value={data.place.state} 
                                />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="name">Cuisine:</label>
                        <input  className="form-control" 
                                id="cuisines" 
                                name="cuisines" 
                                value={data.place.cuisines} 
                                required />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="name">Place Picture:</label>
                        <input  className="form-control" 
                                id="pic" 
                                name="pic" 
                                value={data.place.pic} 
                                />
                    </div>
                    <div className="form-group col-sm-4">
                        <label htmlFor="founded">Founded</label>
                        <input className="form-control" 
                            id="founded" 
                            name="founded" 
                            value={data.place.founded} 
                        />
                    </div>
                    <div>
                    <input type="submit" value='Edit Place'/>
                    </div>
                    
                    </div>
                    </form>

            </main>
        </Default>
    )
}

