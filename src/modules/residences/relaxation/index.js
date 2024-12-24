import React from 'react'
import './relaxation.scss';
import customImg from '../../../assests/image/Bathrooms.png';
import land1Img from '../../../assests/image/building-gallery.png';
import land2Img from '../../../assests/image/building-gallery2.png';
import land3Img from '../../../assests/image/building-gallery3.png';
import land4Img from '../../../assests/image/building-gallery4.png';
import land5Img from '../../../assests/image/building-gallery5.png';
import footerImg from '../../../assests/image/footer-banner.png';


export default function Relaxation() {
    return (
        <div className='container'>
            <div className='efficient'>
                <span>Bathrooms</span>
                <div className='efficient-line'></div>
                <h2>Sense of relaxation and comfort</h2>
                <p>The residence bathrooms feature warm and luxurious natural materials and carefully chosen details, colors, and textures that are synthesized harmoniously to convey a sense of relaxation and comfort.</p>
            </div>
            <div className='custom'>
                <div className='custom-img'>
                    <img src={customImg} alt='customimage' />
                </div>
                <div className='custom-text'>
                    <h6>
                        LUXE FLOOR-TO-CEILING STONEWORK
                    </h6>
                    <p>
                        Stone chevron floor and stone wall tile in master baths. Ocean spray limestone accent wall, marble shower tile, and tub in second baths.
                    </p>
                    <h6>
                        CUSTOM SUSPENDED VANITIES
                    </h6>
                    <p>
                        Custom walnut vanities with zeus black marble counters featured in master baths. Marble waterfall vanity in second baths. Neutral quartzite counters and walnut vanities in powder rooms.
                    </p>
                    <h6>
                        WATERWORKS FIXTURES
                    </h6>
                    <p>
                        Steam shower with stone niche in master baths.
                    </p>
                    <h6>
                        HEATED FLOORING
                    </h6>
                    <p>
                        Radiant floor heating in master baths.
                    </p>
                </div>
            </div>
            <div className='main-wall'>
                <div className='wall'>
                    <div className='close'>
                        <img src={land1Img} alt='land1image' />
                    </div>
                    <div className='me1'>
                        <img src={land2Img} alt='land2image' />
                    </div>
                </div>
                <div className='wall-grid'>
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
            </div>
            <div className='the3'>
                <div className='thepic3'>
                    <img src={footerImg} alt='footerImg' />
                </div>
                <div className='the-text3'>
                    <p>Live at the BALTIC</p>
                    <button>
                        Apply
                    </button>
                </div>
            </div>
        </div>
    )
}
