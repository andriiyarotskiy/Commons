import React, {useState} from "react";
import s from './Menu.module.css'
import {NavLink} from "react-router-dom";


const Menu = () => {

    const [open, setOpen] = useState(true)

    function onClickHandler() {
        setOpen(!open)
    }

    return (
        <>
            <div className={open ? s.overlay : `${s.overlay} ${s.open}`}>
                <nav className={s.overlayMenu}>
                    <ul className={s.menu}>
                        <li><NavLink to="/prejunior" onClick={onClickHandler} role="menuitem">PreJunior</NavLink></li>
                        <li><NavLink to="/junior" onClick={onClickHandler} role="menuitem">Junior</NavLink></li>
                        <li><NavLink to="/juniorplus" onClick={onClickHandler} role="menuitem">Junior +</NavLink></li>
                    </ul>
                </nav>
            </div>
            <div className={open ? s.navBurger : `${s.navBurger} ${s.active}`}
                 role="navigation"
                 onClick={onClickHandler}
            >
            </div>
        </>
    )
}

export default Menu