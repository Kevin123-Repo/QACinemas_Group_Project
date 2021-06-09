import React, { useState } from 'react';
import { Card, Row, Col } from 'reactstrap';
import ClassPG from './ClassPG'
import ClassU from './ClassU'
import Class12 from './Class12'
import Class12A from './Class12A';
import Class15 from './Class15';
import Class18 from './Class18';


const Classifications = () => {

    const [isOpen18, setIsOpen18] = useState(false);
    const toggle18 = () => setIsOpen18(!isOpen18);

    return (
        <div className="classification-div">

            <Row className="top-row">
                <Col sm="6">
                    <Card body style={{ backgroundColor: 'rgb(62 182 73)', borderColor: 'black' }}>
                        <ClassU />
                    </Card>
                </Col>
                <Col sm="6">
                    <Card body style={{ backgroundColor: 'rgb(249 172 25)', borderColor: 'black' }}>
                        <ClassPG />
                    </Card>
                </Col>
            </Row>
            <Row className="middle-row">
                <Col sm="6">
                    <Card body style={{ backgroundColor: 'rgb(244 126 33)', borderColor: 'black' }}>
                        <Class12A />
                    </Card>
                </Col>
                <Col sm="6">
                    <Card body style={{ backgroundColor: 'rgb(244 126 33)', borderColor: 'black' }}>
                        <Class12 />
                    </Card>
                </Col>
            </Row >
            <Row className="bottom-row">
                <Col sm="6">
                    <Card body style={{ backgroundColor: 'rgb(239 80 147)', borderColor: 'black' }}>
                        <Class15 />
                    </Card>
                </Col>

                <Col sm="6">
                    <Card body style={{ backgroundColor: 'rgb(222 31 38)', borderColor: 'black' }}>
                        <Class18 />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Classifications;