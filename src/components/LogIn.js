import React from 'react'
import { useState } from 'react'
import { ScrollTop } from './ScrollTop';

function LogIn(props) {
  const [email,setEmail] = useState(); 
  const [pwd,setPwd] = useState(); 

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(email);
  }
  return (
    <>
      <ScrollTop></ScrollTop>
      <div class='row py-5 bg-light'>
        <div class='col-md-4'></div>
        <div class='col-md-3 ms-5 me-5'>
          <form class="form-signin text-center" onSubmit={handleSubmit}>
            <i class="fa-solid fa-truck-fast fa-2xl"></i>
            <h3 class="h4 mb-3 mt-3">Inicie sesión para ponerse en contacto</h3>
            <label for="inputEmail" class="sr-only">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="inputEmail" class="form-control mb-2" placeholder="Email" required autofocus />
            <label for="inputPassword" class="sr-only">Contraseña</label>
            <input value={pwd} onChange={(e) => setPwd(e.target.value)} type="password" id="inputPassword" class="form-control mb-2" placeholder="Contraseña" required />
            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Mantener conectado
              </label>
            </div>
            <button
              style={{ backgroundColor: '#6f42c1', color: 'white' }}
              class="btn btn-lg btn-block" type="submit">Ingresar</button>
            <br></br>
            <div class='mt-2'>
              <a href='#'>¿Olvidó su contraseña?</a>
            </div>
          <br></br>
          <div class='row'>
            <button
              style={{ backgroundColor: '#6f42c1', color: 'white' }}
              class="btn btn-lg btn-block mb-3" >Consultar Estado</button>
            <button
              style={{ backgroundColor: '#6f42c1', color: 'white' }}
              class="btn btn-lg btn-block" onClick={()=>props.onFormSwitch('signup')} >Crear Cuenta</button>
            <p class="mt-4 text-muted">&copy; Copyright 2022 - Multicourier</p>
          </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default LogIn