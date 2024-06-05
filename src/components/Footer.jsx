import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div className='w-full h-auto mt-[5vh] text-white flex flex-col items-center bg-[#462e2e] py-10'>
      <div className='flex flex-wrap justify-center mb-6'>
        <a href='https://www.w3.org/Provider/Style/dummy.html' className='mx-4 text-2xl' aria-label="Facebook">
          <FaFacebook />
        </a>
        <a href='https://www.w3.org/Provider/Style/dummy.html' className='mx-4 text-2xl' aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href='https://www.w3.org/Provider/Style/dummy.html' className='mx-4 text-2xl' aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href='https://www.w3.org/Provider/Style/dummy.html' className='mx-4 text-2xl' aria-label="LinkedIn">
          <FaLinkedin />
        </a>
      </div>
      <div className='flex flex-col md:flex-row justify-around w-full md:px-20'>
        <div className='mb-6 md:mb-0'>
          <h2 className='text-xl mb-2'>Quick Links</h2>
          <ul>
            <li><a href='/about' className='text-white hover:text-gray-300'>About Us</a></li>
            <li><a href='/services' className='text-white hover:text-gray-300'>Services</a></li>
            <li><a href='/contact' className='text-white hover:text-gray-300'>Contact</a></li>
            <li><a href='/privacy' className='text-white hover:text-gray-300'>Privacy Policy</a></li>
          </ul>
        </div>
        <div className='mb-6 md:mb-0'>
          <h2 className='text-xl mb-2'>Contact Information</h2>
          <p className='text-white'>123 Main Street</p>
          <p className='text-white'>City, State, 12345</p>
          <p className='text-white'>Email: info@example.com</p>
          <p className='text-white'>Phone: (123) 456-7890</p>
        </div>
        <div className='mb-6 md:mb-0'>
          <h2 className='text-xl mb-2'>Newsletter</h2>
          <form className='flex flex-col'>
            <input type='email' placeholder='Enter your email' className='mb-2 p-2 rounded' />
            <button type='submit' className='p-2 bg-blue-600 rounded text-white'>Subscribe</button>
          </form>
        </div>
      </div>
      <div className='text-center mt-10'>
        <p className='text-white'>© 2023 Your Company. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
