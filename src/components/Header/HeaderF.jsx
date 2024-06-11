import React from 'react';
import { useState } from 'react';
import './header.css';
import Button from '../Button/Button';

const HeaderF = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='space_pad'>
            <header>
                <div className='container__menu'>
                    <h1 className='container__logo-name'>Etech.</h1>
                    <box-icon id="icon" name={isOpen ? 'x' : 'menu'} className="container__incon_menu" onClick={toggleMenu}></box-icon>
                </div>

                <nav className={isOpen ? 'menu' : 'menu menu_display'}>
                    <ul id='container-list' className='container__list'>
                        <li><a>Courses</a></li>
                        <li><a>Teacers</a></li>
                        <li><a>Offers</a></li>
                        <li><a>Contact</a></li>
                        <div className='access_buttons'>
                            <li><Button classBtn="btn btn__second" text={"Singn In"} /></li>
                            <li><Button classBtn="btn btn__primary" text={"Free trial"} /></li>
                        </div>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default HeaderF;