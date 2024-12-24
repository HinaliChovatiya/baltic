import React from 'react'
import './park.scss';
import heroImg from '../../../assests/image/hero-banner.png';
import developIcon from '../../../assests/icon/Smoking.svg';
import petIcon from '../../../assests/icon/pet.svg';
import rentIcon from '../../../assests/icon/rent.svg';
import rightIcon from '../../../assests/icon/right-icons.svg';


export default function Park() {
  return (
    <div>
      <div className='hero-bg'>
        <img src={heroImg} alt='heroimage' />
        <div className='container'>
          <div className='living'>
            <h1>Enjoy Luxury living in Park Slope</h1>
            <p>Set in an idyllic, historic neighborhood of Park Slope and moments from bucolic Prospect Park lives an exceptional condominium offering -<b> 613 Baltic.</b></p>
            <button>Inquire Today</button>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='develop'>
          <span>Building</span>
          <div className='line'></div>
          <h2>Thoughtfully developed to the highest quality standard</h2>
          <p>Baltic’s design is intentionally composed and respectful of its Brooklyn neighborhood. Its simple detailing reinforces the rhythms of openings and material modules in a similar manner as the brick and lintels of the adjacent townhouses. Wrought in a golden-grey brick, 613 Baltic reinforces time-honored materials by integrating luxurious finishes with sophisticated design to arrive at an unparalleled offering along this burgeoning corridor.</p>

          <div className='develop-icon'>
            <div className='smok'>
              <div className='smok-icon'>
                <img src={developIcon} alt='developicon' />
              </div>
              <p>Smoking Not Allowed</p>
            </div>
            <div className='smok'>
              <div className='smok-icon'>
                <img src={petIcon} alt='peticon' />
              </div>
              <p>Pet Allowed</p>
            </div>
            <div className='smok'>
              <div className='smok-icon'>
                <img src={rentIcon} alt='renticon' />
              </div>
              <p>Subletting Allowed</p>
            </div>
          </div>

          <div className='learn-more'>
            <div className='more'>
              <span>Learn More</span>
              <img src={rightIcon} alt='righticon'/>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
