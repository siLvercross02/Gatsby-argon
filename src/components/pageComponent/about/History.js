import React, { Fragment } from 'react'
import { Container, Row, Col, Card, CardImg } from 'reactstrap'
import img2 from '../../../../static/img/banner/mission.jpg'
import team1 from '../../../../static/img/banner/poster.jpg'

export default function History() {
    return (
        <Fragment>
            <section className="section bg-secondary">
                <Container>
                    <Row className="row-grid align-items-center">
                        <Col md="12" lg="12">
                            <div className="pl-md-5">
                                <div className="icon icon-lg icon-shape bg-primary-brand shadow rounded-circle mb-5">
                                    <i className="ni ni-settings text-white" />
                                </div>
                                <h3 className="text-primary-color">History of Corlife</h3>
                                <p>
                                    Corlife Insurance Agency, Inc. was established in 2003 by Nunnatus A. Cortez, a Top Financial Advisor of Insular Life, and Myrna R. Cortez, an expert in organisational development and financial management. We are currently branded as an innovative team that houses the best Financial Advisors of The Insular Life Assurance Co., Ltd.. Comprised of professional financial advisors, we are committed to providing innovative solutions for our clients’ financial needs.
                                </p>
                                <p>
                                    In total, our partners have a strong track record of more than 20 years of experience in the field of Financial Advisory.
                                </p>
                                <p>
                                    In 2017, Corlife was able to develop 13 MDRT Qualifying Members (highest in the industry), and is now considered an Insular Life Hall-of-Famer for consistently becoming the General Agency of the Year for the past eight years.
                                </p>

                                <div className="icon icon-lg icon-shape bg-primary-brand shadow rounded-circle mb-5 mt-5">
                                    <i className="ni ni-settings text-white" />
                                </div>
                                <h3 className="text-primary-color">Corlife 2.0</h3>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                                <p>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                </p>
                                <p>
                                    Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="section">
                <Container>
                    <Row className="row-grid">
                        <Col md="6" lg="6">
                            <img
                              alt="..."
                              className="img-fluid rounded"
                              src={img2}
                            />
                        </Col>
                        <Col md="6" lg="6">
                            <div className="pl-md-5 mt-3">
                                <h3 className="text-primary-color font-weight-600">Mission</h3>
                                <p>
                                    To ensure financial security for Filipinos by accompanying them through every lifestage and serving with the highest quality of financial advisement.
                                </p>
                            </div>
                            <div className="pl-md-5 mt-5">
                                <h3 className="text-primary-color font-weight-600">Vision</h3>
                                <p>
                                    An industry-leading, premier Corlife for Filipino families.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* The management */}
            <section className="section">
                <Container>
                    <Row className="row-grid">
                        <Col md="12" lg="12">
                            <div className="icon icon-lg icon-shape bg-primary-brand shadow rounded-circle mb-3">
                                <i className="ni ni-single-02 text-white" />
                            </div>
                            <h3 className="text-primary-color font-weight-600">The Management</h3>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md="6" lg="6">
                            <img
                              alt="..."
                              className="img-fluid rounded"
                              src={team1}
                            />
                        </Col>
                        <Col md="6" lg="6">
                            <div className="pl-md-5 mt-3">
                                <h4 className="text-primary-color font-weight-500">Dr. John Doe</h4>
                                <p className="text-justify">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-lg">
                        <Col className="order-lg-2" md="6" lg="6">
                            <img
                              alt="..."
                              className="img-fluid rounded"
                              src={team1}
                            />
                        </Col>
                        <Col className="order-lg-1" md="6" lg="6">
                            <div className="pr-md-5 mt-3">
                                <h4 className="text-primary-color font-weight-500">Engr. Alex Doe</h4>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-lg">
                        <Col md="6" lg="6">
                            <img
                              alt="..."
                              className="img-fluid rounded"
                              src={team1}
                            />
                        </Col>
                        <Col md="6" lg="6">
                            <div className="pl-md-5 mt-3">
                                <h4 className="text-primary-color font-weight-500">Mary Alice Doe</h4>
                                <p className="text-justify">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </Fragment>
    )
}
