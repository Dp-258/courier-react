import React from 'react'
import './DataCards.css'
function DataCards(props) {
    return (
        <>
            <div className={`cards--container ${props.bg === 'black' ? 'black-bg' : ''}`}>
                <h2 className={`${props.bg === 'black' ? 'red-title' : ''}`}>{props.title}</h2>
                <hr></hr>
                <div className='cards--info'>
                    <h5 className={`cards--text ${props.bg === 'black' ? 'white-text' : ''}`}>{props.subtitle}</h5>
                </div>
            </div>
        </>
    )
}

export default DataCards