import React from 'react'
import Products from '../Products'
import {prodOne, prodB, prodCG, prodCT, services} from './Data'
import HeroImage from '../HeroImage'
import Footer from '../Footer';
import { ScrollTop } from '../ScrollTop';

function Services() {
    return (
        <>
            <ScrollTop />
            <HeroImage {...services}></HeroImage>
            <Products {...prodOne}></Products>
            <hr></hr>
            <Products {...prodCG}></Products>
            <hr></hr>
            <Products {...prodB}></Products>
            <hr></hr>
            <Products {...prodCT}></Products>
            <Footer></Footer>
        </>
    )
}

/* <ul> align-items-center*/
export default Services