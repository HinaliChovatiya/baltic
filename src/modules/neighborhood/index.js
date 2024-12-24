import React from 'react'
import './neighborhood.scss';
import NeighborhoodImg from '../../assests/image/spotlight-banner.png';
import EducationImg from '../../assests/image/Education.png';
import outdoorImg from '../../assests/image/neighborhoodbanner-banner.png';
import CreativeImg from '../../assests/image/Lifestyle.png';
import footerImg from '../../assests/image/footer-banner.png';


export default function Neighborhood() {
    return (
        <div>
            <div className='bg-Neighborhood'>
                <img src={NeighborhoodImg} alt='Neighborhoodimage' />
                <div className='container'> 
                    <div className='Neighborhood-btn'>
                        <button>Neighborhood</button>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='charm'>
                    <span>Neighborhood</span>
                    <div className='charm-line'></div>
                    <h2>Scenic sidewalks and fun for all ages</h2>
                    <p>Park Slope is a name-brand Brooklyn neighborhood known for its organic food markets and picturesque, pedestrian-friendly sidewalks. Prospect Park, charming cafes, and plenty of public amenities contribute to the neighborhood's small-town vibe.</p>
                </div>
                <div className='main-Education'>
                    <div className='Education-text'>
                        <h2>Education</h2>
                        <div className='Education-line'></div>
                        <h5>Proximity to cultural hubs
                        </h5>
                        <p>Proximity to cultural hubs such as The Brooklyn Public Library, Brooklyn Conservatory, Brooklyn Academy of Music and more make for locals that include teachers, academics, and lifelong learners. It’s no wonder that Park Slope grade schools -- from public and charter to private and beyond -- are considered among the best in New York.</p>
                    </div>
                    <div className='Education-img'>
                        <img src={EducationImg} alt='Educationimage' />
                    </div>
                </div>
                <div className='main-Health'>
                    <div className='Health-img'>
                        <img src={EducationImg} alt='Educationimage' />
                    </div>
                    <div className='Health-text'>
                        <h2>Wellness & Outdoors</h2>
                        <div className='Health-line'></div>
                        <h5>Public parks, flower gardens, and outdoor spaces
                        </h5>
                        <p>Health and culture enthusiasts will find plenty of public parks, flower gardens, and outdoor spaces to enjoy. Greenspace NYC and Park Slope CSA’s volunteer gardens are only two spots that leaf-seeking locals can call their own.</p>
                    </div>
                </div>
                <div className='outdoor'>
                    <img src={outdoorImg} alt='outdoorimage' />
                </div>
                <div className='main-Creative'>
                    <div className='Creative-text'>
                        <h2>The Lifestyle</h2>
                        <div className='Creative-line'></div>
                        <h5>Creative people love Park Slope
                        </h5>
                        <p>Stroller-friendly sidewalks, plenty of outdoor space, and a casual-meets-upscale dining and drinking scene.</p>
                        <p>Writers, artists, and other creatives love Park Slope for the pace, which is relatively slower than you’ll find in other central Brooklyn neighborhoods. Coffee-and-wine shops and book cafes cater to happy hour crowds and linger-all-day creatives alike.</p>
                        <p>Park Slope may be known for laid-back living, but in-the-know locals take personal style seriously. Designer clothing outposts such as Bird and Otto, and independent label haven Bhoomki keep trend-conscious shoppers happy.</p>
                    </div>
                    <div className='Creative-img'>
                        <img src={CreativeImg} alt='Creativeimage' />
                    </div>
                </div>
                <div className='main-loyal'>
                    <div className='loyal-img'>
                        <img src={EducationImg} alt='Educationimage' />
                    </div>
                    <div className='loyal-text'>
                        <h2>
                            Bars & Restaurants</h2>
                        <div className='loyal-line'></div>
                        <h5>Award-winning eateries and sidewalk cafes
                        </h5>
                        <p>Food boutiques such as Blue Apron stock gourmet takeaway and artisanal gifts that loyal and local dinner party hosts (and their visiting guests) swear by.</p>
                        <p>When it comes to dining out, Park Slope is heaped with options, from award-winning eateries and sidewalk cafes to cash-only BYOB dining gems packed with destination diners from throughout the borough and lower Manhattan.</p>
                        <p>Park Slope’s nightlife is a balanced mix of cozy dives and wine bars, specializing in locally-brewed beer and live music. On any given night, Union Hall is packed with residents playing bocce ball or catching a late night improv act or cover band.</p>
                    </div>
                </div>
                <div className='the5'>
                    <div className='thepic5'>
                        <img src={footerImg} alt='footerImg' />
                    </div>
                    <div className='the-text5'>
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
