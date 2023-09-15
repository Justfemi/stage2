import React from 'react';
import { AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai';
import './Style.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='icons'>
        <AiFillFacebook className='icon' />
        <AiOutlineInstagram className='icon' />
        <AiOutlineTwitter className='icon' />
        <AiFillYoutube className='icon' />
      </div>
      <div className='text'>
        <h5>Conditions of use</h5>
        <h5>Privacy & Policy</h5>
        <h5>Press Room</h5>
      </div>
      <div>
        <h5> &copy; 2023 MovieBox by Ajibade Olufemi</h5>
      </div>
    </div>
  )
}

export default Footer;