import React from 'react';
import web from '../src/images/749779.png'
import Common from './Common';
import './App.css';

function About() {
  return (
   
    <Common 
    name="Welcome to about page "
    img={web}
    visit='/contact'
    btname='Contact Us'
/>
  );
}

export default About;