import React from 'react';

function Alerts(props) {
  const capitalize =(word)=>{
   const lower = word.toLowerCase()
   return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    <div>
      {props.alert && (
        <div className={`alert alert-${props.alert.type} p-2 m-0 `} role="alert">
         {capitalize(props.alert.type)} : {props.alert.message}
        </div>
      )}
    </div>
  );
}

export default Alerts;
