import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Stack } from "react-bootstrap";
import '../assets/Style/Header.css';
import Logo from './Logo';
import Search from './Search';


const Header = (props) => {
    return (
        <div className={props.STYLEHEADER}>
            <Stack direction="horizontal" gap={3}>
                <div className="p-2">
                    <Logo
                        TMPLOGO={props.LOGO}
                        TMPSTYLELOGO={props.STYLELOGO}
                    />
                </div>
                <div className="p-2 ms-auto"><Search /></div>
            </Stack>
        </div>
    )
};

export default Header;