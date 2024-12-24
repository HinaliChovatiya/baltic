import React from 'react'
import './header.scss';
import headerLogo from '../../../assests/logo/weblogo.svg';
import tabIcon from '../../../assests/icon/menu.svg';

export default function Header() {
    return (
        <div>
            <div className='header-bg'>
                <div className='container'>
                    <div className='main-header'>
                        <div className='header-logo'>
                            <img src={headerLogo} alt='headerlogo' />
                            <p>613 Baltic Street</p>
                        </div>
                        <div className='header-menu'>
                            <a>Building</a>
                            <a>Residences</a>
                            <a>Floor Plans</a>
                            <a>Amenities</a>
                            <a>Neighborhood</a>
                            <a>Contact</a>
                            <button>Apply</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='main-tablet'>
                <div className='tablet-menu'>
                    <div className='tablet-icon'>
                        <img src={tabIcon} alt='tabicon' />
                    </div>
                    <div className='tablet-logo'>
                        <img src={headerLogo} alt='headerlogo' />
                        <p>613 Baltic Street</p>
                    </div>
                    <div className='tablet-btn'>
                        <button>Apply</button>
                    </div>
                </div>
            </div>
        </div>


    )
}
