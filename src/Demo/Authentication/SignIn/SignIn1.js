import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import { ValidationForm, TextInput , SelectGroup,withRouter  } from 'react-bootstrap4-form-validation';
import validator from 'validator'
import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import {Card} from 'react-bootstrap';
import { Link} from 'react-router-dom';
import axios from 'axios';
class SignUp1 extends React.Component {


    state={
       
        Email:"",
        password:"",
        v:''
    
       }
       handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit = (e, formData, inputs) => {
        e.preventDefault();
        const user={
            email:this.state.Email,
            password:this.state.password,
        }
       axios.post('http://localhost:8000/authAdmin/login',user).then((response)=>{
           const {data} = response;
           if(data.token){
            this.setState({Email:"",password:""});
               localStorage.setItem('token' ,data.token);
               this.props.history.push('/dashboard/default');
           }else{
               let errorMsg = data;
               console.log("Not Auth Login : ",errorMsg);
           }
       });
    
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
                        <Card>
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    <i className="feather icon-unlock auth-icon"/>
                                </div>
                                <h3 className="mb-4">Admin login</h3>
                                <ValidationForm onSubmit={this.handleSubmit} 
                                onErrorSubmit={this.handleErrorSubmit} >
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
                                    placeholder="Password"
                                />
                                </div>
                               
                                <button className="btn btn-primary shadow-2 mb-4">Login</button>
                                
                               
                                </ValidationForm>
                            </div>
                            
                        </Card>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default SignUp1;