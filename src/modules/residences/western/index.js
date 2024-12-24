import React from 'react'
import './western.scss';
import residenceImg from '../../../assests/image/Residence-banner.png';
import InteriorImg from '../../../assests/image/Interior.png';
import beyondImg from '../../../assests/image/residences-child-image.png';


export default function Western() {
    return (
        <div>
            <div className='bg-view'>
                <img src={residenceImg} alt='residenceimage' />

                <div className='container'>
                    <div className='view-btn'>
                        <button>Residences</button>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='magnificent'>
                    <span>Comfort with Quality</span>
                    <div className='magnificent-line'></div>
                    <h2>Western exposures with magnificent views of the Brooklyn skyline</h2>
                    <p>Baltic’s interiors have been designed according to the same principle that guide its architecture. Described as “tailored ease”, forms and surfaces are expressed in classic fabric that adorn this modern condominium. Time honored materials are applied throughout each residence to integrate impeccable finishes with thoughtful, simple detailing. The result is the blending of form and function with a distinctive sensibility.</p>
                </div>

                <div className='main-Luxurious'>
                    <div className='Luxurious-img'>
                        <img src={InteriorImg} alt='Interiorimage' />
                    </div>
                    <div className='Luxurious-text'>
                        <h2>
                            Interior
                        </h2>
                        <div className='Luxurious-line'></div>
                        <h5>
                            Luxurious finishes with sophisticated design
                        </h5>
                        <p>All of Baltic’s airy two- and three-bedroom apartments are finished with extraordinary attention to detail and quality. Each residence boasts extra-large windows, and several have their own private terraces with expansive views of Brooklyn and beyond. While marbles, granites, quartz, and labradorite bring subtle shimmer to state-of-the-art kitchens and bathrooms that include Miele appliances and Waterworks fixtures, warm oak and walnut give floors and cabinets a luxurious Old World feel.</p>
                    </div>
                </div>

                <div className='elegant'>
                    <span>Kitchens</span>
                    <div className='elegant-line'></div>
                    <h2>Hand-crafted Brookmans kitchens</h2>
                    <p>Baltic residences house custom hand-crafted Brookmans kitchens outfitted with quartz countertops produced in Italy framed by custom walnut cabinetry with polished nickel hardware, and are equipped with elegant and energy efficient Miele appliances and Waterworks fixtures.</p>
                    <p>Established in Britain over 30 years ago, Baltic represents Brookmans foray into the United States. Chic and contemporary in style with natural materials, such as horizontal grain American black walnut, the kitchens combine simple elegance with an urban aesthetic. Part of the Canburg Group, which includes the world-renowned Smallbone of Devizes, Brookmans celebrates minimalism, with sleek, streamlined furniture all crafted in the UK.</p>
                </div>

                <div className='main-several '>
                    <div className='several-text'>
                        <h2>Interior</h2>
                        <div className='several-line'></div>
                        <h5>Luxurious finishes with sophisticated design
                        </h5>
                        <p>All of Baltic’s airy two- and three-bedroom apartments are finished with extraordinary attention to detail and quality. Each residence boasts extra-large windows, and several have their own private terraces with expansive views of Brooklyn and beyond. While marbles, granites, quartz, and labradorite bring subtle shimmer to state-of-the-art kitchens and bathrooms that include Miele appliances and Waterworks fixtures, warm oak and walnut give floors and cabinets a luxurious Old World feel.</p>
                    </div>
                    <div className='several-img'>
                        <img src={InteriorImg} alt='Interiorimage' />
                    </div>
                </div>
                <div className='beyond'>
                    <img src={beyondImg} alt='beyondimage'/>
                </div>
            </div>
        </div>
    )
}
