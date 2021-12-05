import React, { Fragment } from 'react'
import { graphql, useStaticQuery } from "gatsby"
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import { Carousel } from 'antd';
import Lottie from 'react-lottie';
import { GatsbyImage, getImage,  } from "gatsby-plugin-image";
import BannerJSON from '../../json/banner.json';

const query = graphql`
    {
        file(relativePath: {eq: "corlife-white.png"}) {
            childImageSharp {
                gatsbyImageData(width: 500)
            }
        }
    }
`;

export default function Banner() {
    const data = useStaticQuery(query);
    const imageSrc = getImage(data.file.childImageSharp.gatsbyImageData);
    console.log(useStaticQuery(query));
    return (
        <Fragment>
          <div className="position-relative bg-overlay">
            {/* Hero for FREE version */}
            <section className="section section-lg section-hero section-shaped" style={{ overflow: 'visible'}}>
              {/* Background circles */}
              <div className="shape bg-primary z-reset">
                <Carousel
                  effect="scrollx"
                  autoplay={false}
                  cssEase="ease"
                  arrows={false}
                  speed="2000"
                  infinite={true}
                  pauseOnHover={false}
                  dotPosition="bottom"
                >
                  <div className="slide-1">
                    <Container>
                      <Row className="mt-lg">
                        <Col md={6} lg={6} xl={6} xs={12} className="mt-lg">
                          {/* <h1 className="text-white mt-lg">Test 1</h1> */}
                          <GatsbyImage
                            className="img-fluid"
                            image={imageSrc}
                            style={{ width: "500px" }}
                            className="mt-3]"
                          />
                          <p className="lead text-white">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          </p>
                          <Button
                            className="btn-icon mb-3 mb-sm-0 mt-3"
                            color="primary"
                            size="lg"
                          >
                            Get Started
                          </Button>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                  {/* <div className="slide-2">
                    <Container>
                      <Row className="mt-lg">
                        <Col md={6} lg={6} xl={6} xs={12}>
                          <h1 className="text-white mt-lg text-left">Financial Solutions to Advance your Business</h1>
                        </Col>
                      </Row>
                     
                    </Container>
                  </div> */}
                  <div className="slide-3">
                    <Container>
                      <Row className="mt-lg">
                        <Col md={6} lg={6} xl={6} xs={12}>
                          <h1 className="text-white mt-lg"><h1 className="text-white mt-lg text-left">Financial Solutions to Advance your Business</h1></h1>
                          <p className="lead text-white">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          </p>
                        </Col>
                      </Row>
                     
                    </Container>
                  </div>
                  <div className="slide-4">
                    <Container>
                      <Row className="mt-lg">
                        <Col md={6} lg={6} xl={6} xs={12}>
                          <h1 className="text-white mt-lg">Start your life with us</h1>
                          <p className="lead text-white">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          </p>
                        </Col>
                      </Row>
                     
                    </Container>
                  </div>
                </Carousel>
              </div>
              {/* <Container className="shape-container d-flex align-items-center py-lg">
                <div className="col px-0">
                  <Row>
                    <Col lg="6" md="6">
                      <GatsbyImage
                        className="img-fluid"
                        image={imageSrc}
                        style={{ width: "500px" }}
                        className="mt-3]"
                      />
                      <p className="lead text-primary-color">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </p>
                      <div className="btn-wrapper mt-5 mb-5">
                        <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="primary"
                          href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                          size="lg"
                        >
                          <span className="btn-inner--text">Get Started</span>
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-bold-right" />
                          </span>
                        </Button>{" "}
                      </div>
                    </Col>
                    <Col lg="6" md="6">
                      <Lottie 
                          options={{
                              autoplay: true,
                              animationData: BannerJSON,
                              renderSettings: {
                                  preserveAspectRatio: 'xMidYMid slice',
                              },
                          }}
                      />
                    </Col>
                  </Row>
                </div>
              </Container> */}
            </section>
          </div>
        </Fragment>
    );
}
