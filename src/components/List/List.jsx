import React from 'react'
import './list.css'

const List = ({ icon, title, subtitle, text }) => {
    return (
        <>
            <div className='list__container'>
                <span className='list__content-icon' dangerouslySetInnerHTML={{ __html: icon }} />
                <div className='list__content'>
                    <h2 className='list__content-title'>{title}</h2>
                    <p className='list__content-text'>{text}</p>
                </div>
            </div>
        </>

    )
}

export default List