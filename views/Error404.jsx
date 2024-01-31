const React = require('react')
import Default from './Default'

export default function Error404 () {
    return (
      <Default>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <img style={{ width: '50%' }} src="https://us.123rf.com/450wm/goodstocker/goodstocker1807/goodstocker180700295/105233753-astronaut-and-flying-saucer-in-outer-space-text-warning-message-this-page-was-lost-oops-404-error.jpg?ver=6" alt="404 picture" />
              <div>
              Photo by <a href="https://us.123rf.com/450wm/goodstocker/goodstocker1807/goodstocker180700295/105233753-astronaut-and-flying-saucer-in-outer-space-text-warning-message-this-page-was-lost-oops-404-error.jpg?ver=6">Google</a>
              </div>
              <a href='/'>
                    <button className='btn-primary'> return home</button>
                </a>
          </main>
      </Default>
    )
  }
  