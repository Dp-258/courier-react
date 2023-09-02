import React from 'react'
import './AboutUs.css'
import DataCards from './DataCards'
function AboutUs() {
    return (
        <>
            <div className='about--container'>
                <div className='about--box main--box'>
                    <div class="sub--box">
                        <DataCards
                            title="Misión"
                            subtitle="Crear y mantener una relación comercial sólida y duradera con nuestros clientes, ofreciendo un Servicio Courier confiable, seguro, rápido, con excelentes tarifas y sustentados en un Servicio de Atención al Cliente de calidad superior."
                            bg=""></DataCards>
                    </div>
                    <div class="sub--box">
                        <DataCards
                            title="Visión"
                            subtitle="Convertirnos en una Empresa de Servicio Courier líder en el mercado, brindando soluciones logísticas de carga Courier a nuestros clientes, abriendo nuestras operaciones en diferentes países del mundo."
                            bg=""></DataCards>
                    </div>
                    <div class="sub--box">
                        <div className='box--text'>
                            <h2 >Valores</h2>
                            <hr></hr>
                            <div >
                                <ul>
                                    <li>Confiabilidad</li>
                                    <li>Responsabilidad</li>
                                    <li>Seguridad</li>
                                    <li>Rapidez</li>
                                    <li>Vocación de Servicio al Cliente</li>
                                    <li>Trato personalizado</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='about--box description--box'>
                    <DataCards
                        title="Multicourier"
                        subtitle="Estamos comprometidos con ser el proveedor líder de soluciones logísticas para nuestros clientes. Implementando y mejorando continuamente nuestras políticas de calidad."
                        bg="black"></DataCards>
                    <img src='https://multicourier.com.ec/web/wp-content/uploads/2020/02/p-23.png'></img>
                </div>
            </div>
        </>
    )
}

export default AboutUs