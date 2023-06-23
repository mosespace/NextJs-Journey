import React from 'react'
import { PiDribbbleLogoFill, PiInstagramLogoFill } from 'react-icons/pi';
import { FaTwitter, FaLinkedin} from 'react-icons/fa';

export default function SocialLinks() {
  return (
    <div className='socials'>
        <a href="#" className='contact-link'> Contact me</a>
        <a href="#" className="dribble"><PiDribbbleLogoFill/></a>
        <a href="#" className="instagram"><PiInstagramLogoFill/></a>
        <a href="#" className="twitter"><FaTwitter/></a>
        <a href="#" className="linkedin"><FaLinkedin/></a>
    </div>
  )
}
