import './header.css'

export function Header() {
  return (
    <nav id='header' className='nav-bar'>
      <div className='nav-title'>
        <h1 translate='no'>Marwa Studio</h1>
      </div>
      <div className='nav-items'>
        <div className='nav-items-cont'>
          <ul>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Recent Work</a>
            </li>
            <li>
              <a href='#footer'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
