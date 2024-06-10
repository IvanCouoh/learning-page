import React from 'react'
import './header.css'

const Header = () => {
    return (
        <>
            <div className='container__menu'>
                <h1 className='container__logo-name'>Etech.</h1>
                <div>
                    <ul>
                        <li>Courses</li>
                        <li>Teacers</li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <box-icon name='menu' className="container__incon_menu"></box-icon>
                </div>

            </div>
        </>
    )
}

export default Header