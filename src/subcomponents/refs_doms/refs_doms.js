import React, { Component, Fragment } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import "./refs_doms.css";

class Refs_Doms extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <Fragment>
            <div className="grid">
                <div className="firstColumn">REFS & Doms</div>
                    <Form>
                        <Form.Group as={Row} controlId="ctlID1">
                            <Col sm="2">
                                <Form.Label>First field</Form.Label>
                            </Col>
                            <Col sm="5">
                                <Form.Control ref="firstField" type="input" placeholder="First Field" />
                            </Col>
                        </Form.Group>
                        
                        <Form.Group as={Row} controlId="ctlID2">
                            <Col sm="2">
                                <Form.Label>Second field</Form.Label>
                            </Col>
                            <Col sm="5">
                                <Form.Control ref="secondField" type="input" placeholder="Second Field" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="ctlID3">
                            <Col sm="2">
                                <Form.Label>Third field</Form.Label>
                            </Col>
                            <Col sm="5">
                                <Form.Control ref="thirdField" type="input" placeholder="Third Field" />
                            </Col>
                        </Form.Group>

                    </Form>
                <div className="lastColumn"></div>
            </div>
        </Fragment>
        );
    }
}
 
export default Refs_Doms;