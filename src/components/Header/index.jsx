import LogoKaza from '../../assets/LOGOheader.png'
import { NavLink } from 'react-router-dom'
import "../../utils/Style/header.css"
import "../../utils/Style/style.css"



function Header() {
    return (
      <div className='header'>
        <img className="LogoKaza" src={LogoKaza} alt="Logo Kaza"></img>
        <nav className="liens">
          <NavLink to = "./" className='acceuil'>Acceuil</NavLink>
          <NavLink to = "./About" className='about'>A propos</NavLink>
        </nav>
      </div>
    )

  }



export default Header