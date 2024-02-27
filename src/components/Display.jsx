import { pics } from '../images/images.json'
import './display.css'

export function Display() {
  return (
    <div className='img-display'>
        {
          pics.map(pic => {
            return (
              <div className='img-cont' key={pic.id} >
                <a key={pic.id} href={pic.url} target='_blank'> 
                  <img src={pic.url} loading='lazy' />
                </a>
                <div className='description-info'>
                  <h2>Photo Title</h2>
                  <p>pic description / place / album</p>

                </div>
              </div>


            )
          })
        }
      </div>
  )
}