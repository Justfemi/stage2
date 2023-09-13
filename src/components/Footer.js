import React from 'react';
import { AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='icons'>
        <AiFillFacebook />
        <AiOutlineInstagram />
        <AiOutlineTwitter />
        <AiFillYoutube />
      </div>
      <div>
        <p>Conditions of use</p>
        <p>Privacy & Policy</p>
        <p>Press Room</p>
      </div>
      <div>
        <p> &copy; 2023 MovieBox by Ajibade Olufemi</p>
      </div>
    </div>
  )
}

export default Footer;