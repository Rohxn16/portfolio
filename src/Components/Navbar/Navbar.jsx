import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
// import some icons for the navbar form the react icons library
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaFileAlt, FaPhone, FaHouseUser } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" activeClassName="active" exact>
            <div className="grp">
            <FaHouseUser/> HOME
            </div>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link" activeClassName="active">
            <div className="grp">
            <FaUser/> ABOUT
            </div>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/services" className="nav-link" activeClassName="active">
            <div className="grp">
            <FaBriefcase/> SKILLS
            </div>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link" activeClassName="active">
            <div className="grp">
            <FaPhone/> CONTACT
            </div>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume" className="nav-link" activeClassName="active">
            <div className="grp">
            <FaBriefcase/> RESUME
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
  
export default Navbar