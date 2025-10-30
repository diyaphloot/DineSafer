// Modal Component
import React from 'react';
import './modal.css';

const FoodCode = require('./foodcode.json');

function Modal({ data, onClose }) {
  console.log('dat',data.Violations);
  //removing newlines (\n) from the item list
  const new_desc= data.Violations.replace(/[\n\r\\"]/g, '');
  //convert list to array splitted at comma
  const desc_arr = JSON.stringify(new_desc).replace(/[\\"]/g,'').split(",");
  //translating food code to description
  const code_desc = desc_arr.map(code => { 
    console.log('fc',FoodCode[code]);
    let desc = data.Violations !== 'None' ? `${code} - ${FoodCode[code]}` : `${code}`;
    return(desc);
  });

  return (
    <div className="modal-overlay" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="modal-content" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px', minWidth: '300px' }}>
        <div style={{height: '5rem', padding:0, textAlign: 'center'}}>
          <h4 style={{margin:0}}>{data.Establishment}</h4>
          <p style={{marginTop:0}}>{data.Address}</p>
        </div>  
        <h4 style={{margin:0, textAlign:'center'}}>Violations as on {data.Date}</h4>
        <hr/>
        <ul>
          {code_desc.map((item, index) => (
             <li style={{fontSize: '13px'}}><a href={'https://www.google.com/search?q='+item.slice(0,8)+'+food+code&oq='+ item.slice(0,8)} target='_blank'>{item}</a></li>
          ))}
        </ul>
        <button className="modal-close-button" style={{padding: "3px 10px", fontSize: '0.8rem', display: 'block', margin: '0 auto'}} onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;