import React from "react";
import { Container } from "./style";
import logo from '../../assets/logo.png'
import user from '../../assets/user.png'

const Header = () => {
    return (
        <Container>
            <div className="company">
                <img src={logo} ></img>
                <h1>Company</h1>
            </div>
            <img src={user} ></img>
        </Container>
    );
};

export default Header;