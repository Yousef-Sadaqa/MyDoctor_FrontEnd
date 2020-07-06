import React, {Component , useEffect } from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';

class MaterialTableDemo extends Component {
  state = {
    doctorList: [
      
    ],
  }
  
  componentDidMount(){

    const endPoint = `http://localhost:8000/getDoctors/nameAllDoctors`;
    const {token} = localStorage
    axios.get(endPoint, {headers:{token}})
    .then((response)=>{
      console.log(response.data)
      this.setState({
        doctorList:response.data[0].doctorList,
      }, () =>console.log('Doctor', this.state.doctorList))
    }).catch(error=>{
      console.log('error', error.message)
    })

  }  


  handleUpdateRow=()=>{
    const {doctorList} = this.state
    const {token} = localStorage
    const endPoint = `http://localhost:8000/insertReg/RegistrationNumberDoctor`
    axios.put(endPoint, {doctorList},{headers:{token}}).then((response)=>{
      console.log(response.data)
    }).catch(error=>{
      console.log('error', error.message)
    })
  }
  render() {
    const columns=  [
      { title: 'name', field: 'name' },
     
    
      { title: 'registrationNum', field: 'registrationNum', type: 'numeric' }
    ]
    return (
      <MaterialTable
        title=""
        columns={columns}
        data={this.state.doctorList}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                this.setState(prevState => {
                  const data = [...prevState.doctorList];
                  data.push(newData);
                  return { doctorList:data };
                }, ()=>this.handleUpdateRow());
              }, 600);

            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  this.setState(prevState => {
                    const data = [...prevState.doctorList];
                    data[data.indexOf(oldData)] = newData;
                    return {doctorList:data };
                  },()=>this.handleUpdateRow());
                }
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                this.setState(prevState => {
                  const data = [...prevState.doctorList];
                  data.splice(data.indexOf(oldData), 1);
                  return { doctorList:data };
                }, ()=>this.handleUpdateRow());
              }, 600);
            }),
        }}
      />
    );
  }
}

export default MaterialTableDemo