import React from 'react'
import HeroImage from '../HeroImage'
import { contact,infoUIO,infoLatacunga,infoOf1Miami,infoOf2Miami } from './Data'
import InfoRow from '../InfoRow'
import Form from '../Form'
import Footer from '../Footer';
import { ScrollTop } from '../ScrollTop';
function Contact() {
  return (
    <>
        <ScrollTop></ScrollTop>
        <HeroImage {...contact}></HeroImage>
        <InfoRow {...infoUIO}></InfoRow>
        <InfoRow {...infoLatacunga}></InfoRow>
        <InfoRow {...infoOf1Miami}></InfoRow>
        <InfoRow {...infoOf2Miami}></InfoRow>
        <Form src='https://images.pexels.com/photos/5025512/pexels-photo-5025512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></Form>
        <Footer></Footer>
    </>
  )
}

export default Contact