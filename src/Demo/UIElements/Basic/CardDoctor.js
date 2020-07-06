import React from 'react';
import './Card1.scss';
import Aux from "../../../hoc/_Aux";
import { Row, Col, Card } from 'react-bootstrap';
import img1 from './H2.jpg'
import img2 from './H3.jpg'
import img3 from './1111.jpg'
export default class CardDoctor extends React.Component {
    state = {

    }
    gopharmacy = () => {
        this.props.history.push(`/doctor-list`);
    }
    render = () => (
        <Aux>
            <Row>
                <Col>
                    <Card>

                        <Card.Body>
                            <Row>
                                <Col md={4}>
                                    <div className='card1' style={{ zIndex: '0' }}>

                                        <div className='card2'>
                                            <div className='desc'><p>Internist</p></div>
                                            <div className='filter'></div>
                                            <div className='top'></div>
                                            <div className='right'></div>
                                            <div className='bottom'></div>
                                            <div className='left'></div>
                                            <img src={img1} alt="pic not find" />


                                        </div>




                                    </div>
                                    <div className="card1-footer">
                                        <div className="card1-btn" onClick={()=>this.props.history.push(`/doctor-list/Internist`)} >CLICK ME!<span>CLICK ME!</span></div>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className='card1' style={{ zIndex: '0' }}>

                                        <div className='card2'>
                                            <div className='desc'><p>cardiologist </p></div>
                                            <div className='filter'></div>
                                            <div className='top' ></div>
                                            <div className='right'></div>
                                            <div className='bottom'  ></div>
                                            <div className='left' ></div>
                                            <img src={img2} alt="pic not find" />


                                        </div>
                                    </div>
                                    <div className="card1-footer">
                                        <div className="card1-btn" onClick={()=>this.props.history.push(`/doctor-list/cardiologist`)}>CLICK ME!<span>CLICK ME!</span></div>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className='card1' style={{ zIndex: '0' }}>

                                        <div className='card2'>
                                            <div className='desc'><p>Doctor of Hematology</p>
                                            </div>
                                            <div className='filter'></div>
                                            <div className='top' ></div>
                                            <div className='right' ></div>
                                            <div className='bottom' ></div>
                                            <div className='left' ></div>
                                            <img src={img3} alt="pic not find" />


                                        </div>




                                    </div>
                                    <div className="card1-footer">
                                        <div className="card1-btn" onClick={()=>this.props.history.push(`/doctor-list/Doctor-of-Hematology`)}>CLICK ME!<span>CLICK ME!</span></div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <div className='card1' style={{ zIndex: '0' }}>

                                        <div className='card2'>
                                            <div className='desc'><p>Doctor of Nephrology</p></div>
                                            <div className='filter'></div>
                                            <div className='top'></div>
                                            <div className='right'></div>
                                            <div className='bottom'></div>
                                            <div className='left'></div>
                                            <img src={img1} alt="pic not find" />


                                        </div>




                                    </div>
                                    <div className="card1-footer">
                                        <div className="card1-btn" onClick={()=>this.props.history.push(`/doctor-list/Doctor-of-Nephrology`)} >CLICK ME!<span>CLICK ME!</span></div>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className='card1' style={{ zIndex: '0' }}>

                                        <div className='card2'>
                                            <div className='desc'><p>Oncologist </p></div>
                                            <div className='filter'></div>
                                            <div className='top' ></div>
                                            <div className='right'></div>
                                            <div className='bottom'  ></div>
                                            <div className='left' ></div>
                                            <img src={img2} alt="pic not find" />


                                        </div>
                                    </div>
                                    <div className="card1-footer">
                                        <div className="card1-btn" onClick={()=>this.props.history.push(`/doctor-list/Oncologist`)}>CLICK ME!<span>CLICK ME!</span></div>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className='card1' style={{ zIndex: '0' }}>

                                        <div className='card2'>
                                            <div className='desc'><p>Surgeon</p>
                                            </div>
                                            <div className='filter'></div>
                                            <div className='top' ></div>
                                            <div className='right' ></div>
                                            <div className='bottom' ></div>
                                            <div className='left' ></div>
                                            <img src={img3} alt="pic not find" />


                                        </div>




                                    </div>
                                    <div className="card1-footer">
                                        <div className="card1-btn" onClick={()=>this.props.history.push(`/doctor-list/Surgeon`)}>CLICK ME!<span>CLICK ME!</span></div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <div className='card1' style={{ zIndex: '0' }}>

                                        <div className='card2'>
                                            <div className='desc'><p>Pediatrician</p></div>
                                            <div className='filter'></div>
                                            <div className='top'></div>
                                            <div className='right'></div>
                                            <div className='bottom'></div>
                                            <div className='left'></div>
                                            <img src={img1} alt="pic not find" />


                                        </div>




                                    </div>
                                    <div className="card1-footer">
                                        <div className="card1-btn" onClick={()=>this.props.history.push(`/doctor-list/Pediatrician`)} >CLICK ME!<span>CLICK ME!</span></div>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className='card1' style={{ zIndex: '0' }}>

                                        <div className='card2'>
                                            <div className='desc'><p>Neurologist </p></div>
                                            <div className='filter'></div>
                                            <div className='top' ></div>
                                            <div className='right'></div>
                                            <div className='bottom'  ></div>
                                            <div className='left' ></div>
                                            <img src={img2} alt="pic not find" />


                                        </div>
                                    </div>
                                    <div className="card1-footer">
                                        <div className="card1-btn" onClick={()=>this.props.history.push(`/doctor-list/Neurologist`)}>CLICK ME!<span>CLICK ME!</span></div>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className='card1' style={{ zIndex: '0' }}>

                                        <div className='card2'>
                                            <div className='desc'><p>ENT Specialist</p>
                                            </div>
                                            <div className='filter'></div>
                                            <div className='top' ></div>
                                            <div className='right' ></div>
                                            <div className='bottom' ></div>
                                            <div className='left' ></div>
                                            <img src={img3} alt="pic not find" />


                                        </div>




                                    </div>
                                    <div className="card1-footer">
                                        <div className="card1-btn" onClick={()=>this.props.history.push(`/doctor-list/ENT-Specialist`)}>CLICK ME!<span>CLICK ME!</span></div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <div className='card1' style={{ zIndex: '0' }}>

                                        <div className='card2'>
                                            <div className='desc'><p>Urologist</p></div>
                                            <div className='filter'></div>
                                            <div className='top'></div>
                                            <div className='right'></div>
                                            <div className='bottom'></div>
                                            <div className='left'></div>
                                            <img src={img1} alt="pic not find" />


                                        </div>




                                    </div>
                                    <div className="card1-footer">
                                        <div className="card1-btn" onClick={()=>this.props.history.push(`/doctor-list/Urologist`)} >CLICK ME!<span>CLICK ME!</span></div>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className='card1' style={{ zIndex: '0' }}>

                                        <div className='card2'>
                                            <div className='desc'><p>Dermatologist </p></div>
                                            <div className='filter'></div>
                                            <div className='top' ></div>
                                            <div className='right'></div>
                                            <div className='bottom'  ></div>
                                            <div className='left' ></div>
                                            <img src={img2} alt="pic not find" />


                                        </div>
                                    </div>
                                    <div className="card1-footer">
                                        <div className="card1-btn" onClick={()=>this.props.history.push(`/doctor-list/Dermatologist`)}>CLICK ME!<span>CLICK ME!</span></div>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className='card1' style={{ zIndex: '0' }}>

                                        <div className='card2'>
                                            <div className='desc'><p>Hepatologist</p>
                                            </div>
                                            <div className='filter'></div>
                                            <div className='top' ></div>
                                            <div className='right' ></div>
                                            <div className='bottom' ></div>
                                            <div className='left' ></div>
                                            <img src={img3} alt="pic not find" />


                                        </div>




                                    </div>
                                    <div className="card1-footer">
                                        <div className="card1-btn" onClick={()=>this.props.history.push(`/doctor-list/Hepatologist`)}>CLICK ME!<span>CLICK ME!</span></div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <div className='card1' style={{ zIndex: '0' }}>

                                        <div className='card2'>
                                            <div className='desc'><p>Radiologist</p></div>
                                            <div className='filter'></div>
                                            <div className='top'></div>
                                            <div className='right'></div>
                                            <div className='bottom'></div>
                                            <div className='left'></div>
                                            <img src={img1} alt="pic not find" />


                                        </div>




                                    </div>
                                    <div className="card1-footer">
                                        <div className="card1-btn" onClick={()=>this.props.history.push(`/doctor-list/Radiologist`)} >CLICK ME!<span>CLICK ME!</span></div>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className='card1' style={{ zIndex: '0' }}>

                                        <div className='card2'>
                                            <div className='desc'><p>Psychologist </p></div>
                                            <div className='filter'></div>
                                            <div className='top' ></div>
                                            <div className='right'></div>
                                            <div className='bottom'  ></div>
                                            <div className='left' ></div>
                                            <img src={img2} alt="pic not find" />


                                        </div>
                                    </div>
                                    <div className="card1-footer">
                                        <div className="card1-btn" onClick={()=>this.props.history.push(`/doctor-list/Psychologist`)}>CLICK ME!<span>CLICK ME!</span></div>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className='card1' style={{ zIndex: '0' }}>

                                        <div className='card2'>
                                            <div className='desc'><p>Dentist</p>
                                            </div>
                                            <div className='filter'></div>
                                            <div className='top' ></div>
                                            <div className='right' ></div>
                                            <div className='bottom' ></div>
                                            <div className='left' ></div>
                                            <img src={img3} alt="pic not find" />


                                        </div>




                                    </div>
                                    <div className="card1-footer">
                                        <div className="card1-btn" onClick={()=>this.props.history.push(`/doctor-list/Dentist`)}>CLICK ME!<span>CLICK ME!</span></div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <div className='card1' style={{ zIndex: '0' }}>

                                        <div className='card2'>
                                            <div className='desc'><p>Forensic Physician</p></div>
                                            <div className='filter'></div>
                                            <div className='top'></div>
                                            <div className='right'></div>
                                            <div className='bottom'></div>
                                            <div className='left'></div>
                                            <img src={img1} alt="pic not find" />


                                        </div>




                                    </div>
                                    <div className="card1-footer">
                                        <div className="card1-btn" onClick={()=>this.props.history.push(`/doctor-list/Forensic-Physician`)} >CLICK ME!<span>CLICK ME!</span></div>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className='card1' style={{ zIndex: '0' }}>

                                        <div className='card2'>
                                            <div className='desc'><p>General</p></div>
                                            <div className='filter'></div>
                                            <div className='top' ></div>
                                            <div className='right'></div>
                                            <div className='bottom'  ></div>
                                            <div className='left' ></div>
                                            <img src={img2} alt="pic not find" />


                                        </div>
                                    </div>
                                    <div className="card1-footer">
                                        <div className="card1-btn" onClick={()=>this.props.history.push(`/doctor-list/General`)}>CLICK ME!<span>CLICK ME!</span></div>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className='card1' style={{ zIndex: '0' }}>

                                        <div className='card2'>
                                            <div className='desc'><p>Anatomist</p>
                                            </div>
                                            <div className='filter'></div>
                                            <div className='top' ></div>
                                            <div className='right' ></div>
                                            <div className='bottom' ></div>
                                            <div className='left' ></div>
                                            <img src={img3} alt="pic not find" />


                                        </div>




                                    </div>
                                    <div className="card1-footer">
                                        <div className="card1-btn" onClick={()=>this.props.history.push(`/doctor-list/Anatomist`)}>CLICK ME!<span>CLICK ME!</span></div>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Aux>
    )
}