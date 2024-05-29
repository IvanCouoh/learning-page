import React from 'react'
import './card.css'

const Card = ({ imageCourse, courseName, qualification, subject, classesNumber, studentsNumber, price, teacherName, teacherProfile }) => {
    return (
        <>
            <div className='card__container'>
                <img src={imageCourse} alt='course image' className='container__image-image' />
                <div className='card__head'>
                    <div className='card__course-name'>
                        <p className='active-dot'></p>
                        <p>{courseName}</p>
                    </div>
                    <div className='card__qualification'>
                        <span><box-icon type='solid' name='star' color='#ffff00' size='xs'></box-icon></span>
                        <p>{qualification}</p>
                    </div>
                </div>
                <h2 className='subject__name'>{subject}</h2>
                <div className='subject__details'>
                    <div className='subject__details-item'>
                        <box-icon name='book-open' color='#af6eeb'></box-icon>
                        <p>{classesNumber} classes</p>
                    </div>
                    <div className='subject__details-item'>
                        <box-icon name='user' color='#af6eeb'></box-icon>
                        <p>{studentsNumber} Students</p>
                    </div>
                </div>
                <div className='subject__price-teacher'>
                    <h2 className='subject__price'>${price}</h2>
                    <div className='subject__teacher'>
                        <div className='subject__teacher-image'>
                            <img src={teacherProfile} alt='teacher profile' className='teacher__profile' />
                            <p className='teacher__online-dot'></p>
                        </div>
                        <p className='teacher__name'>{teacherName}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card