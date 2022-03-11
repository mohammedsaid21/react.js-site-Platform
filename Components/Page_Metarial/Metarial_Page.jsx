import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";
import img from '../../assets/banner-home-page-4.jpg';
import NavBar from '../NavBar/NavBar';
import Landing_ from './Landing_';
import Metarial_Subject from './Metarial_Subject';

const Metarial_Page = () => {

  return (
    <div>
      <Landing_ />
      <Metarial_Subject />
    </div>
  )
}

export default Metarial_Page