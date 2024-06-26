import { pics } from '../images/images.json'
import './display.css'
import { useState } from 'react'

export function Display() {
  const [selectedPic, setSelectedPic] = useState('')
  const [modal, setModal] = useState(false)

  const body = document.querySelector('body')
  body.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      setModal(false)
    }
  })

  function changeModal(e) {
    const picUrl = e.target.src
    if (picUrl === undefined) return

    setSelectedPic(picUrl)
    setModal(!modal)
    console.log(picUrl)
    return { picUrl }
  }

  function closeModal() {
    setModal(false)
  }

  return (
    <>
      <div className='img-display'>
        {pics.map((pic) => {
          return (
            <div
              id='img-cont'
              className='img-cont'
              key={pic.id}
              onClick={changeModal}
            >
              <img
                id={pic.id}
                className='img-display-img'
                src={pic.url}
                loading='lazy'
              />
              <div className='description-info'>
                <h2>Photo Title</h2>
                <p>pic description / place / album</p>
              </div>
            </div>
          )
        })}
      </div>
      {modal && (
        <div className='modal'>
          <div className='modal-content-flex'>
            <div className='inner-modal-cont'>
              <div className='relative-cont'>
                <span onClick={closeModal} className='close'>
                  ×
                </span>
                <img src={selectedPic} alt='' />
                <div className='description-info'>
                  <h2>Photo Title</h2>
                  <p>pic description / place / album</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
