const React = require('react')
import Default from './Default'

export default function Home(){
    return(
        <Default>
            <main>
                <h1>Home Page</h1>
                <a href='/places'>
                    <button className='btn-primary'> Places Page</button>
                </a>
            </main>
        </Default>
    )
}