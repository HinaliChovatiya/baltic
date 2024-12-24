import React from 'react'
import './amenties.scss';
import amenitiesImg from '../../assests/image/Amenities-banner.png';
import ExteriorImg from '../../assests/image/Doorman.png';
import lightImg from '../../assests/image/Residents.png';
import adjoiningImg from '../../assests/image/Fitness Center.png';
import land1Img from '../../assests/image/building-gallery.png';
import land2Img from '../../assests/image/building-gallery2.png';
import land3Img from '../../assests/image/building-gallery3.png';
import land4Img from '../../assests/image/building-gallery4.png';
import land5Img from '../../assests/image/building-gallery5.png';
import footerImg from '../../assests/image/footer-banner.png';

export default function Amenties() {
    return (
        <div>
            <div className='bg-amenities'>
                <img src={amenitiesImg} alt='amenitiesimage' />
                <div className='container'>
                    <div className='amenities-btn'>
                        <button>Amenities</button>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='main-access'>
                    <div className='access-img'>
                        <img src={ExteriorImg} alt='Exteriorimage' />
                    </div>
                    <div className='access-text'>
                        <h2>
                            Doorman, Lobby & Garden
                        </h2>
                        <div className='access-line'></div>
                        <h5>
                            Direct access to the serene garden from the lobby
                        </h5>
                        <p>The 24-hour door attendant welcomes residents into the warmth of the lobby, which features skylights and direct access to the serene garden that connects to the terrace on the second-floor.</p>
                    </div>
                </div>
                <div className='main-light'>
                    <div className='light-text'>
                        <h2>Residents’ Lounge with Adjoining Terrace </h2>
                        <div className='light-line'></div>
                        <h5>
                            A light-filled fitness center with state-of-the-art equipment.
                        </h5>
                    </div>
                    <div className='light-img'>
                        <img src={lightImg} alt='lightimage' />
                    </div>
                </div>
                <div className='main-Adjoining'>
                    <div className='Adjoining-img'>
                        <img src={adjoiningImg} alt='adjoiningimage' />
                    </div>
                    <div className='Adjoining-text'>
                        <h2>Fitness Center </h2>
                        <div className='Adjoining-line'></div>
                        <h5>
                            Al fresco dining, and a curated roof deck replete with lounges, grills, and dining areas.
                        </h5>
                    </div>
                </div>
                <div className='roof'>
                    <div className='close'>
                        <img src={land1Img} alt='land1image' />
                    </div>
                    <div className='me1'>
                        <img src={land2Img} alt='land2image' />
                    </div>
                </div>
                <div className='roof-grid'>
                    <div className='me2'>
                        <img src={land3Img} alt='land3image' />
                    </div>
                    <div className='me2'>
                        <img src={land4Img} alt='land4image' />
                    </div>
                    <div className='me2'>
                        <img src={land5Img} alt='land5image' />
                    </div>
                </div>
                <div className='the4'>
                    <div className='thepic4'>
                        <img src={footerImg} alt='footerImg' />
                    </div>
                    <div className='the-text4'>
                        <p>Live at the BALTIC</p>
                        <button>
                            Apply
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
