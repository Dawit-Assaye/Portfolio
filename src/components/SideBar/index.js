import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/Dawit.png'
import LogoSubtitle from '../../assets/images/Dawit sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser,faEnvelope } from '@fortawesome/free-solid-svg-icons'
const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logoS" />
      <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
    </Link>
    <nav>
      <NavLink exact="true" activeClassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink exact="true" activeClassname="active" className='about-link' to="/about">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink exact="true" activeClassname="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#181818" />
      </NavLink>
    </nav>
  </div>
)
export default Sidebar
