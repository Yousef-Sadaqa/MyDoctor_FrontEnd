import React, {Component , useEffect } from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';

class MaterialTableDemo extends Component {
  state = {
    labList: [
      
    ],
  }
  
  componentDidMount(){

    const endPoint = `http://localhost:8000/getLabs/nameAllLabs`;
    const {token} = localStorage
    axios.get(endPoint, {headers:{token}})
    .then((response)=>{
      console.log(response.data)
      this.setState({
        labList:response.data[0].labList,
      }, () =>console.log('Doctor', this.state.labList))
    }).catch(error=>{
      console.log('error', error.message)
    })

  }  


  handleUpdateRow=()=>{
    const {labList} = this.state
    const {token} = localStorage
    const endPoint = `http://localhost:8000/insertReg/RegistrationNumberLab`
    axios.put(endPoint, {labList},{headers:{token}}).then((response)=>{
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
        data={this.state.labList}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                this.setState(prevState => {
                  const data = [...prevState.labList];
                  data.push(newData);
                  return { labList:data };
                }, ()=>this.handleUpdateRow());
              }, 600);

            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  this.setState(prevState => {
                    const data = [...prevState.labList];
                    data[data.indexOf(oldData)] = newData;
                    return {labList:data };
                  },()=>this.handleUpdateRow());
                }
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                this.setState(prevState => {
                  const data = [...prevState.labList];
                  data.splice(data.indexOf(oldData), 1);
                  return { labList:data };
                }, ()=>this.handleUpdateRow());
              }, 600);
            }),
        }}
      />
    );
  }
}

export default MaterialTableDemo