import React from 'react';
import s from './Header.module.css'
import SearchForm from "../../Forms/SearchForm/SearchForm";
import {Button} from 'react-bootstrap';
import HeaderMe from "./HeaderMe/HeaderMe";

const logo = 'https://events.com/wp-content/uploads/2019/11/Events_Primary_Logo-scaled.png'

const Header = () => {
    return (
        <header className={s.wrapper}>
            <div className={s.logoWrap}>
                <img className={s.logo} src={logo} alt={'logo'}/>
            </div>
            <div className={s.searchWrap}>
                <SearchForm/>
            </div>
            <div className={s.btnWrap}>
                <Button variant={"outline-primary"}>Sign in</Button>
                <Button variant={"outline-success"}>Login</Button>
            </div>
            {/*<div className={s.menuWrapp}>*/}
            {/*    <HeaderMe/>*/}
            {/*</div>*/}

        </header>
    );
};

export default Header;
