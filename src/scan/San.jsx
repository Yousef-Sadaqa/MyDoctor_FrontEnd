import React from 'react'
import Map from './Map/Map'
import Controls from './Controls/Control'
import Aux from '../hoc/_Aux';
import {Row,Col ,Card} from 'react-bootstrap';
class San extends React.Component {
  render() {
    return (
      <Aux>
      <Row>
          <Col>
        <Map />
       
        <Controls />
        </Col>
        </Row>
       
        </Aux>
       
    )
  }
}

export default San
