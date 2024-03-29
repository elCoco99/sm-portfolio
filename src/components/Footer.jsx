/* eslint-disable react/prop-types */
import './footer.css'

export function Footer() {
  return(
    <footer id='footer'>
      <div className='footer-cont'>
        <div className='icons-cont'>
          <div className='fb'>
            <ion-icon name="logo-facebook"></ion-icon>
          </div>
          <div className='ig'>
            <ion-icon name="logo-instagram"></ion-icon>
          </div>
          <div className='tw'>
            <ion-icon name="logo-twitter"></ion-icon>
          </div>
          <div className='li'>
            <ion-icon name="logo-linkedin"></ion-icon>
          </div>
        </div>
        <div className='footer-links'>
          <ul>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Recent Work</a></li>
            <li><a href='#'>Contact</a></li>
            <li><a href='#header'>Back Top</a></li>
          </ul>
        </div>
        <div className='copyright'>
          <p>©2024 Marwa Studio | All rights reserved</p>
          <p>©2024 Dantech | All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}