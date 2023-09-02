import React from "react";
import '../assets/Style/Header.css';

const Logo = (props) => {
    const {LOGOIMG, NAME} = props.TMPLOGO;
    return (
        <div className={props.TMPSTYLELOGO}>
            <span>
                <img src={LOGOIMG} alt="Logo" />
                {NAME}
            </span>
        </div>
    )
}

export default Logo;