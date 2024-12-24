import React from 'react'
import './prime.scss';
import firstImg from '../../../assests/image/Neighborhood.png';
import secondImg from '../../../assests/image/Neighborhood2.png';
import thirdImg from '../../../assests/image/Neighborhood3.png';
import fourthImg from '../../../assests/image/Neighborhood4.png';
import hillIcon from '../../../assests/icon/right-icons.svg';
import footerImg from '../../../assests/image/footer-banner.png';

export default function Prime() {
    return (
        <div>
            <div className='prime-bg'>
                <div className='container'>
                    <div className='cross'>
                        <span>Neighborhood</span>
                        <div className='cross-line'></div>
                        <h5>Baltic and Fourth, the crossroads of prime Park Slope</h5>
                    </div>
                </div>
                <div className='main-hill'>
                    <div className='hill'>
                        <img src={firstImg} alt='firstimage' />
                        <img src={secondImg} alt='secondimage' />
                        <img src={thirdImg} alt='thirdimage' />
                        <img src={fourthImg} alt='fourthimage' />
                    </div>
                    <p>Boerum Hill and Gowanus, allow for at-a-moment’s access to the many trendy boutiques and upscale restaurants in the vicinity as well as easy reach to renowned cultural institutions and the Atlantic Terminal transit hub.</p>
                </div>
                <div className='prime-more'>
                    <div className='prime-aero'>
                        <span>Learn More</span>
                        <img src={hillIcon} alt='righticon' />
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='the1'>
                    <div className='thepic1'>
                        <img src={footerImg} alt='footerImg' />
                    </div>
                    <div className='the-text1'>
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
