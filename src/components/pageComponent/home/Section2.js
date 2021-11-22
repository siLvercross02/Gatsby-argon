import React, { Fragment } from 'react'
import { Container, Row, Col, Card, CardImg, CardBody } from 'reactstrap'
// image
import img1 from '../../../../static/img/banner/poster.jpg'
import img2 from '../../../../static/img/theme/img-2-1200x1000.jpg'
import img3 from '../../../../static/img/ill/ill-2.svg'
import img4 from '../../../../static/img/theme/section1.png'
// import profile1 from '../../../../static/img/theme/team-1-800x800.jpg'
// import profile2 from '../../../../static/img/theme/team-2-800x800.jpg'
// import profile3 from '../../../../static/img/theme/team-3-800x800.jpg'
// import profile4 from '../../../../static/img/theme/team-4-800x800.jpg'

export default function Section2() {
    return (
        <Fragment>
            <section className="section--corlife section mt-lg">
                <Container fluid className="p-5">
                  <Row className="row-grid bg-affinity-gradient p-5 rounded">
                      <Col className="order-md-2" md="5">
                        <div className="img-pos">
                          <img
                              alt="..."
                              className="img-fluid rounded"
                              src={img1}
                          />
                        </div>
                      </Col>
                      <Col className="order-md-1" md="7">
                        <div className="pr-md-1">
                            <div className="icon icon-lg icon-shape bg-primary-brand text-white shadow rounded-circle mb-5">
                              <i className="ni ni-collection" />
                            </div>
                            <h3 className="text-primary-color">Message from the Co-Founders</h3>
                            <p className="message--text text-primary-color pb-3 text-justify">
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>

                            <p className="mb-0 text-primary-color">John Doe</p>
                            <p className="text-gray" style={{ fontSize: '14px'}}>President & CEO, Corlife</p>
                        </div>
                      </Col>
                  </Row>
                </Container>
            </section>

          <section className="mt-0 section--corlife section--corlifeTop section pb-0">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2" md="6">
                  <div className="position-relative pl-md-5">
                    <img
                      alt="..."
                      className="img-center img-fluid floating"
                      src={img3}
                    />
                  </div>
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-settings-gear-65 text-primary" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-primary-color">What We do</h4>
                      {/* <p className="text-white">
                        The Arctic Ocean freezes every winter and much of the
                        sea-ice then thaws every summer, and that process will
                        continue whatever.
                      </p> */}
                    </div>
                  </div>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-satisfied" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">
                            Income Protection
                          </h5>
                          <p>
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
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-danger rounded-circle text-white">
                            <i className="ni ni-active-40" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-brand-secondary">
                            Medical Fund Planning
                          </h5>
                          <p>
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
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                            <i className="ni ni-books" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-primary-color">
                            Education Planning
                          </h5>
                          <p>
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
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section--corlifeTop section pb-0 mb-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-1" md="6">
                  <div className="position-relative mt-lg">
                    <img
                      alt="..."
                      className="img-center img-fluid floating"
                      src={img4}
                    />
                  </div>
                </Col>
                <Col className="order-lg-2" lg="6">
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-chart-bar-32" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">
                            Retirement & Investment
                          </h5>
                          <p>
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
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-danger rounded-circle text-white">
                            <i className="ni ni-building" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-brand-secondary">
                            Estate & Legacy Planning
                          </h5>
                          <p>
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

          <section className="section bg-secondary mb-lg">
              <Container>
                <Row className="row-grid align-items-center">
                  <Col md="6">
                    <Card className="bg-default shadow border-0">
                      <CardImg
                        alt="..."
                        src={img2}
                        top
                      />
                      <blockquote className="card-blockquote">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="svg-bg"
                          preserveAspectRatio="none"
                          viewBox="0 0 583 95"
                        >
                          <polygon
                            className="fill-default"
                            points="0,52 583,95 0,95"
                          />
                          <polygon
                            className="fill-default"
                            opacity=".2"
                            points="0,42 583,95 683,0 0,95"
                          />
                        </svg>
                        <h4 className="display-3 font-weight-bold text-white">
                          Lorem Ipsum
                        </h4>
                        <p className="lead text-italic text-white">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                      </blockquote>
                    </Card>
                  </Col>
                  <Col md="6">
                    <div className="pl-md-5">
                      <div className="icon icon-lg icon-shape bg-secondary-color shadow rounded-circle mb-5">
                        <i className="ni ni-settings text-white" />
                      </div>
                      <h3>Our customers</h3>
                      <p className="lead">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                      </p>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                      </p>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                      </p>
                      <a
                        className="font-weight-bold text-brand-secondary mt-5"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Where can I get some?
                      </a>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
        </Fragment>
    )
}
