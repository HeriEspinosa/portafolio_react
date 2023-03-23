import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/styles__components/navbar.css'

const NavBar = ({ isShow, handleClickShow }) => {


    return (
        <header className='navbar'>
            <h3 className='letter_dancing'>Ing. Espinosa</h3>
            <h1 className='menu_mobile' onClick={handleClickShow}><i className={`${isShow ? 'bx bxs-x-square' : 'bx bx-food-menu'}`}></i></h1>
            <nav className={`navbar__menu ${isShow ? 'menu__show' : ''}`}>
                <ul className={`navbar__menu-ul ${isShow ? 'menu__show' : ''}`} onClick={handleClickShow}>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'about'}>About me</Link></li>
                    <li><Link to={'/habilitys'}>Habilitys</Link ></li>
                    <li><Link to={'/services'}>Services</Link></li>
                    <li><Link to={'/portfolio'}>Portfolio</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                </ul>
            </nav>

        </header>
    )
}

export default NavBar