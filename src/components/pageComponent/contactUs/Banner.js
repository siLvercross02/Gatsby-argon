import React, { Fragment } from 'react'
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
} from 'reactstrap'
import { Form, Input, Button } from 'antd'

export default function Banner() {
    const { TextArea } = Input;

    return (
        <Fragment>
            <div className="position-relative">
                <section className="section section-lg section-shaped pb-250">
                    <div className="shape shape-style-1 contact-banner">
                    </div>
                    <Container className="py-lg-md d-flex mt-lg">
                        <div className="col px-0">
                            <Row>
                                <Col lg="6" md="6">
                                    <h1 className="display-3 text-white">
                                        Contact Us
                                    </h1>
                                    <p className="lead text-white">
                                        Our team is happy to answer your questions. Fill out the form and we'll be in touch as soon as possible.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </section>
                <section className="section section-lg mt--200">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="12">
                                <Card className="shadow border-0">
                                    <CardBody className="py-5">
                                        <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                                            <i className="ni ni-email-83" />
                                        </div>
                                        <h3 className="text-primary text-uppercase">
                                            Send us a message
                                        </h3>
                                        <Form>
                                            <Row>
                                                <Col lg="6" md="6">
                                                    <Form.Item>
                                                        <Input placeholder="Your First Name" />
                                                    </Form.Item>
                                                </Col>
                                                <Col lg="6" md="6">
                                                    <Form.Item>
                                                        <Input placeholder="Your Last" />
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col lg="6" md="6">
                                                    <Form.Item>
                                                        <Input placeholder="Your Email Address" />
                                                    </Form.Item>
                                                </Col>
                                                <Col lg="6" md="6">
                                                    <Form.Item>
                                                        <Input placeholder="Phone Number" />
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                            <Row justify="center">
                                                <Col lg="12" md="12">
                                                    <Form.Item>
                                                        <TextArea rows={4} placeholder="Your Message" />
                                                    </Form.Item>
                                                    
                                                </Col>
                                                <Col lg="12" md="12">
                                                    <div className="mx-auto text-center">
                                                        <Button type="primary" htmlType="submit" className="pl-5 pr-5" size="large">Submit</Button>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        </Fragment>
    )
}
