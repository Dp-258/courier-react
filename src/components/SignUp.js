import React, { useState } from 'react'
import './SignUp.css'
import { ScrollTop } from './ScrollTop';

function SignUp(props) {
  //States fo the data
  const [idtype,setType] = useState();


  //States for the inputs ¬ divs
  const [formData, setFormData] = useState(false); //True to show all data
  const [accountType, setAcountType] = useState('personal');
  const [rs, setRs] = useState(); //Razon social
  const [name, setName] = useState(); 
  const [nit, setNit] = useState(); 
  const [email, setEmail] = useState(); 
  const [email2, setEmail2] = useState(); 
  const [pwd, setPwd] = useState(); 
  const [pwdF, setPwdF] = useState(); 
  const [country, setCountry] = useState(); 
  const [direccion, setDireccion] = useState(); 
  const [postal, setPostal] = useState(); 
  const [celular, setCelular] = useState(); 
  const [gender, setGender] = useState(); 
  const [birth, setBirth] = useState(); 
  const [ok, setOk] = useState(); //Checkbox
  const hadleData = (e) => {
    setFormData(true);
    changeToEnterprise(e.target.value);
    setAcountType(e.target.value);
  }
  const changeToEnterprise = (value) => {
    setAcountType(value);
    if (value == 'empresarial') {
      setRs(true);
    } else setRs(false);
  }

  return (
    <>
    <ScrollTop></ScrollTop>
      <div class='row py-5 bg-light'>
        <div class='col-md-2 '></div>
        <div class='col-md-7 ms-5 me-5 bg-white pt-3 pb-3 signin-form'
          style={{ borderTop: '4px solid #17a2b8', borderRadius: '8px' }} >
          <form class="form-signin text-center mx-5">
            <div className="d-flex align-items-center justify-content-center">
              <i class="fa-solid fa-hands-clapping fa-2xl" style={{ color: '#f1bf00' }}></i>
              <h3 class="h3 mb-3 mt-3 ms-2">¡Registrate!</h3>
            </div>
            <h5 style={{ color: 'gray' }}>* Campos requeridos</h5>

            <div className='row'>
              <div class="select-container my-2">
                <span class="select-label">Tipo de cuenta *</span>
                <select class="form-select" onChange={(e) => hadleData(e)}>
                  <option class="option_selected" value="" disabled selected> Tipo de Cuenta</option>
                  <option value="personal">Personal</option>
                  <option value="empresarial">Empresarial</option>
                </select>
              </div>
            </div>
            <div id='data' className={formData ? '' : 'd-none'}>
              <div className='row'>
                <div class="select-container col-md-6 mt-3 " className={accountType === 'empresarial' ? 'select-container col-md-6 mt-3 d-none' : 'select-container col-md-6 mt-3 d-block'}>
                  <span class="select-label">Tipo de identificación</span>
                  <select id="idType" class="form-select" >
                    <option selected disabled
                    value={idtype} onChange={(e) => setType(e.target.value)}> Tipo de Identificación</option>
                    <option value="cedulaEC">Cédula ecuatoriana</option>
                    <option value="cedulaEX">Cédula extranjera</option>
                    <option value="pasaporte">Pasaporte</option>
                    <option value="licencia">Licencia de conducción</option>
                    <option value="tax">Tax ID (SOLO USA)</option>
                    <option value="state">State ID (SOLO USA)</option>
                    <option value="ruc">RUC</option>
                  </select>
                </div>
                <input type="text" id="nit" class="input-middle col-md-6"
                  value={nit} onChange={(e) => setNit(e.target.value)}
                  className={accountType === 'empresarial' ? 'input-middle col-md-6 ms-3' : 'input-middle col-md-6'}
                  placeholder="NIT o número de identificación" />
                <div className={accountType === 'empresarial' ? 'ps-2 col-md-6' : 'd-none'}>
                  <input 
                  value={rs} onChange={(e) => setRs(e.target.value)}
                  type="text" id="social" name='social' class="input-full ms-0 ps-2" placeholder="Razón social *" required={rs} />
                </div>
              </div>
              <div className='row'>
                <input 
                value={name} onChange={(e) => setName(e.target.value)}
                type="text" id="name" class="input-full col-md-6" placeholder="Nombres completos *" required />
              </div>
              <div className='row'>
                <input value={email} onChange={(e) => setEmail(e.target.value)}
                type="text" id="email" class="input-50 col-md-6" placeholder="Correo electrónico *" required />
                <input 
                value={email2} onChange={(e) => setEmail2(e.target.value)}
                type="text" id="email2" class="input-50 col-md-6" placeholder="Correo alterno" />
              </div>
              <div className='row'>
                <input value={pwd} onChange={(e) => setPwd(e.target.value)}
                type="password" id="pwd" class="input-50 col-md-6" placeholder="Contraseña *" required />
                <input value={pwdF} onChange={(e) => setPwdF(e.target.value)}
                type="password" id="pwdF" class="input-50 col-md-6" placeholder="Confirme su contraseña *" required />
              </div>
              <div className='row'>
                <div class="select-container col-md-6 mt-3 ">
                  <span class="select-label">País</span>
                  <select 
                  value={country} onChange={(e) => setCountry(e.target.value)}
                  class="form-select" required>
                    <option value="" selected disabled> Seleccionar país *</option>
                    <option value="cuba">Cuba</option>
                    <option value="ecuador">Ecuador</option>
                    <option value="usa">Estados Unidos</option>

                  </select>
                </div>
                <input 
                value={direccion} onChange={(e) => setDireccion(e.target.value)}
                type="text" id="direccion" class="input-middle col-md-6" placeholder="Dirección *" required />
              </div>
              <div className='row'>
                <input 
                value={postal} onChange={(e) => setPostal(e.target.value)}
                type="text" id="postal" class="input-50 col-md-6" placeholder="Código postal" />
                <input 
                value={celular} onChange={(e) => setCelular(e.target.value)}
                type="text" id="celular" class="input-50" placeholder="Teléfono celular *" required />
              </div>
              <div className='row'>
                <div class="select-container col-md-6 mt-3" className={accountType === 'empresarial' ? 'select-container col-md-6 mt-3 d-none' : 'select-container col-md-6 mt-3 d-block'} >
                  <span class="select-label">Género</span>
                  <select
                   value={gender} onChange={(e) => setGender(e.target.value)}
                   class="form-select">
                    <option selected value="" disabled> Género</option>
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div class='select-container-middle' className={accountType === 'empresarial' ? 'select-container-middle ms-2' : 'select-container-middle ms-0'}>
                  <span class="select-label-right">Fecha de nacimiento</span>
                  <input
                  value={birth} onChange={(e) => setBirth(e.target.value)}
                  type='date' className='input-date'></input>
                </div>
              </div>
              <br></br>
              <div class="checkbox mb-3 text-start">
                <label>
                  <input
                  value={ok} onChange={(e) => setOk(e.target.value)}
                  type="checkbox" /> Al aplastar aquí acepto terminos y condiciones de la página
                </label>
              </div>
              <button
                class="btn btn-lg btn-block btn-signup" type="submit">Crear cuenta
                <i class="fa-regular fa-paper-plane fa-fw ps-2"></i>
              </button>
              <button
                class="btn btn-lg btn-block btn-signup" type="submit" onClick={()=>props.onFormSwitch('login')}>
                  ¿Ya tienes una cuenta?
                <i class="fa-regular fa-user fa-fw ps-2"></i>
              </button>
            </div>
          </form>
          <br></br>
        </div>
      </div>
    </>
  )
}

export default SignUp