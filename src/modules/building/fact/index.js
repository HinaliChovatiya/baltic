import React from 'react'
import './fact.scss';
import heartImg from '../../../assests/image/Building Facts.png';
import ExteriorImg from '../../../assests/image/Exterior.png';
import worldImg from '../../../assests/image/Building-image.png';
import land1Img from '../../../assests/image/building-gallery.png';
import land2Img from '../../../assests/image/building-gallery2.png';
import land3Img from '../../../assests/image/building-gallery3.png';
import land4Img from '../../../assests/image/building-gallery4.png';
import land5Img from '../../../assests/image/building-gallery5.png';
import footerImg from '../../../assests/image/footer-banner.png';


export default function Fact() {
    return (
        <div className='container'>
            <div className='main-heart'>
                <div className='heart-text'>
                    <h2>Building Facts</h2>
                    <div className='heart-line'></div>
                    <h5>Strategically located in the heart of Park Slope
                    </h5>
                    <p>Baltic’s interiors have been designed according to the same principle that guide its architecture. Described as “tailored ease”, forms and surfaces are expressed in classic fabric that adorn this modern condominium. Time honored materials are applied throughout each residence to integrate impeccable finishes with thoughtful, simple detailing. The result is the blending of form and function with a distinctive sensibility.</p>
                </div>
                <div className='heart-img'>
                    <img src={heartImg} alt='heartimage' />
                </div>
            </div>

            <div className='main-attention'>
                <div className='attention-img'>
                    <img src={ExteriorImg} alt='Exteriorimage' />
                </div>
                <div className='attention-text'>
                    <h2>
                        Exterior
                    </h2>
                    <div className='attention-line'></div>
                    <h5>
                        Finished with extraordinary attention to detail
                    </h5>
                    <p>All of Baltic’s airy two- and three-bedroom apartments are finished with extraordinary attention to detail and quality. Each residence boasts extra-large windows, and several have their own private terraces with expansive views of Brooklyn and beyond. While marbles, granites, quartz, and labradorite bring subtle shimmer to state-of-the-art kitchens and bathrooms that include Miele appliances and Waterworks fixtures, warm oak and walnut give floors and cabinets a luxurious Old World feel.</p>
                </div>
            </div>

            <div className='world'>
                <img src={worldImg} alt='worldimage' />
            </div>

            <div className='main-Lobby'>
                <div className='Lobby-text'>
                    <h2>
                        The Lobby
                    </h2>
                    <div className='Lobby-line'></div>
                    <h5>
                        The lobby, with direct access to the landscaped garden
                    </h5>
                    <p>Door attendant welcomes residents into the warmth of the lobby, with direct access to the landscaped garden that wraps to a terrace on the second floor amenity deck.</p>
                </div>
                <div className='Lobby-img'>
                    <img src={ExteriorImg} alt='Exteriorimage' />
                </div>
            </div>

            <div className='landscape'>
                <div className='close'>
                    <img src={land1Img} alt='land1image' />
                </div>
                <div className='me1'>
                    <img src={land2Img} alt='land2image' />
                </div>
            </div>
            <div className='landscape-grid'>
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
            <div className='the2'>
                <div className='thepic2'>
                    <img src={footerImg} alt='footerImg' />
                </div>
                <div className='the-text2'>
                    <p>Live at the BALTIC</p>
                    <button>
                        Apply
                    </button>
                </div>
            </div>
        </div>
    )
}
