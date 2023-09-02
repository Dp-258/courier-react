import React from 'react';
import '../../App.css'
import HeroSection from '../HeroSection'
import Cards from '../Cards'
import Footer from '../Footer';
import { prodHome } from './Data';
import Products from '../Products';
import { ScrollTop } from '../ScrollTop';

function Home() {
    return (

        <>
            <ScrollTop></ScrollTop>
            <HeroSection></HeroSection>
            <div style={{ backgroundColor: 'white', }}>
                <Products {...prodHome}></Products>
                <Cards></Cards>
            </div>
            <Footer></Footer>
        </>
    );
}

export default Home;