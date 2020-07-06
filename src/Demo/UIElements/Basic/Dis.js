
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import { Button, Modal, Form, Input, Radio } from 'antd';
import axios from 'axios';

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Create a new collection"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >//MedAnalysis
          <Form layout="vertical">
           
            <Form.Item label="medicalTest">
              {getFieldDecorator('result', {
                rules: [{ required: true, message: 'Please input the title of collection!' }],
              })(<Input />)}
            </Form.Item>
            
           
          </Form>
        </Modal>
      );
    }
  },
);

 export default class CollectionsPage extends React.Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

   handleCreate = () => {
     console.log('outside')
     const { form } = this.formRef.props;
     form.validateFields((err, values) => {
       if (err) {
        console.log(err.message)
        return;
       }
       const { patinets } = this.props
       const { token } = localStorage
       const endPoint = `http://localhost:8000/labpH/addMedicalTest/${patinets._id}`
       axios.put(endPoint, values, { headers: { token } })
       .then((response) => {
         console.log('values', values)
         this.props.onUpdate(response.data)
         this.setState({
          patinets: response.data
         })
        console.log('Received values of form: ', values);
        form.resetFields();
        this.setState({ visible: false });
      }).catch(error=>{
        console.log('error', error.message)
      });
    })
   }


  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          New Collection
        </Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}


          