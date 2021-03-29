import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag, faSearch, faUser, faComments} from '@fortawesome/free-solid-svg-icons'
import logo from "../../assets/Lush-fresh-handmade-cosmetics.png"
import './header.scss'

const iconShoppingBag = <FontAwesomeIcon icon={faShoppingBag} />
const iconSearch = <FontAwesomeIcon icon={faSearch} />
const iconUser = <FontAwesomeIcon icon={faUser}  />
const iconComments= <FontAwesomeIcon icon={faComments}  />


const Header = () => {
    return (
        <div className="header">
            <div className="comments">
                <a href="#">{iconComments}</a>
            </div>
            <div className="navbar">
                <div className="logo-container">
                    <img src={logo} alt="Lush Handmade Cosmetics"/>
                </div>
                <div className="navlink">
                    <a href="#">Produits</a>
                    <a href="#">Boutiques</a>
                    <a href="#">Vegan</a>
                    <a href="#">{iconSearch}</a>
                    <a href="#">{iconUser} Se Connecter | S'inscrire</a>
                </div>
            </div>
            <div className="shopping-cart">
                <a href="#">{iconShoppingBag}</a>
            </div>
        </div>
    )
}

export default Header