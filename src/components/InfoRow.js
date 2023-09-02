import React from 'react'
import './InfoRow.css'

function InfoRow({ matriz, dir, tel, cel, email }) {
    return (
        <div class="row info--container">
            <div class="col-md-2 info--col">
                <h3>Matriz</h3>
                <p className='.info--matriz'
                style={{color:'black', fontSize:'18px'}}>{matriz}</p>
            </div>
            <div class="col-md-3 info--col">
                <h3>Dirección</h3>
                <p>{dir}</p>
            </div>
            <div class="col-md-2 info--col">
                <h3>Teléfono</h3>
                <p>{tel}</p>
            </div>
            <div class="col-md-2 info--col">
                <h3>Celular</h3>
                <p>{cel}</p>
            </div>
            <div class="col-md-2 info--col">
                <h3>Email</h3>
                <p style={{color:`#D03232`}}>{email}</p>
            </div>
            <hr></hr>
        </div>
    )
}

export default InfoRow