import React from 'react'
import image from '../../assets/images/testimonial-1.png'

const CardStudent = ({ personName = "", courseName = "", numStars, text }) => {
    let stars = [];
    for (let i = 0; i < numStars; i++) {
        stars.push(<span key={i}><box-icon type='solid' name='star' color='#ffff00' size='xs'></box-icon></span>);
    }

    return (
        <div className='card_student__container'>
            <div className='card_student__personal_data'>
                <img src={image} alt="Profile" className='card_student__image' />
                <div>
                    <p className='personal_data-name'>{personName}</p>
                    <p className='personal_data-course_name'>{courseName}</p>
                    <span className='personal_data-stars'>{stars}</span>
                </div>
            </div>
            <div className='card_student__text'>
                <p>
                    {text}
                </p>
            </div>
        </div>
    );
}

export default CardStudent;