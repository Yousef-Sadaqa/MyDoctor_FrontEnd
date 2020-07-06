import React, { Component } from 'react';
import Aux from "../../../hoc/_Aux";
import { Row, Col, Card } from 'react-bootstrap';
import Table from './Con1'
class Badges extends Component {

    render() {
        return (

          <Aux>
          <Row>
              <Col>
                  <Card>
                      <Card.Header>
                          <Card.Title as="h5">All Lab Name&regNumber</Card.Title>
                      </Card.Header>
                     <Table/>
                  <Card.Body>
                   
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Aux>

          
        );
    }
}

export default Badges;