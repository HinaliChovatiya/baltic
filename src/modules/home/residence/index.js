import React from 'react'
import './residence.scss';
import residenceImg from '../../../assests/image/Residences.png';
import rightaeroIcon from '../../../assests/icon/right-icons.svg';
import brrokImg from '../../../assests/image/nature.png';
import securityIcon from '../../../assests/icon/security.svg';

export default function Residence() {
    return (
        <div>
            <div className='container'>
                <div className='main-structure'>
                    <div className='structure'>
                        <img src={residenceImg} alt='residenceimg' />
                    </div>
                    <div className='story'>
                        <h2>Residences</h2>
                        <div className='line-item'></div>
                        <h5>11-story structure houses
                            43 luxury condominiums.
                        </h5>
                        <p>Baltic’s interiors have been designed according to the same principle that guide its architecture. Described as “tailored ease”, forms and surfaces are expressed in classic fabric that adorn this modern condominium. Time honored materials are applied throughout each residence to integrate impeccable finishes with thoughtful, simple detailing. The result is the blending of form and function with a distinctive sensibility.</p>
                        <div className='learn'>
                            <div className='aero'>
                                <span>Learn More</span>
                                <img src={rightaeroIcon} alt='rightaeroicon' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='brook-bg'>
                <div className='container'>
                    <div className='brrok'>
                        <img src={brrokImg} alt='brrokimg' />
                        <span>Facades of traditional brooklyn townhouses</span>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='modern'>
                    <span>Amenities</span>
                    <div className='modern-line'></div>
                    <h2>Enjoy a suite of modern amenities and services</h2>
                    <p>The 24-hour door attendant welcomes residents into the warmth of the lobby, which features skylights and direct access to the serene garden that connects to the terrace on the second-floor. Other highlights include a light-filled fitness center enveloped in floor-to-ceiling windows, on-site parking, resident bicycle storage, resident’s lounge with adjoining terrace for al fresco dining, and a curated roof deck replete with lounges, grills, and dining areas.</p>

                    <div className='modern-icon'>
                        <img src={securityIcon} alt='securityicon' />
                        <img src={securityIcon} alt='securityicon' />
                        <img src={securityIcon} alt='securityicon' />
                        <img src={securityIcon} alt='securityicon' />
                        <img src={securityIcon} alt='securityicon' />
                        <img src={securityIcon} alt='securityicon' />
                    </div>

                    <div className='modern-function'>
                        <div className='modern-aero'>
                            <span>Learn More</span>
                            <img src={rightaeroIcon} alt='rightaeroicon' />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

