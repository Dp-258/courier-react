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
                            subtitle="Nuestra misión es establecer y mantener relaciones comerciales sólidas y duraderas con nuestros clientes, brindando un servicio Courier confiable, seguro y rápido, respaldado por tarifas competitivas y un servicio de atención al cliente de calidad superior"
                            bg=""></DataCards>
                    </div>
                    <div class="sub--box">
                        <DataCards
                            title="Visión"
                            subtitle="Nuestra visión es transformarnos en la principal empresa de servicios Courier en Ecuador y más allá. Nos comprometemos a ofrecer soluciones logísticas de carga Courier de vanguardia a nuestros clientes, impulsando su éxito y satisfacción. A medida que crecemos, aspiramos a expandir nuestras operaciones a nivel internacional, conectando a Ecuador con el mundo y brindando un servicio de clase mundial en cada paso del camino."
                            bg=""></DataCards>
                    </div>
                    <div class="sub--box">
                        <div className='box--text'>
                            <h2 >Valores</h2>
                            <hr></hr>
                            <div >
                                <ul>
                                    <li>Confiabilidad: Aseguramos que los envíos de nuestros clientes lleguen a tiempo y en perfectas condiciones.</li>
                                    <li>Responsabilidad: Cumplimos con nuestros deberes éticos y profesionales en todo momento.</li>
                                    <li>Seguridad: Implementamos las medidas más rigurosas para garantizar que sus paquetes lleguen de manera segura a su destino.</li>
                                    <li>Rapidez: Entregamos sus envíos de manera rápida y eficiente.</li>
                                    <li>Vocación de Servicio al Cliente: Estamos comprometidos a comprender y satisfacer las necesidades de nuestros clientes de manera proactiva y excepcional.</li>
                                    <li>Colaboración: Fomentamos la colaboración interna y externa, trabajando en conjunto con nuestros empleados, socios y clientes para alcanzar el éxito compartido.</li>
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