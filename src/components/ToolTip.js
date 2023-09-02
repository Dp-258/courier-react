import React, { useState } from 'react';
import './ToolTip.css'

function ToolTip(props) {
    const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className={props.mode === 'center' ? 'center--content info--icon--container' : 'info--icon--container'} >
      <i className="click--icon" onClick={()=>setShowTooltip(!showTooltip)}>
        <i className="fa-solid fa-circle-info fa-2x"></i>
        {showTooltip && (
            <div className="tooltip--container"> 
            <div className="tooltip--content">
                {props.description}
            </div>
            </div>
        )}
      </i>
    </div>
  );
}

export default ToolTip;
