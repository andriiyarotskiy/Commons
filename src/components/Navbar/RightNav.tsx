import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

type RightNavType = {
    open: boolean
}

const RightNav: React.FC<RightNavType> = ({open}) => {

    const UL = {
        transform: open ? "translateX(0)" : "translateX(100%)",
        top: "0",
        left: "0",
    }

    return (
        <>
            <ul style={UL}>
                <li className={s.list}>
                    <NavLink to="/prejunior">PreJunior</NavLink>
                </li>
                <li className={s.list}>
                    <NavLink to="/junior">Junior</NavLink>
                </li>
                <li className={s.list}>
                    <NavLink to="/juniorplus">Junior +</NavLink>
                </li>
            </ul>
        </>
    )
}

export default RightNav