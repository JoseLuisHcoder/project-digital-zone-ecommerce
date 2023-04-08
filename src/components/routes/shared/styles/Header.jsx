import React from 'react'
import { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import '../../style/header.css'

const Header = () => {

    const navbar = useRef()
    // console.log(navbar.current);

    const clickMenuHam = () => {
        navbar.current.classList.toggle('header__nav__open')
    }
  return (
    <header className='header__container'>
        <NavLink className='header__logo' to="/">
            <div className='header__logo__img'>
                
                <img src="./digitalzone7.png" alt="" />
            </div>
        </NavLink>
        <div onClick={clickMenuHam} className='header__menuimg'>
        <i className='bx bx-menu'></i>
        </div>
        <nav ref={navbar} className='header__nav'>
            <ul className='header__list'>
                <li className='header__item' to='/login'>
                    <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to='/Login'>
                    <i className='  header__i bx bx-user-circle'></i>
                        <p className='header__label'>Login</p>
                    </NavLink>
                </li>

                <li className='header__item' to='/purchase'>
                    <NavLink className= {({isActive}) => isActive ? 'active-link' : ''} to='/purchases'>
                    <i className=' header__i bx bx-store-alt'></i>
                        <p className='header__label'>Purchase</p>
                    </NavLink> 
                </li>

                <li className='header__item' >
                    <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to='/cart' >
                        <i className=' header__i bx bx-cart'></i>
                        <p className='header__label'>Cart</p>    
                    </NavLink>
                </li>
            </ul>

        </nav>

    </header>
  )
}

export default Header