import React, { useState, useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import DataContext from '../../context/AuthProvider'
import './Navbar.css'
import types from '../../types/types'

const NavBar = () => {
  const [menu, setMenu] = useState(false)
  const { user, dispatch } = useContext(DataContext)
  const navigate = useNavigate()

  const handleClick = () => {
    setMenu(!menu)
  }

  const handleLogout = () => {
    // const action = {
    //   type: types.logout,
    // }

    dispatch({
      type: types.logout,
    })

    navigate('/login', { replace: true })
  }

  return (
    <header className='header'>
      <nav className='nav container'>
        <Link to="/" className='nav__logo'>
          <i className='bx bxs-home nav__logo-icon' ></i>Home
        </Link>

        <div className={`nav__menu ${menu && 'show-menu'}`} >
          <ul className='nav__list'>
            <li className='nav__item'>
              <NavLink to="/marvel"
                className={({ isActive }) => 'nav__link' + (isActive ? ' active-link' : '')}
                onClick={handleClick}>
                Marvel
              </NavLink>
            </li>
            <li className='nav__item'>
              <NavLink to="/dc"
                className={({ isActive }) => 'nav__link' + (isActive ? ' active-link' : '')}
                onClick={handleClick}>
                DC
              </NavLink>
            </li>
            <li className='nav__item'>
              <NavLink to="/search"
                className={({ isActive }) => 'nav__link' + (isActive ? ' active-link' : '')}
                onClick={handleClick}>
                Search
              </NavLink>
            </li>
          </ul>
          <div className="nav__close" id="nav-close">
            <i className="bx bx-x" onClick={handleClick}></i>
          </div>
        </div>

        <div className='nav__btns'>
          <span className='nav__user'>{user.name}</span>
          <span className='nav__logoud'>
            <i className='bx bx-log-in' onClick={handleLogout}></i>
          </span>
          <div className="nav__toggle" id="nav-toggle">
            <i className="bx bx-grid-alt" onClick={handleClick}></i>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
