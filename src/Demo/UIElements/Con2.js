import React, {Component , useEffect } from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';

class MaterialTableDemo extends Component {
  state = {
    pharmacyList: [
      
    ],
  }
  
  componentDidMount(){

    const endPoint = `http://localhost:8000/getPharmacies/nameAllPharmacies`;
    const {token} = localStorage
    axios.get(endPoint, {headers:{token}})
    .then((response)=>{
      console.log(response.data)
      this.setState({
        pharmacyList:response.data[0].pharmacyList,
      }, () =>console.log('Doctor', this.state.pharmacyList))
    }).catch(error=>{
      console.log('error', error.message)
    })

  }  


  handleUpdateRow=()=>{
    const {pharmacyList} = this.state
    const {token} = localStorage
    const endPoint = `http://localhost:8000/insertReg/RegistrationNumberDoctor`
    axios.put(endPoint, {pharmacyList},{headers:{token}}).then((response)=>{
      console.log(response.data)
    }).catch(error=>{
      console.log('error', error.message)
    })
  }
  render() {
    const columns=  [
      { title: 'name', field: 'name' },
     
    
      { title: 'registrationNum', field: 'num', type: 'numeric' }
    ]
    return (
      <MaterialTable
        title=""
        columns={columns}
        data={this.state.pharmacyList}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                this.setState(prevState => {
                  const data = [...prevState.pharmacyList];
                  data.push(newData);
                  return { pharmacyList:data };
                }, ()=>this.handleUpdateRow());
              }, 600);

            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  this.setState(prevState => {
                    const data = [...prevState.pharmacyList];
                    data[data.indexOf(oldData)] = newData;
                    return {pharmacyList:data };
                  },()=>this.handleUpdateRow());
                }
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                this.setState(prevState => {
                  const data = [...prevState.pharmacyList];
                  data.splice(data.indexOf(oldData), 1);
                  return { pharmacyList:data };
                }, ()=>this.handleUpdateRow());
              }, 600);
            }),
        }}
      />
    );
  }
}

export default MaterialTableDemo