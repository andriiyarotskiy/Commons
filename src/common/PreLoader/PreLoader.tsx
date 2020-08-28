import React from "react";
import preloader3 from '../../assets/images/preloader3.svg'


const PreLoader = React.memo(() => {
    return (
        <div>
            <img src={preloader3} alt=""/>
        </div>
    )
})

export default PreLoader;