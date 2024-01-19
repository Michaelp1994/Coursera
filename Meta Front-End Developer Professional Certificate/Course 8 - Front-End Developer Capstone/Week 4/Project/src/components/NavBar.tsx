import styled from "styled-components";
import React from "react";
import { NavLink } from "react-router-dom";

import littlelemon_logo from "../assets/logo.png";

interface Props {}

const NavBar: React.FC<Props> = () => {
    return (
        <StyledNav>
            <LogoImg src={littlelemon_logo} alt="Little Lemon Logo" />
            <NavBarItems>
                <NavBarItem>
                    <NavLink to="/">Home</NavLink>
                </NavBarItem>
                <NavBarItem>
                    <NavLink to="about">About</NavLink>
                </NavBarItem>
                <NavBarItem>
                    <NavLink to="menu">Menu</NavLink>
                </NavBarItem>
                <NavBarItem>
                    <NavLink to="reservations">Reservations</NavLink>
                </NavBarItem>
                <NavBarItem>
                    <NavLink to="order">Order Online</NavLink>
                </NavBarItem>
                <NavBarItem>
                    <NavLink to="login">Login</NavLink>
                </NavBarItem>
            </NavBarItems>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 124px;
    background-color: #ffffff;
    border-bottom: 1px solid black;
`;

const LogoImg = styled.img`
    height: 76px;
`;

const NavBarItems = styled.ul`
    font: Karla;
    display: flex;
    padding-left: 31px;
    height: 100%;
    align-items: center;
    list-style: none;
    font-size: 20px;
    text-decoration: none;
`;

const NavBarItem = styled.li`
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 14px;
    padding-right: 14px;

    & a {
        color: black;
        text-decoration: none;
        height: 100%;
        display: flex;
        align-items: center;
    }
    &:has(a.active) {
        background-color: hsl(var(--primary));
    }
    &:hover {
        background-color: hsl(var(--primary));
    }
`;

export default NavBar;
