import React from 'react';
import'./Card1.scss';
import Aux from "../../../hoc/_Aux";
import {Row ,Col ,Card} from 'react-bootstrap';
import img1 from './H2.jpg'
import img2 from './H3.jpg'
import img3 from './1111.jpg'
class Card1 extends React.Component {
    
    handleL =()=>{
        this.props.history.push('/lsitlab')
    }
    handleP =()=>{
        this.props.history.push('/lsitphar')
    }
    handleD =()=>{
        this.props.history.push('/card-doctor')
    }
    render() {
        
        return (
            <Aux>
            <Row>
            <Col>
            <Card>
            
        <Card.Body>
        <Row>
        <Col md={4}>
            <div className='card1' style={{zIndex:'0'}}>
                
            <div className='card2'>
            <div className='desc'><p>Pharmacy</p></div>
            <div className='filter'></div>
            <div className='top'></div>
            <div className='right'></div>
            <div className='bottom'></div>
            <div className='left'></div>
         <img src={img1} alt="pic not find"/>
               
            
        </div>
       
                
                    
                
            </div>
            <div className="card1-footer">
            <div className="card1-btn" onClick={this.handleP} >CLICK ME!<span>CLICK ME!</span></div>
        </div>
            </Col>
            <Col md={4}>
            <div className='card1' style={{zIndex:'0'}}>
                
            <div className='card2'>
            <div className='desc'><p>Laboratory </p></div>
            <div className='filter'></div>
            <div className='top' ></div>
            <div className='right'></div>
            <div className='bottom'  ></div>
            <div className='left' ></div>
         <img src={img2} alt="pic not find"/>
               
            
        </div>
       </div>
            <div className="card1-footer">
            <div className="card1-btn" onClick={this.handleL} >CLICK ME!<span>CLICK ME!</span></div>
        </div>
            </Col>
            <Col md={4}>
            <div className='card1' style={{zIndex:'0'}}>
                
            <div className='card2'>
            <div className='desc'><p>Doctor</p>
           </div>
            <div className='filter'></div>
            <div className='top' ></div>
            <div className='right' ></div>
            <div className='bottom' ></div>
            <div className='left' ></div>
         <img src={img3} alt="pic not find"/>
               
            
        </div>
       
                
                    
                
            </div>
            <div className="card1-footer">
            <div className="card1-btn" onClick={this.handleD} >CLICK ME!<span>CLICK ME!</span></div>
        </div>
            </Col>
            </Row>
            </Card.Body>
            </Card>
            </Col>
            </Row>
            </Aux>
        );
    }
}
export default Card1;

