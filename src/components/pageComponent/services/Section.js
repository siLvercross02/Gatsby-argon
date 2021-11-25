import React, { Fragment } from 'react'
import { Container, Row, Col, Card, CardImg, CardBody, CardDeck } from 'reactstrap'

export default function Section() {
    return (
        <Fragment>
             <section className="section--corlife section mt-lg">
                 <Container>
                    <Row className="row-grid align-items-center">
                        <Col md="12" lg="12">
                            <div className="title--container">
                                <div className="icon icon-lg icon-shape bg-primary-brand shadow rounded-circle mb-5">
                                    <i className="ni ni-settings text-white" />
                                </div>
                                <h3 className="text-primary-color">Services</h3>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-3">
                        <Col md="12" lg="12">
                            <CardDeck>
                                <Card className="shadow shadow-lg--hover">
                                    <CardBody>
                                        <div className="card--container">
                                            <div>
                                                <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                                                    <i className="ni ni-satisfied" />
                                                </div>
                                            </div>
                                            <div className="pl-0 mt-3">
                                                <h6 className="title text-success">
                                                    Income Protection
                                                </h6>
                                                <p className="sub-services mt-3">
                                                    The Income Protection freezes every winter and much of
                                                    the sea-ice then thaws every summer, and that
                                                    process will continue whatever.
                                                </p>
                                                <a
                                                    className="text-success"
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    Learn more
                                                </a>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                                <Card className="shadow shadow-lg--hover">
                                    <CardBody>
                                        <div className="card--container">
                                            <div>
                                                <div className="icon icon-shape bg-gradient-danger rounded-circle text-white">
                                                    <i className="ni ni-active-40" />
                                                </div>
                                            </div>
                                            <div className="pl-0 mt-3">
                                                <h6 className="title text-brand-secondary">
                                                    Medical Fund Planning
                                                </h6>
                                                <p className="sub-services mt-3">
                                                    The Arctic Ocean freezes every winter and much of
                                                    the sea-ice then thaws every summer, and that
                                                    process will continue whatever.
                                                </p>
                                                <a
                                                    className="text-brand-secondary"
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    Learn more
                                                </a>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                                <Card className="shadow shadow-lg--hover">
                                    <CardBody>
                                        <div className="card--container">
                                            <div>
                                                <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                                    <i className="ni ni-books" />
                                                </div>
                                            </div>
                                            <div className="pl-0 mt-3">
                                                <h6 className="title text-primary-color">
                                                    Education Planning
                                                </h6>
                                                <p className="sub-services mt-3">
                                                    The Education Planning freezes every winter and much of
                                                    the sea-ice then thaws every summer, and that
                                                    process will continue whatever.
                                                </p>
                                                <a
                                                    className="text-primary-color"
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    Learn more
                                                </a>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </CardDeck>
                        </Col>
                    </Row>

                    <Row className="mb-lg">
                        <Col md="4" lg="4">
                            <Card className="shadow shadow-lg--hover mt-5">
                                <CardBody>
                                    <div className="card--container">
                                        <div>
                                            <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                                                <i className="ni ni-chart-bar-32" />
                                            </div>
                                        </div>
                                        <div className="pl-0 mt-3">
                                            <h6 className="title text-success">
                                                Retirement & Investment
                                            </h6>
                                            <p className="sub-services mt-3">
                                                The Income Protection freezes every winter and much of
                                                the sea-ice then thaws every summer, and that
                                                process will continue whatever.
                                            </p>
                                            <a
                                                className="text-success"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                Learn more
                                            </a>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4" lg="4">
                            <Card className="shadow shadow-lg--hover mt-5">
                                <CardBody>
                                    <div className="card--container">
                                        <div>
                                            <div className="icon icon-shape bg-gradient-danger rounded-circle text-white">
                                                <i className="ni ni-building" />
                                            </div>
                                        </div>
                                        <div className="pl-0 mt-3">
                                            <h6 className="title text-brand-secondary">
                                                Estate & Legacy Planning
                                            </h6>
                                            <p className="sub-services mt-3">
                                                The Arctic Ocean freezes every winter and much of
                                                the sea-ice then thaws every summer, and that
                                                process will continue whatever.
                                            </p>
                                            <a
                                                className="text-brand-secondary"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                Learn more
                                            </a>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                 </Container>
             </section>
        </Fragment>
    )
}
