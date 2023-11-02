import LogoKaza from '../../assets/LOGOheader.png'
import { Link } from 'react-router-dom'
import "../../utils/Style/header.css"
import "../../utils/Style/style.css"



function Header() {
  
    return (
      <div className='header'>
        <img className="LogoKaza" src={LogoKaza} alt="Logo Kaza"></img>
        <nav className="liens">
          <Link to = "./" className='acceuil selected'>Acceuil</Link>
          <Link to = "./About" className='about'>A propos</Link>
        </nav>
      </div>
    )
  }

export default Header