import { Modal, Button } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Col,Row} from 'react-bootstrap';
import 'antd/dist/antd.css';



const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};
const value=1;
function IconContainer(props) {
  const { value, ...other } = props;
  return (
    <Tooltip title={labels[value] || ''}>
      <span {...other} />
    </Tooltip>
  );
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
  rating1: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
});
export default class Rating1 extends React.Component {
 
    
     success() {
        Modal.success({
          content: <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend">please Rating </Typography>
         <Row>
             <Col md={4}></Col>
             <Col md={4}>
          <Rating
            name="hover-tooltip"
            value={value}
            precision={0.5}
            IconContainerComponent={IconContainer}
          />
          </Col>
          </Row>
        </Box>,
        });
      }
    state = {
        
    }

    render(){
       
    return(  
    <Button onClick={this.success}>Rate </Button>
    )
    
}}