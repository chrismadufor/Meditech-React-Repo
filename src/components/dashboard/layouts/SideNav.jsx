import logo from '../../img/logo.svg'
import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { patientSideNavLinks } from '../SideNavLinks'
import SideNavCSS from "../../styles/SideNav.module.css"
import { userLoggedIn, updateUserDetails } from '../../../theStore/actions'


function SideNav() {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userRole = useSelector((state) => (state.authReducer.userDetails.userType))
    console.log('Role: ' + userRole)

    const [active, setActive] = useState(false)

    const [activeLink, setActiveLink] = useState(false)

    const toggleActive = () => {
        setActive(!active)
    }

    const closeSideNav = () => {
        setActiveLink(!activeLink)
        if(active && window.innerWidth <= 1150) {
            setActive(!active)
        }
    }

    const logOut = () => {
        localStorage.removeItem('token')
        dispatch(updateUserDetails({}))
        dispatch(userLoggedIn(false))
        console.log('Logged out!')
        navigate('/signin')
    }

    return (
        <div className= {`${SideNavCSS.sideNav} ${active ? SideNavCSS.active : ""}`}>
            <div className={SideNavCSS.header}>
                <img src={logo} alt='' />
                <h2>MEDITECH</h2>
                    <div className={SideNavCSS.sideNavToggle} onClick={toggleActive}>
                        <i className="fas fa-bars"></i>
                    </div>
            </div>
            <ul className={SideNavCSS.sideNavLinks}>
                {
                    patientSideNavLinks.map((link, index) => (
                        <li onClick={closeSideNav} className={link.extraClass === "logOut" ? SideNavCSS.logOut : SideNavCSS.sideLinkItem} key={index} >
                            <NavLink className={({isActive}) => (!isActive ? '' : SideNavCSS.activeNavLink) } to = {link.url}>
                                <i className={link.icon}></i>
                                <span>{link.title}</span>
                            </NavLink>
                            <p className={SideNavCSS.toolTip}>{link.title}</p>
                        </li>
                    ))
                }
                <li className= {SideNavCSS.logOut} onClick = {logOut}>
                    <i className='fas fa-sign-out'></i>
                    <span>Logout</span>
                    <p className={SideNavCSS.toolTip}>Logout</p>
                </li>
            </ul>          
        </div>
    )
}


export default SideNav

