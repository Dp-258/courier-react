    import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
    
    function Cards() {
      return (
        <div className='cards'>
            <h1 >Servicios</h1>
            <hr></hr>
            <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src="https://multicourier.com.ec/web/wp-content/uploads/2016/06/carga-general.jpg"
                    text="Carga General Courier, hasta 100 KG de peso
                    y FOB US$5000"
                    title="Categoría C"
                    label=""
                    path='/services'
                    ></CardItem>
                    <CardItem
                    src="https://multicourier.com.ec/web/wp-content/uploads/2016/06/4x4.jpg"
                    text="Paquetería 4×4, hasta 4 KG de peso
                    y FOB US$400"
                    title="Categoría B"
                    label=""
                    path='/services'
                    ></CardItem>
                    <CardItem
                    src="https://multicourier.com.ec/web/wp-content/uploads/2020/02/avion.jpg"
                    text="Importación de Teléfonos Celulares
                    para uso personal"
                    title="Categoría C"
                    label=""
                    path='/services'
                    ></CardItem>
                </ul>
            </div>
            </div>
        </div>
      )
    }
    
    export default Cards