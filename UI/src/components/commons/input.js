import React from 'react';

const Input = ({ name, label, error, ...rest }) => {
  return(
    <div className="form-group">
        <label className="font-weight-700" htmlFor={name}>{label} </label>
        <input 
          {...rest}
          name={name}
          id={name}
        />
        {error && <div style={{color:"red"}}>{error}</div>} {/*conditional rendering*/}
    </div>
  );

};

export default Input;