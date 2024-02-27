import { pics } from '../images/images.json'
import './display.css'

export function Display() {
  return (
    <div className='img-display'>
        {
          pics.map(pic => {
            return (
              <a key={pic.id} href={pic.url} target='_blank'> 
                <img  src={pic.url} loading='lazy'/>
              </a>
            )
          })
        }
      </div>
  )
}