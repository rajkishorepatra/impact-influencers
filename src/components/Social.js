import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import '../css/social.css'

function Social() {
    return (
        <div class="social-container">
            <h2 className='p-2'>Follow us!</h2>
            <div className='midSocial'>
                <a href="https://www.youtube.com"
                    className="youtube social px-3 p-1">
                    <FontAwesomeIcon icon={faYoutube} size="3x" />
                </a>
                <a href="https://www.facebook.com"
                    className="facebook social px-3 p-1">
                    <FontAwesomeIcon icon={faFacebook} size="3x" />
                </a>
                <a href="https://www.twitter.com" className="twitter social px-3 p-1">
                    <FontAwesomeIcon icon={faTwitter} size="3x" />
                </a>
                <a href="https://www.instagram.com"
                    className="instagram social px-3 p-1 ">
                    <FontAwesomeIcon icon={faInstagram} size="3x" />
                </a>
            </div>
        </div>
    )
}

export default Social