const React = require('react')
import Default from './Default'

export default function Home(){
    return(
        <Default>
            <main>
                <h1>Rest-Rant</h1>
                <h4>FOODIES, think you can foodie?</h4>
                <h5>create. <a href='/places'><button className='btn-primary'> here.</button></a></h5>
                <img src='images/chickensandwich.jpg' alt='chicken sandwich picture'/>
                <div className="mention">
                    Photo by <a href="https://unsplash.com/@eaterscollective?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Eaters Collective</a> on <a href="https://unsplash.com/photos/chicken-burger-on-tray-pLKgCsBOiw4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
                </div>
            </main>
        </Default>
    )
}