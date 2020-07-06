import React, { Fragment } from 'react';
import { List, Avatar, Icon } from 'antd';
import { Rate } from 'antd';
import { Input, Modal } from 'antd';
import { Button, Radio } from 'antd';
import 'antd/dist/antd.css';
import { Row, Col } from 'react-bootstrap';
import Rating from '@material-ui/lab/Rating';

import axios from 'axios';
const { Search } = Input;

const listData = [];
for (let i = 0; i < 11; i++) {
  listData.push({
    href: 'moathghannam0@gmail.com',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: <Rating name="half-rating" value={2.5} readOnly precision={0.5} />,
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

export default class className extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      filteredList: [],
      searchString: '',
      visible: false,
      item: {},
      loading:true,
      listcon: [],
    }
    this.filterList = this.filterList.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    const { token } = localStorage
    const endPoint = `http://localhost:8000/contactUs/showMsg`
    axios.get(endPoint, { headers: { token } }).then((response) => {
      console.log(response.data[0].contactUs)
      this.setState({
        loading: false,
        listcon: response.data[0].contactUs,
        list:response.data
      })
    }).catch(error => {
      this.setState({
        loading: false,
      })
      console.log('error', error.message)
    })
    this.setState({ filteredList: this.state.list });
  }
  handleClick() {
    this.setState({ buttonState: 'loading' })
    // make asynchronous call
    setTimeout(() => {
      this.setState({ buttonState: 'success' })
    }, 3000)
  }
  filterList(value) {
    let searchValue = value.toLowerCase();
    let filteredList = this.state.list;

    filteredList = filteredList.filter(item => {
      return item.name.toLowerCase().search(searchValue) !== -1;
    });

    this.setState({ listDoctors: filteredList });
    this.setState({ searchString: value });
  }

  render = () => (
    <div>
      <Row>
        <Col md={4}></Col>
        <Col md={4}>

          <Search
            placeholder="Enter Subject name"
            onSearch={value => this.filterList(value)}
            style={{ width: 300, height: 40 }}
          />



        </Col>
      </Row>
      <Col></Col>
      <Col>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize:6,
        }}
        dataSource={this.state.listcon}
        renderItem={item => (
          <List.Item
            key={item}

            
          >
            <List.Item.Meta
              title={<p>
                {item.name}
                <br/>
                  {item.email}
                  <br/>
                  {item.subject}
                  <br/>
              </p>}
             
              description={item.msg}
              
              
            />
            {item.experience}
          </List.Item>
        )}
      />
      {this.state.visible && this._renderModalCV()}
      </Col>
    </div>
  )
}
