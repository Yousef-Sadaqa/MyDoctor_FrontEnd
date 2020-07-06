import React from 'react';
import {NavLink} from 'react-router-dom';
import { ValidationForm, TextInput , SelectGroup  } from 'react-bootstrap4-form-validation';
import validator from 'validator'
import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import axios from 'axios';

class SignUp1 extends React.Component {
   state={
    Username:"",
    Email:"",
    password:"",
    Repassword:"",
    sup:1013
   }
   handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleSubmit = (e, formData, inputs) => {
    e.preventDefault();
    const user=   {
        Username:this.state.Username,
        Email:this.state.Email,
        password:this.state.password,
        sup:this.state.sup
    }
   axios.post('http://localhost:8000/auth/signup',user).then(res => console.log(res));

}
handleErrorSubmit = (e, formData, errorInputs) => {
    console.error(errorInputs)
}

matchPassword = (value) => {
    return value && value === this.state.password;   
}

    render () {
        return(
            <Aux>
                <Breadcrumb/>
                <div className="auth-wrapper">
                    <div className="auth-content">
                        <div className="auth-bg">
                            <span className="r"/>
                            <span className="r s"/>
                            <span className="r s"/>
                            <span className="r"/>
                        </div>
                        <div className="card">
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    <i className="feather icon-user-plus auth-icon"/>
                                </div>
                                <ValidationForm onSubmit={this.handleSubmit} 
                                onErrorSubmit={this.handleErrorSubmit} >  
                                <h3 className="mb-4">Admin Sign up</h3>
                                <div className="input-group mb-3">
                                     <TextInput name="Username" id="Username" required
                                            value={this.state.Username}
                                            onChange={this.handleChange}
                                            placeholder="Username"
                                        />
                                </div>
                                <div className="input-group mb-3">
                                <TextInput name="Email" id="Email" type="Email" 
                                            validator={validator.isEmail} 
                                            errorMessage={{validator:"Please enter a valid Email"}}
                                            value={this.state.Email}
                                            onChange={this.handleChange}
                                             placeholder="Email"/>
                                </div>
                                <div className="input-group mb-4">
                                <TextInput name="password" id="password" type="password" required 
                                    pattern="(?=.*[A-Z]).{6,}"
                                    errorMessage={{required:"Password is required", pattern: "Password should be at least 6 characters and contains at least one upper case letter"}}
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                placeholder="password"/>
                                </div>
                                <div className="input-group mb-4">
                                <TextInput name="confirmPassword" id="confirmPassword" type="password" required 
                                    validator={this.matchPassword}
                                    errorMessage={{required:"Confirm password is required", validator: "Password does not match"}}
                                    value={this.state.confirmPassword}
                                    onChange={this.handleChange}
                                    placeholder="Confirm password"
                                />
                                </div>
                                <div className="input-group mb-4">
                                <TextInput name="age" id="age" type="number" 
                                            validator={validator.isNumeric} 
                                            errorMessage={{validator:"Please enter a valid age"}}
                                            value={this.state.sup}
                                            onChange={this.handleChange}
                                            placeholder='input the sup'
                                            />
                                                </div>
                                <button className="btn btn-primary shadow-2 mb-4">Sign up</button>
                                <p className="mb-0 text-muted">Allready have an account? <NavLink to="/SginIn">Login</NavLink></p>
                            </ValidationForm>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </Aux>
        );
    }
}

export default SignUp1;