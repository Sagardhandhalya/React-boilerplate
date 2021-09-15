import './Header.scss'
import monster from '../../assets/png_test.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar__container">
      <div className="navabar_left">
        <img src={monster} alt="logo" width={50} height={50} />
      </div>

      <div className="navabar__middle"></div>

      <div className="navabar__right">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/demo">Contact</Link>
        </ul>
      </div>
    </nav>
  )
}

export default Header
