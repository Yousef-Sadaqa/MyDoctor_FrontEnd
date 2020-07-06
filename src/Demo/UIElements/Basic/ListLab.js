import React, { Fragment } from 'react';
import { List, Avatar, Icon } from 'antd';
import { Rate } from 'antd';
import { Input, Modal } from 'antd';
import { Button, Radio } from 'antd';
import 'antd/dist/antd.css';
import './Button.scss'
import { Row, Col } from 'react-bootstrap';
import Rating from '@material-ui/lab/Rating';
import CVData from './CV'
import axios from 'axios';
const { Search } = Input;

const listData = [];
for (let i = 0; i < 11; i++) {
  listData.push({
    href: 'http://ant.design',
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
      listDoctors: [],
    }
    this.filterList = this.filterList.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    const { token } = localStorage
    const endPoint = `http://localhost:8000/Search/getLab`
    axios.get(endPoint, { headers: { token } }).then((response) => {
      console.log(response.data)
      this.setState({
        loading: false,
        listDoctors: response.data,
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

  _renderModalCV = () => {
    const { item } = this.state
    return (
      <Modal
        visible={this.state.visible}
        onCancel={(e) => this.setState({ visible: false })}
        footer={null}
        width={'73%'}
      >
        <CVData item={item} />
      </Modal>
    )
  }
  render = () => (
    <div>
      <Row>
        <Col md={4}></Col>
        <Col md={4}>

          <Search
            placeholder="Enter Laboratory name"
            onSearch={value => this.filterList(value)}
            style={{ width: 300, height: 40 }}
          />



        </Col>
      </Row>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize:6,
        }}
        dataSource={this.state.listDoctors}
        renderItem={item => (
          <List.Item
            key={item._id}

            extra={


              <a href="#"><label onClick={() => this.setState({ visible: true, item })} className="label theme-bg2 text-white f-14 f-w-400 float-right">SeeMore</label>
              </a>

            }
          >
            <List.Item.Meta
              avatar={<Avatar src={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'} />}
              title={item.name}
              description={
                <Fragment>
                  <Rating name="half-rating" value={item.rate.Star_AVG ? item.rate.Star_AVG : 0} readOnly precision={0.5} />,
                </Fragment>
              }
            />
            {item.experience}
          </List.Item>
        )}
      />
      {this.state.visible && this._renderModalCV()}
    </div>
  )
}
