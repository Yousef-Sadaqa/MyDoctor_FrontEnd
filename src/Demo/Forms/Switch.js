import React, { Component } from "react";
import Switch from "react-switch";
import "./switch.css";
import { Row, Col, Button } from "react-bootstrap";
import TimePickerSun from "./timeallday/TimeSun";
import TimePickerMon from "./timeallday/TimeMon";
import TimePickerTH from "./timeallday/TimeThes";
import TimePickerWen from "./timeallday/TimeWe";
import TimePickerT from "./timeallday/TimeT";
import TimePickerFri from "./timeallday/TimeFri";
import TimePickerSat from "./timeallday/TimeSat";
import SwitchDate from './SwitchDate';
import axios from 'axios'
import moment from 'moment'
import loader from "../App/layout/Loader";
class Switch1 extends Component {
  constructor() {
    super();
    this.state = {
      checkedSun: false, checkedMon: false,
      checkedThe: false, checkedWen: false, checkedthu: false, checkedFri: false,
      workingDays: {},
      checkedSat: false,
      loading:true,
    };
    
  }

  onClickWorkingDays=()=>{
    console.log('onClickWorkingDays', this.state.workingDays);
    const { token } = localStorage
    const endPoint = `http://localhost:8000/labInfo/workHoursInfo`
    axios.put(endPoint, this.state.workingDays, { headers: { "token": `${token}` } })
    .then((response) => {
        this.setState({
          workingDays: response.data,
            loading: false,
        })
    }).catch(error => {
        this.setState({ loading: false })
    })
  }
  async componentDidMount()
  { 
      const { token } = localStorage;
      try{
          const response = await axios.get('http://localhost:8000/labInfo/getInfo', { headers: { "token": `${token}` } });
          console.log(response.data.worksHours)
          this.setState({
              workingDays:response.data.worksHours,
              loading:false,
          })
      }catch(error){
          this.setState({loading:false})
          console.log('error', error.message)
      }
     }
  render() {
    if(this.state.loading){
      return <loader/>
    }
    const {Sat,Sun,Mon,Tue,Wed,Thu, Fri} = this.state.workingDays
    return (
      <Row>
        <Col md={6}>

          <SwitchDate
            day={'Saturday'}
            workingDay={Sat}
            onChange={(value) => {
              this.setState({
                workingDays: {
                  ...this.state.workingDays,
                  Sat: {...value, From:moment(value.From).format('x'), to:moment(value.to).format('x')},
                }
              })
            }}
          />
          <br />
          <br />
          <div className="switch-time" />
          <SwitchDate
            day={'Sunday'}
            workingDay={Sun}
            onChange={(value) => {
              this.setState({
                workingDays: {
                  ...this.state.workingDays,
                  Sun: {...value, From:moment(value.From).format('x'), to:moment(value.to).format('x')},
                }
              })
            }}
          />
          <br /><br />

          <SwitchDate
            day={'Monday'}
            workingDay={Mon}
            onChange={(value) => {
              this.setState({
                workingDays: {
                  ...this.state.workingDays,
                  Mon: {...value, From:moment(value.From).format('x'), to:moment(value.to).format('x')},
                }
              })
            }}
          />
          <br /><br />

          <SwitchDate
            day={'Thuesday'}
            workingDay={Tue}
            onChange={(value) => {
              this.setState({
                workingDays: {
                  ...this.state.workingDays,
                  Tue: {...value, From:moment(value.From).format('x'), to:moment(value.to).format('x')},
                }
              })
            }}
          />
          <br /><br />
        </Col>
        <Col md={6}>
          <SwitchDate
            day={'Wednesday'}
            workingDay={Wed}
            onChange={(value) => {
              this.setState({
                workingDays: {
                  ...this.state.workingDays,
                  Wed: {...value, From:moment(value.From).format('x'), to:moment(value.to).format('x')},
                }
              })
            }}
          />
          <br /><br />

          <SwitchDate
            day={'Thursday'}
            workingDay={Thu}
            onChange={(value) => {
              this.setState({
                workingDays: {
                  ...this.state.workingDays,
                  Thu: {...value, From:moment(value.From).format('x'), to:moment(value.to).format('x')},
                }
              })
            }}
          />
          <br /><br />

          <SwitchDate
            day={'Friday'}
            workingDay={Fri}
            onChange={(value) => {
              this.setState({
                workingDays: {
                  ...this.state.workingDays,
                  Fri: {...value, From:moment(value.From).format('x'), to:moment(value.to).format('x')},
                }
              })
            }}
          />
        </Col>
        <Col md={12}>

          <Button variant="primary" onClick={this.onClickWorkingDays}>
            Accept
        </Button>
        </Col>
      </Row>
    );
  }
}
export default Switch1;