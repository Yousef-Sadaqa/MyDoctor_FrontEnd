import React, { Component, Fragment } from 'react'
import Switch from "react-switch";
import DateFnsUtils from '@date-io/date-fns';
import moment from 'moment'
import "./switch.css";

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker

} from '@material-ui/pickers';
class SwitchDate extends Component {
    state = {
        isWorkDay: false,
        From:moment().startOf('D'),
        to:moment().startOf('D'),
    }
    onChangeDate=(date, key)=>{
        this.setState({
            [key] : date
        })
    }
    componentDidMount(){
        console.log('componentDidMount', this.props.day)
        const {From, to, isWorkDay} = this.props.workingDay; 
        this.setState({
            From:From||moment().startOf('D'), 
            to:to||moment().startOf('D'), 
            isWorkDay
        },()=>console.log('state', this.state))
    }
    _renderDate = () => {
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <div style={{ display: 'flex' }}>

                    <KeyboardTimePicker

                        id="time-picker"

                        value={this.state.From}
                        onChange={(date) => this.onChangeDate(date, 'From')}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    />
                    <div 
                        style={{
                            alignSelf: 'center',
                            fontSize: 'medium',
                            marginRight:3,
                            marginLeft:3
                        }}>TO</div>
                    <KeyboardTimePicker

                        id="time-picker"

                        value={this.state.to}
                        onChange={(date) => this.onChangeDate(date, 'to')}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    />

                </div>
            </MuiPickersUtilsProvider>
        )
    }
    onChangeSwitch=(checked)=>{
        this.setState({isWorkDay:checked})

    }
    componentDidUpdate(prevProps, prevState){
        if(prevState !== this.state){
            this.props.onChange(this.state)
        }
    }
    render() {
        return (
            <Fragment>
                <Switch
                    checked={this.state.isWorkDay}
                    onChange={this.onChangeSwitch}
                    onColor="#04a9f5"
                    onHandleColor="#04a9f5"
                    handleDiameter={20}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                    height={20}
                    width={40}
                    className="react-switch"
                    id="material-switch"
                />
                
                <h6 className="span" > {this.props.day}</h6> {this.state.isWorkDay && this._renderDate()}
            </Fragment>
        )
    }
}
export default SwitchDate