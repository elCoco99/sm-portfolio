/* eslint-disable react/prop-types */

import './cover.css'

export function Cover({url}) {
  return (
    <div className='cover-section'>
        <img src={url} alt="cover img with slogan" />
      </div>
  )
}