import React from 'react';
import "./button.css";

const Button = ({ text, classBtn, icon = "" }) => {
    return (
        <>
            <button className={classBtn}>
                {icon && <span className='btn__icon-brd' dangerouslySetInnerHTML={{ __html: icon }} />}
                <span>{text}</span>
            </button>
        </>
    )
}

export default Button