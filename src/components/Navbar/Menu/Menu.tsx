import React, {useState} from "react";
import s from './Menu.module.css'
import {NavLink} from "react-router-dom";


const Menu = () => {

    const [open, setOpen] = useState(true)

    function onClickHandler() {
        document.body.classList.toggle('lockedMenu'); // toggle lockedMenu class
        setOpen(!open)
    }

    return (
        <>
            <div className={open ? s.overlay : `${s.overlay} ${s.open}`}>
                <nav className={s.overlayMenu}>
                    <ul className={s.menu}>
                        <li><NavLink to="/page1" onClick={onClickHandler} role="menuitem">Page 1</NavLink></li>
                        <li><NavLink to="/page2" onClick={onClickHandler} role="menuitem">Page 2</NavLink></li>
                        <li><NavLink to="/page3" onClick={onClickHandler} role="menuitem">Page 3</NavLink></li>
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