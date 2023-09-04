import React from 'react'
import './Products.css'
function Products({ title, description,topline, img, imgStart, bg1, descLbl1, bg2, descLbl2, bg3, descLbl3, }) {
    return (
        <>
            <div className='product-section'> 
                <div className='product-container'>
                    <div className='rowere product-row'
                    style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'rowere'}}
                    >
                        <div className='col mb-0'>
                            <div className='text-wrapper'>
                                <h1 className='heading'>{title}</h1>
                                <div className='topline'>{topline}</div>
                                <hr></hr>
                                <p className='product-subtitle'>{description}</p>
                                <div className={`description-label ${bg1 === 'black' ? 'black-bg' : bg1 === 'gray' ? 'gray-bg': bg1 === 'red' ? 'red-bg': 'd-none'}`}>{descLbl1}</div>
                                <div className={`description-label ${bg2 === 'black' ? 'black-bg' : bg2 === 'gray' ? 'gray-bg': bg2 === 'red' ? 'red-bg': 'd-none'}`}>{descLbl2}</div>
                                <div className={`description-label ${bg3 === 'black' ? 'black-bg' : bg3 === 'gray' ? 'gray-bg': bg3 === 'red' ? 'red-bg': 'd-none'}`}>{descLbl3}</div>
                            </div>
                        </div>
                        <div className='col mt-0'>
                            <div className='product-img-wrapper'>
                                <img src={img} className='product-img'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Products