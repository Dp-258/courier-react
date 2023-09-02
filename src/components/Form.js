import React from 'react'
import './Form.css'
function form(props) {
    return (
        <>
            <div class='row mt-3 py-5 mx-0'
                style={{
                    backgroundImage: `url('${props.src}')`
                }}>
                <div class='col-md-3'></div>
                <div className='col-md-6  py-5 border border-dark rounded'
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
                    <h1 class='mb-4'>Formulario de contacto</h1>
                    <div class='row'>
                        <div class='col-md-2'></div>
                        <form class='col-md-8'>
                            <div class="form-group mb-3">
                                <label class='pb-2' for="exampleInputEmail1">Nombre completo</label>
                                <input type="text" class="form-control pb-2" id="name" placeholder="Ingresa aqui tu nombre" />
                            </div>
                            <div class="form-group mb-3">
                                <label class='pb-2' for="exampleInputEmail1">Correo electrónico</label>
                                <input type="email" class="form-control pb-2" id="email" aria-describedby="emailHelp" placeholder="example@gmail.com" />
                            </div>
                            <div class="form-group mb-3">
                                <label class='pb-2'>Número celular</label>
                                <input type="text" class="form-control pb-2" id="celular" placeholder="" />
                            </div>
                            <div class="form-group mb-3">
                                <label class='pb-2'>Asunto</label>
                                <input
                                    style={{ height: '100px' }}
                                    type="text" class="form-control pb-2" id="asunto" placeholder="" />
                            </div>
                            <br></br>
                            <div className='send--btn'>
                                <button type="button" class="btn btn-primary">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class='col-md-4'></div>
            </div>

        </>
    )
}

//<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
export default form