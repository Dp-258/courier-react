import React, { useState } from 'react'
import './SimulatorForm.css'
import ToolTip from './ToolTip'
import BoxesForm from './BoxesForm';
import { ScrollTop } from './ScrollTop';
function SimulatorForm() {
    {/*Variables for data 1 fase*/ }
    const [peso, setPeso] = useState(1);
    const [fob, setFob] = useState(3);
    {/*Variables for data 2 fase */ }
    const [number, setNumber] = useState(1);
    const [boxData, setBoxData] = useState([]);
    {/*Variables for data 3 fase*/ }
    const [freight, setFreight] = useState(0);
    const [fuel, setFuel] = useState(0);
    const [total, setTotal] = useState(0);
    {/*Variables for data 4 fase*/ }
    const [identificacion, setIdentificacion] = useState();
    const [isValidIdentificacion, setIsValidIdentificacion] = useState(true);
    const [social, setSocial] = useState();
    const [email, setEmail] = useState();
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [phone, setPhone] = useState();
    const [isValidPhone, setIsValidPhone] = useState(true);
    const [ok, setOk] = useState(false);
    {/* Variables for the navigation between the forms */ }
    const [btnData, setBtnData] = useState(0);


    const handleBoxes = (value) => {
        const parsedValue = value !== '' ? parseInt(value, 10) : null;
        if (parsedValue === null || (!isNaN(parsedValue) && parsedValue >= 1 && parsedValue <= 9)) {
            setNumber(parsedValue);
            handleBoxDataDelete(parsedValue);
            console.log(boxData);
        }
    }
    const handleBoxDataChange = (index, data) => {
        const newData = [...boxData];
        newData[index] = data;
        setBoxData(newData);
    };
    const handleBoxDataDelete = (index) => {
        const newData = [...boxData];
        newData.splice(index);
        setBoxData(newData);
    };
    const handleAllBoxesForm = () => {
        if (number < 1) {
            alert('Coloque al menos una caja');
            return null;
        }
        if (boxData.length == 0) {
            alert(`Datos de la caja 1 están incompletos`);
            return null;
        }
        for (let i = 0; i < boxData.length; i++) {
            const box = boxData[i];
            if (box.length !== null && box.length !== "" && box.length != 0 && box.length != undefined &&
                box.width !== null && box.width !== "" && box.width != 0 && box.width != undefined
                && box.height !== "" && box.height !== null && box.height != 0 && box.height != undefined) {
                console.log(`Datos del BoxForm ${i + 1} están completos:`, box);
            } else {
                alert(`Datos de la caja ${i + 1} están incompletos`);
                console.log(boxData);
                return null;
            }
        }
        console.log(boxData);
        setBtnData(btnData + 1);
    };
    const handleCheckboxChange = (e) => {
        setOk(e.target.checked);
    };
    const handleEmailChange = (e) => {
        const inputValue = e.target.value;
        setEmail(inputValue);

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        const isValid = emailRegex.test(inputValue);
        setIsValidEmail(isValid);
    };
    const handleIdentificacionChange = (e) => {
        const inputValue = e.target.value;
        setIdentificacion(inputValue);

        const identificacionRegex = /^(\d{10}|\d{13})$/;

        const isValid = identificacionRegex.test(inputValue);
        setIsValidIdentificacion(isValid);
    };
    const handlePhoneChange = (e) => {
        const inputValue = e.target.value;
        setPhone(inputValue);

        const phoneRegex = /^(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;

        const isValid = phoneRegex.test(inputValue);
        setIsValidPhone(isValid);
    };
    const handleCustomerData = () => {
        if (identificacion == undefined || identificacion == '' || isValidIdentificacion == false) {
            alert('Por favor complete correctamente el campo de RUC/CI')
            return null;
        }
        {/*if (social == undefined || social == '') {
            alert('Por favor complete correctamente el campo de razón social')
            return null;
        } */}
        if (email == undefined || email == '' || isValidEmail == false) {
            alert('Por favor complete correctamente el campo de email o correo electrónico')
            return null;
        }
        if (phone == undefined || isValidPhone == false || phone == '') {
            alert('Por favor complete correctamente el campo de número de celular')
            return null;
        }
        if (ok == false) {
            alert('Es necesario confirmar los terminos y condiciones de la página')
            return null;
        }
        calculateImportationCost();
        setBtnData(btnData + 1);
    }
    const calculateImportationCost = () => {
        for (let i = 0; i < boxData.length; i++) {
            const box = boxData[i];
        }
    }
    return (
        <>
            <ScrollTop></ScrollTop>
            <div className='container-simulator'>
                <div >
                    <div className='fixed-header '>
                        <h1 className='fixed-header-up'>SÉ UN LÍDER EN</h1>
                        <h1 className='fixed-header-down'>IMPORTACIONES COURIER</h1>
                    </div>
                    <div className='simulator-desc '>
                        <div className='border border-dark rounded text-center px-5 py-3'>
                            Bienvenido al simulador de importaciones courier, en la
                            parte derecha puedes encontrar el cotizador que te ayudará
                            a calcular y estimar el costo de enviar paquetes, mercancías
                            o documentos a través de nuestro servicio.
                            Este simulador esta preparado unicamente para el courier de
                            categoria C: 1-220LB de peso.
                        </div>
                    </div>
                </div>
                <div className='data-simulator'>
                    <div className='package-data'>
                        {/*<div className='package-header'>
                        <Button className='btns' buttonSize='btn--medium' buttonStyle='btn--yellow'>
                            Regresar al inicio
                        </Button>
                    </div>*/}
                        <h1 className='package-header'>Datos del paquete</h1>
                        <br></br>
                        <div className='border border-dark rounded text-center px-5 py-3 text-end'
                            style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
                            <form>
                                {/*First fase */}
                                <div className={btnData === 0 ? 'first-form ' : 'd-none'} >
                                    <h3 class='mb-3'>Datos generales</h3>
                                    <div className='mb-3'>
                                        <ToolTip description='Completa los siguientes datos de tus paquetes para continuar '></ToolTip>
                                    </div>
                                    <div class="form-group mb-3 d-flex align-items-center form-data ">
                                        <label class='pb-2' >Peso (LBS):</label>
                                        <input type="number" min={'1'} max={'220'}
                                            value={peso} onChange={(e) => setPeso(e.target.value)}
                                            class="form-control pb-2" placeholder="" />
                                    </div>
                                    <div class="form-group mb-3 d-flex align-items-center form-data">
                                        <label class='pb-2' >Costo (FOB):</label>
                                        <input type="number" min={'1'}
                                            value={fob} onChange={(e) => setFob(e.target.value)}
                                            class="form-control pb-2" placeholder="" />
                                    </div>


                                </div>

                                {/*Second fase */}
                                <div className={btnData === 1 ? 'second-form ' : 'd-none'} >
                                    <h3>Calcular volumen</h3>
                                    <div class="form-group my-3 d-flex align-items-center form-data">
                                        <label class='pb-2'>Número de cajas (Max 9):</label>
                                        <input type="number" min={'1'} max={'9'}
                                            value={number !== null ? number : ''}
                                            onChange={(e) => handleBoxes(e.target.value)}
                                            class="form-control pb-2" placeholder="" />
                                    </div>
                                    <div className={number === 0 ? 'd-none' : number === null ? 'd-none' : 'd-block'} >
                                        <p className='secondForm--desc'>
                                            Ingrese las medidas en pulgadas de cada caja
                                        </p>
                                        {Array.from({ length: number }).map((_, index) => (
                                            <BoxesForm
                                                key={index}
                                                number={index}
                                                onChange={(data) => handleBoxDataChange(index, data)} />

                                        ))}

                                        {/*<pre>{JSON.stringify(boxData, null, 2)}</pre>
                                        <button type='button'
                                            className='btn-calculate-simulator'
                                            onClick={() => handleAllBoxesForm()}
                                        >Calcular</button>*/}
                                        {/*Si es que al pulsar el botón, todos los Boxes forms tienen contenido, entonces mostrar el calcular */}
                                        <br></br>
                                        <div className='btn-container'>
                                            <button type="button"
                                                class={btnData == 1 ? 'btn-return-simulator ' : 'd-none'}
                                                onClick={() => setBtnData(btnData - 1)}>
                                                <i class="fa-solid fa-arrow-left fa-fw pe-4 bounce-left"></i>
                                                <span className="text-to-hide">Volver</span>
                                            </button>
                                            <button class={btnData == 1 ? 'btn-next-simulator ' : 'd-none'}
                                                type="button"
                                                onClick={() => handleAllBoxesForm()}>
                                                <span className="text-to-hide">{btnData >= 2 ? 'Cotizar' : 'Seguir'}</span>
                                                <i class="fa-solid fa-arrow-right fa-fw ps-3 bounce-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/*Third fase */}
                                <div className={btnData == 2 ? 'third-form ' : 'd-none'}>
                                    <h3>Datos de contacto</h3>
                                    <div>
                                        <ToolTip description='Para ver los resultados de nuestro cotizador, por favor completa los datos que te presentamos a continuación:'
                                            mode='center' active='true' ></ToolTip>
                                    </div>
                                    <br></br>
                                    <div class="form-group mb-3 d-flex align-items-center form-data">
                                        <label class='pb-2' >RUC/CI</label>
                                        <input
                                            type="text"
                                            value={identificacion}
                                            onChange={handleIdentificacionChange}
                                            className={`form-control pb-2 ${isValidIdentificacion ? '' : 'is--invalid'}`}
                                            placeholder="Cédula o RUC"
                                        />
                                    </div>
                                    <div class="form-group mb-3 d-flex align-items-center form-data">
                                        <label class='pb-2' >Razon Social</label>
                                        <input
                                            value={social} onChange={(e) => setSocial(e.target.value)}
                                            type="text" class="form-control pb-2" placeholder="" />
                                    </div>
                                    <div class="form-group mb-3 d-flex align-items-center form-data">
                                        <label class='pb-2' >Correo electrónico</label>
                                        <input
                                            type="text"
                                            value={email}
                                            onChange={handleEmailChange}
                                            className={`form-control pb-2 ${isValidEmail ? '' : 'is--invalid'}`}
                                            placeholder="Correo electrónico"
                                        />
                                    </div>
                                    <div class="form-group mb-3 d-flex align-items-center form-data">
                                        <label class='pb-2' >Número Celular</label>
                                        <input
                                            type="text"
                                            value={phone}
                                            onChange={handlePhoneChange}
                                            className={`form-control pb-2 ${isValidPhone ? '' : 'is--invalid'}`}
                                            placeholder="Ex: 0959452354"
                                        />
                                    </div>
                                    <div class="checkbox mb-3 text-start">
                                        <label >
                                            <input
                                                checked={ok}
                                                type="checkbox"
                                                onChange={handleCheckboxChange}
                                            /> Al presionar aquí aceptas los terminos y condiciones de la página
                                        </label>
                                    </div>
                                    <br></br>
                                        <div className='btn-container'>
                                            <button type="button"
                                                class={btnData == 2 ? 'btn-return-simulator ' : 'd-none'}
                                                onClick={() => setBtnData(btnData - 1)}>
                                                <i class="fa-solid fa-arrow-left fa-fw pe-4 bounce-left"></i>
                                                <span className="text-to-hide">Volver</span>
                                            </button>
                                            <button class={btnData == 2 ? 'btn-next-simulator ' : 'd-none'}
                                                type="button"
                                                onClick={() => handleCustomerData()}>
                                                <span className="text-to-hide">{btnData >= 2 ? 'Cotizar' : 'Seguir'}</span>
                                                <i class="fa-solid fa-arrow-right fa-fw ps-3 bounce-right"></i>
                                            </button>

                                        </div>
                                </div>
                                {/*Forth fase */}
                                <div className={btnData >= 3 ? 'forth-form ' : 'd-none'}>
                                    <h3>Costos de importación</h3>
                                    <div class="form-group mb-3 d-flex align-items-center form-data ">
                                        <label class='pb-2' >Servicio Agente</label>
                                        <input type="text" disabled
                                            value={'56,00'}
                                            class="form-control pb-2" placeholder="" />
                                    </div>
                                    <div class="form-group mb-3 d-flex align-items-center form-data">
                                        <label class='pb-2' >Security</label>
                                        <input disabled
                                            value={'10,00'}
                                            type="text" class="form-control pb-2" placeholder="" />
                                    </div>
                                    <div class="form-group mb-3 d-flex align-items-center form-data ">
                                        <label class='pb-2' >Flete Internacional</label>
                                        <input type="text" disabled
                                            value={freight} onChange={(e) => setFreight(e.target.value)}
                                            class="form-control pb-2" placeholder="" />
                                    </div>
                                    <div class="form-group mb-3 d-flex align-items-center form-data">
                                        <label class='pb-2' >Fuel</label>
                                        <input disabled
                                            value={fuel} onChange={(e) => setFuel(e.target.value)}
                                            type="text" class="form-control pb-2" placeholder="" />
                                    </div>
                                    <div class="form-group mb-3 d-flex align-items-center form-data">
                                        <label class='pb-2' >TOTAL</label>
                                        <input disabled
                                            value={total} onChange={(e) => setTotal(e.target.value)}
                                            type="text" class="form-control pb-2" placeholder="" />
                                    </div>
                                    <div className='mt-3'>
                                        <ToolTip description='Los valores referenciados en el simulador son referenciales. Puede variar dependiendo del peso, valor y políticas de importación vigentes al momento de la compra.'></ToolTip>
                                    </div>
                                </div>
                                <br></br>
                                <div className={btnData == 1 ? 'd-none' : btnData == 2 ? 'd-none' : ''}>
                                    <button type="button"
                                        class={btnData === 0 ? 'btn-return-simulator d-none' : 'btn-return-simulator'}
                                        onClick={() => setBtnData(btnData - 1)}>
                                        <i class="fa-solid fa-arrow-left fa-fw bounce-left"></i>
                                                <span className="text-to-hide">Volver</span>
                                    </button>
                                    <button class={btnData > 2 ? 'btn-next-simulator d-none' : 'btn-next-simulator'} type='button'
                                        onClick={() => setBtnData(btnData + 1)}>
                                        <span className="text-to-hide">{btnData <= 1 ? 'Seguir' : 'Cotizar'}</span>
                                                <i class="fa-solid fa-arrow-right fa-fw bounce-right"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SimulatorForm