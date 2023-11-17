import React from "react"
import ReactDOM from "react-dom/client";
import profilePicture from './images/profile-picture.png';
import emailIcon from './images/envelope-solid.svg';
import linkedInIcon from './images/linkedin.svg';

export default function Info(){
    return(
        <div className='info'>
            <img src={profilePicture} className='profile-picture'></img>
            <h3 className='name'>Prajwal Dhungana</h3>
            <h4 className='job'>Software Engineer</h4>
            <a className='website' href='https://github.com/prajwl-dh' target='_blank' rel='noreferrer'>https://github.com/prajwl-dh</a>
            <div className='social-buttons'>
                <a href="mailto:dhunganaprajwal1@gmail.com" target='_blank' rel='noreferrer'>
                    <button className='email-button'>
                        <img src={emailIcon} className='emailIcon'></img>
                        Email
                    </button>
                </a>
                <a href ='https://www.linkedin.com/in/prajwal-dhungana-214248130?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' target='_blank' rel='noreferrer'>
                    <button className='linkedin-button'>
                        <img src={linkedInIcon} className='linkedInIcon'></img>
                        LinkedIn
                    </button>
                </a>
            </div>
        </div>
    )
}