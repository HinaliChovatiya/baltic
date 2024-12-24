import React from 'react'
import './footer.scss';

import placeIcon from '../../../assests/icon/place.svg';
import phoneIcon from '../../../assests/icon/phone.svg';
import mailIcon from '../../../assests/icon/mail.svg';
import footerLogo from '../../../assests/icon/footer-logo.svg';


export default function Footer() {
    return (
        <div>
            <div className='container'>
                <div className='brook'>
                    <div className='brook-footer'>
                        <div className='main-brook'>
                            <div className='brook-icon'>
                                <img src={placeIcon} alt='placeIcon' />
                            </div>
                            <div className='brook-text'>
                                <p>
                                    613 Baltic St, Brooklyn, NY 11217, United States
                                </p>
                            </div>
                        </div>
                        <div className='main-brook'>
                            <div className='brook-icon'>
                                <img src={phoneIcon} alt='phoneIcon' />

                            </div>
                            <div className='brook-text'>
                                <a>
                                    +1 718-330-0100
                                </a>
                            </div>
                        </div>
                        <div className='main-brook'>
                            <div className='brook-icon'>
                                <img src={mailIcon} alt='mailIcon' />

                            </div>
                            <div className='brook-text'>
                                <a>
                                    info@613-baltic.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <div className='container'>
                    <div className='main-Street'>
                        <div className='Street-logo'>
                            <img src={footerLogo} alt='footerLogo' />
                            <p>613 Baltic Street</p>
                        </div>
                        <div className='Street-menu'>
                            <a>Building</a>
                            <a>Residences</a>
                            <a>Floor Plans</a>
                            <a>Amenities</a>
                            <a>Neighborhood</a>
                            <a>Contact</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='reserved'>
                <span>Copyright © 2023 Baltic. All rights reserved.</span>
            </div>
        </div>
    )
}
