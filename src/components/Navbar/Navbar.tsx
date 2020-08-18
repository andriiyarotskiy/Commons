import React, {useState} from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";



const Navbar = () => {

    const [open, setOpen] = useState(true)

    function onClickHandler() {
        setOpen(!open)
    }

    return (
        <>
            <div className={s.header__container}>
                <div className={open ? s.header__body : `${s.header__body} ${s.active}`}>
                    <div className={open ? s.header__burger : `${s.header__burger} ${s.active}`}
                         onClick={onClickHandler}
                    >
                        <span></span>
                    </div>
                    <div className={open ? s.header__menu : `${s.header__menu} ${s.active}`}>
                        <ul className={s.header__list}>
                            <li className={s.list}>
                                <NavLink to="/prejunior" activeClassName={s.activeLink}>PreJunior</NavLink>
                            </li>
                            <li className={s.list}>
                                <NavLink to="/junior" activeClassName={s.activeLink}>Junior</NavLink>
                            </li>
                            <li className={s.list}>
                                <NavLink to="/juniorplus" activeClassName={s.activeLink}>Junior +</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar