import React,{useState} from 'react'
import './BoxesForm.css'
function BoxesForm(props) {
    const [length, setLength] = useState();
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();

    const handleChange = () => {
        const data = {
          length: length,
          width: width,
          height: height
        };
        props.onChange(data);
      };
      

    return (
    <div className="form-group mb-3 box-container-form align-items-center form-data">
      <label className="pb-1 me-2">Caja {props.number + 1}</label>
      <input
        type="number"
        min={'1'}
        className="form-control pb-1 me-3"
        placeholder="LARGO"
        value={length}
        onChange={(e) => setLength(e.target.value)}
        onBlur={handleChange}
      />
      <input
        type="number"
        min={'1'}
        className="form-control pb-1 me-3"
        placeholder="ANCHO"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
        onBlur={handleChange}
      />
      <input
        type="number"
        min={'1'}
        className="form-control pb-1 me-3"
        placeholder="ALTO"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        onBlur={handleChange}
      />
    </div>
  );
}

export default BoxesForm