import React, { Fragment } from 'react'
import { graphql, useStaticQuery } from "gatsby"
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import Lottie from 'react-lottie';
import { GatsbyImage, getImage,  } from "gatsby-plugin-image";
import BannerJSON from '../../json/banner.json';

const query = graphql`
    {
        file(relativePath: {eq: "Corlife-ver-new.png"}) {
            childImageSharp {
                gatsbyImageData(width: 400)
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
          <div className="position-relative">
            {/* Hero for FREE version */}
            <section className="section section-hero section-shaped">
              {/* Background circles */}
              <div className="shape shape-style-2 bg-affinity-gradient">
                {/* <span className="span-150" />
                <span className="span-50" />
                <span className="span-50" />
                <span className="span-75" />
                <span className="span-100" />
                <span className="span-75" />
                <span className="span-50" />
                <span className="span-100" />
                <span className="span-50" />
                <span className="span-100" /> */}
              </div>
              <Container className="shape-container d-flex align-items-center py-lg">
                <div className="col px-0">
                  <Row>
                    <Col lg="6" md="6">
                      <GatsbyImage
                        className="img-fluid"
                        image={imageSrc}
                        style={{ width: "400px" }}
                        className="mt-5"
                      />
                      {/* <h1 className="text-white">CORLIFE</h1> */}
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
                      {/* <div className="mt-5">
                        <small className="text-white font-weight-bold mb-0 mr-2">
                          *proudly coded by
                        </small>
                
                      </div> */}
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
              </Container>
              {/* SVG separator */}
              {/* <div className="separator separator-bottom separator-skew zindex-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div> */}
            </section>
          </div>
        </Fragment>
    );
}
