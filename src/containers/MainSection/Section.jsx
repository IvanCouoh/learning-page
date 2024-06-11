import React from 'react'
import './section.css';

import mainImage from '../../assets/images/person-presentation.png';
import Button from '../../components/Button/Button';

const MainSection = () => {
    return (
        <section className='main space_pad'>
            <div className='main__information'>
                <h1 className='main__title'>Develop your skills in a new and unique way</h1>
                <p className='main__text'>Explore a transformative approach to skills development on our online learning platform. Uncover a new realm of learning experiences and elevate your expertise in unique ways.</p>
                <div className='main__actions'>
                    <Button classBtn="btn btn__primary" text={"Enrrol Now"} />
                    <Button classBtn="btn btn__icon" icon="<box-icon name='play' color='#fff' class='btn__icon-bgr'></box-icon>" text={"What's Etech?"} />
                </div>
            </div>
            <div className='main__image'>
                <img src={mainImage} />
            </div>
        </section>
    )
}

export default MainSection