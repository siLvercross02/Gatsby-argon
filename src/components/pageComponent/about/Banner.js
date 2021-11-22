import React, { Fragment } from 'react'
import { Button, Container, Col, Row } from 'reactstrap'
import Corlife from '../../../../static/img/theme/corlife.mp4'

export default function Banner() {
    return (
        <Fragment>
            <div className="position-relative">
            {/* shape Hero */}
            <section className="section-hero section-shaped bg-primary">
                <div className="video-container">
                    <video autoPlay loop muted id="video">
                        <source src={Corlife} type="video/mp4" />
                    </video>
                </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
        </Fragment>
    )
}
