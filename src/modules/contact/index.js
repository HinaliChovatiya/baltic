import React from 'react'
import './contact.scss';
import contactImg from '../../assests/image/contact-banner.png';
import locationImg from '../../assests/icon/placecontact-icon.svg';
import callImg from '../../assests/icon/callcontact-icon.svg';
import gmailImg from '../../assests/icon/mailcontact_outline.svg';

export default function Contact() {
    return (
        <div>
            <div className='bg-contact'>
                <img src={contactImg} alt='contactimage' />

                <div className='container'>
                    <div className='contact-btn'>
                        <button>Contact</button>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='interest'>
                    <h3>Thank you for your interest in 613 Baltic Street.</h3>
                </div>
                <div className='main-register'>
                    <div className='Schedule'>
                        <span>Schedule An Appointment</span>
                        <div className='Schedule-line'></div>
                        <div className='united'>
                            <div className='united-icon'>
                                <img src={locationImg} alt='locactionimage' />
                            </div>
                            <div className='united-text'>
                                <p>
                                    613 Baltic St, Brooklyn, NY 11217, United States
                                </p>
                            </div>
                        </div>
                        <div className='united'>
                            <div className='united-icon'>
                                <img src={callImg} alt='callimage' />
                            </div>
                            <div className='united-text'>
                                <a>
                                    +1 718-330-0100
                                </a>
                            </div>
                        </div>
                        <div className='united'>
                            <div className='united-icon'>
                                <img src={gmailImg} alt='gmailimage' />
                            </div>
                            <div className='united-text'>
                                <a>
                                    info@613-baltic.com
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='below'>
                        <span>Please register below for more information.</span>
                        <div className='below-line'></div>
                        <div className='form'>
                            <div className='form1'>
                                <label>First Name*</label>
                                <input type='text' placeholder='First Name' />
                            </div>
                            <div className='form1'>
                                <label>Last Name*</label>
                                <input type='text' placeholder='Last Name' />
                            </div>
                            <div className='form1'>
                                <label>Email*</label>
                                <input type='text' placeholder='Email' />
                            </div>
                            <div className='form1'>
                                <label>Phone Number*</label>
                                <input type='text' placeholder='Phone Number' />
                            </div>
                            <div className='form1'>
                                <label>Residence Type</label>
                                <select>
                                    <option>Residence Type</option>
                                    <option>Residence Type</option>
                                </select>
                            </div>
                            <div className='form1'>
                                <label>Price Range</label>
                                <select>
                                    <option>Price Range</option>
                                    <option>Price Range</option>
                                </select>
                            </div>
                        </div>
                        <div className='main-broker'>
                            <div className='broker-text'>
                                <span>I am a broker</span>
                            </div>
                            <div className='broker-btn'>
                                <div className='radio-btn'>
                                    <input type='radio' />
                                    <label>Yes</label>
                                </div>
                                <div className='radio-btn'>
                                    <input type='radio' />
                                    <label>No</label>
                                </div>
                            </div>
                        </div>
                        <div className='form-btn'>
                            <button>Register</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
