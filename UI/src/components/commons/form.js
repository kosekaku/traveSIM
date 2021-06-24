import React, { Component } from 'react';
import Input from './input';

// reusable component, without return
class Form extends Component {
  state = {
    data: {},
    error: {}
  }
    // input validations- checking for empty inputs, password length
  validate = () =>{
    let errors = {};
    const { data } = this.state;
    const {email, password, ...rest} = data;
    if(email.length===0){
     errors = {errors: 'Email is not allowed to be empty'};
     this.setState({errors});
     return errors;
   }
    else if(password.length <= 5){
      errors = {errors: 'Short Password error'};
      this.setState({errors});
      return errors;
    }
    return errors;
  };

  handleSubmit = e => {
    e.preventDefault(); // prevent full page reloading
    const {errors} = this.validate();
    this.setState({error: errors || {}});
    if(errors) return console.log('Input validation error message:',errors);
    this.doSubmit(); // NO error, make server call
  };

  handleChange = ({currentTarget:input})=> {
    const data = {...this.state.data}
    data[input.name] = input.value;
    //validate input property
    const errors = {...this.state.errors};
    if(errors) errors[input.name] = errors.error;
    else delete errors[input.name];
    this.setState({data, errors});
  }

  //helper methods
  renderInput(name, label, type, placeHolder, cssStyle="noClassRef"){
    const { data, error } = this.state;    
    return(
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        placeholder={placeHolder}
        className = {cssStyle}
        onChange={this.handleChange}
        error={error[name]}
      />
    );
  };

  renderButton(label) {
    const btnStyles = {
      background: "#008CBA",
      border: "none",
      color: "white",
      padding: "10px 12px",
      "fontSize": "14px",
      cursor: "pointer",
    }
    return(
      <button className="site-button" style={btnStyles}>{label}</button>
    );
  };
};

export default Form;