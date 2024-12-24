import React from 'react'
import './comfort.scss';
import buildImg from '../../../assests/image/Building-banner.png';

export default function Comfort() {
    return (
        <div>
            <div className='bg-build'>
                <img src={buildImg} alt='buildimage' />

                <div className='container'>
                    <div className='build-btn'>
                        <button>Building</button>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='Fort'>
                    <span>Luxury Condominium</span>
                    <div className='fort-line'></div>
                    <h2>Live in unparalleled comfort and quality</h2>
                    <p>Baltic’s luxury condominiums offer a rare chance to live in unparalleled comfort and quality above the cosmopolitan yet quintessentially Brooklyn streets of Park Slope. These boutique residences at the intersection of Baltic Street and Fourth Avenue both complement and transform their surroundings, providing a mix of tradition and innovation that infuses all aspects of the building, from the apartments’ interior details to their many framed views of the undulating patchwork of Park Slope, Boerum Hill, and Fort Greene.</p>
                </div>
            </div>
        </div>

    )
}
