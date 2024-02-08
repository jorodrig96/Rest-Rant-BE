const React = require('react')
import Default from '../Default'

export default function AddNew(){
    return(
        <Default>
            <main>
                <h1>Add new place</h1>
                <div className='placeIndexNav'>
              <a href='/places'>
                    <button className='btn-primary'> Return to Places</button>
                </a>
                </div>
                <form method='POST' action='/places'>
                    <div className='formGroup'>
                        <label htmlFor='name'>Restaraunt Name:</label>
                        <input  className='inputGroup'
                                type='text'
                                id='name'
                                name='name' 
                                placeholder="add restaraunt"
                                required
                                /> 
                    </div>
                    <div className='formGroup'>
                        <label htmlFor='city'>City:</label>
                        <input  className='inputGroup'
                                type='text'
                                id='city'
                                name='city' 
                                placeholder="add city"
                                required
                                  /> 
                    </div>
                    <div className='formGroup'>
                        <label htmlFor='state'>State:</label>
                        <input  className='inputGroup'
                                type='text'
                                id='state'
                                name='state' 
                                placeholder="add state"
                                required
                                /> 
                    </div>
                    <div className='formGroup'>
                        <label htmlFor='cuisines'>Cuisine Type:</label>
                        <input  className='inputGroup'
                                type='text'
                                id='cuisines'
                                name='cuisines' 
                                placeholder="add cuisine"
                                required
                                /> 
                    </div>
                    <div className='formGroup'>
                        <label htmlFor='pic'>Food Picture:</label>
                        <input  className='inputGroup'
                                type='url'
                                name='pic'
                                placeholder='upload picture link'
                                id='pic'
                        />
                    </div>
                    <input className='inputButton' type='submit' value='Add Place'/>
                </form>
            </main>
        </Default>
    )
}