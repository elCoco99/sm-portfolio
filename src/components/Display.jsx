import { pics } from '../images/images.json'
import './display.css'

export function Display() {
  return (
    <div className='img-display'>
        {
          pics.map(pic => {
            return (
              <img key={pic.id} src={pic.url} loading='lazy'/>
            )
          }).slice(0, 12)
        }
      </div>
  )
}