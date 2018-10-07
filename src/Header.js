import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <NavLink to="/" exact={true}>
            <h1>Busy Days</h1>
        </NavLink>
    </header>
);
export default Header