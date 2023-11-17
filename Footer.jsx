import React from "react";
import ReactDOM from "react-dom/client";
import squareTwitter from './images/square-twitter.svg';
import squareFacebook from './images/square-facebook.svg';
import squareInstagram from './images/square-instagram.svg';
import squareGithub from './images/square-github.svg';

export default function Footer(){
    return(
        <div className='footer'>
            <ul className='footer-list'>
                <li>
                    <a href ='https://twitter.com/phenomenalpraz' target='_blank' rel='noreferrer'>
                        <img src={squareTwitter} />
                    </a>
                </li>
                <li>
                    <a href ='https://www.facebook.com/profile.php?id=100086397636416&mibextid=2JQ9oc' target='_blank' rel='noreferrer'>
                        <img src={squareFacebook} />
                    </a>
                </li>
                <li>
                    <a href ='https://instagram.com/prajwldh_?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr' target='_blank' rel='noreferrer'>
                        <img src={squareInstagram} />
                    </a>
                </li>
                <li>
                    <a href ='https://github.com/prajwl-dh' target='_blank' rel='noreferrer'>
                        <img src={squareGithub} />
                    </a>
                </li>
            </ul>
        </div>
    )
};