import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar () {
    return (
      <nav className = 'navbar'>
         <ul>
           <li>
            <Link className = 'Link' to= '/' >Sobre nós</Link></li>
            <li>
              <Link className = 'Link' to= '/portifolio'>Portifólio</Link></li>
            <li>
              <Link className = 'Link' to= '/endereco'>Endereço</Link></li>
            <li>
              <Link className = 'Link' to= '/contatos'>Contatos</Link></li> 
         </ul>
      </nav> 
    )  
}
export default Navbar;