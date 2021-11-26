import React, { Fragment } from 'react'
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
} from 'reactstrap'

export default function Banner() {
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
            </div>
        </Fragment>
    )
}
