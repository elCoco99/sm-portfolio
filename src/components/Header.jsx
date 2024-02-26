import './header.css'

export function Header() {
  return (
    <nav className="nav-bar">
      <div className="img-cont">
        <img className="img-logo"src="https://i.ibb.co/WfZ4BPF/logo2.jpg" alt="sm logo" />
      </div>
      <div className='nav-items'>
        <ul>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Recent Work</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}