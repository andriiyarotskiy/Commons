import React, {useState} from "react";
import s from './Navbar.module.css'
import RightNav from "./RightNav";


const Navbar = () => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <div className={open ? s.wrapper : `${s.wrapper}${s.slideInLeft}`}
            >
                <div className={s.nav}>
                    <div className={s.nav__icon}
                         onClick={() => {
                             setOpen(!open)
                         }}
                    >
                        toggle
                    </div>

                    <RightNav open={open}/>

                </div>
            </div>
        </>
    )
}

export default Navbar