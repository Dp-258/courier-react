import React from 'react'
import HeroImage from '../HeroImage'
import { about } from './Data'
import AboutUs from '../AboutUs'
import Footer from '../Footer';
import { ScrollTop } from '../ScrollTop';

function Presentation() {
    return (
        <>
            <ScrollTop></ScrollTop>
            <HeroImage {...about}></HeroImage>
            <AboutUs></AboutUs>
            <Footer></Footer>
        </>
    )
}

export default Presentation