import React, {Component} from 'react';
import {Redirect}from 'react-router-dom'
export default class Log extends Component{
  
  
    render(){
        localStorage.clear('token');
       
        this.props.history.push("/");
        return null
    
    }
    
}
