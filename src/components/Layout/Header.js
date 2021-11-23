import React, { Fragment, useState } from "react";
import cx from 'classnames';
import { Link } from "gatsby";
// JavaScript plugin that hides or shows a component based on your scroll
// import Headroom from "headroom.js";
// reactstrap components
import {
    Button,
    UncontrolledCollapse,
    // DropdownMenu,
    DropdownToggle,
    UncontrolledDropdown,
    // Media,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
    //   UncontrolledTooltip
} from "reactstrap";
// Image
import LogoImg from '../../../static/img/brand/Corlife-ver-new.png';
import LogoImgSM from '../../../static/img/brand/Corlife-ver-new.png';

// Icons
import {
    // MdGroupWork,
    // MdAccountBalance,
    // MdThumbUp,
    // MdPeople,
    // MdAccountBox,
    // MdVisibility,
    // MdQuestionAnswer,
    // MdFileDownload,
    // MdLocationCity,
    // MdPieChart,
    // MdTrendingUp,
    // MdAssessment,
    // MdAccessibility,
    // MdBook,
    MdPayment
} from 'react-icons/md';

export default function Header() {
    const [collapseClasses, setCollapseClasses] = useState('');
    const [rotateArrow, setRotateArrow] = useState(false);
    const [startedArrow, setStartedArrow] = useState(false);
    const [fundsArrow, setFundsArrow] = useState(false);
    // const [createAccount, setCreateAccount] = useState(false);

    const rotate = () => {
        setRotateArrow(!rotateArrow);
        setStartedArrow(false);
        setFundsArrow(false);
    };

    const started = () => {
        setStartedArrow(!startedArrow);
        setRotateArrow(false);
        setFundsArrow(false);
    };

    const funds = () => {
        setFundsArrow(!fundsArrow);
        setRotateArrow(false);
        setRotateArrow(false);
    };


    const onExiting = () => {
        setCollapseClasses('collapsing-out');
    };

    const onExited = () => {
        setCollapseClasses('');
    }


    return (
        <Fragment>
            <header className="header-global">
                <Navbar
                    className="navbar-main bg-white navbar-light head-fix shadow"
                    light
                    expand="lg"
                    fixed="top"
                    id="navbar-main"
                >
                    <Container>
                        <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                            <img
                                alt="..."
                                src={LogoImgSM}
                                className="affinity-logo"
                            />
                        </NavbarBrand>
                        <a href="https://nvestmo.com/home" className="navbar-toggler text-primary-color" style={{ fontSize: '14px', marginLeft: '4rem' }}>
                            <span className="font-weight-500">Log in</span>
                        </a>
                        <button className="navbar-toggler" id="navbar_global">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <UncontrolledCollapse
                            toggler="#navbar_global"
                            navbar
                            className={collapseClasses}
                            onExiting={onExiting}
                            onExited={onExited}
                        >
                            <div className="navbar-collapse-header">
                                <Row>
                                    <Col className="collapse-brand" xs="6">
                                        <Link to="/">
                                            <img
                                                alt="..."
                                                src={LogoImg}
                                            />
                                        </Link>
                                    </Col>
                                    <Col className="collapse-close" xs="6">
                                        <button className="navbar-toggler" id="navbar_global">
                                            <span />
                                            <span />
                                        </button>
                                    </Col>
                                </Row>
                            </div>
                            <Nav className="navbar-nav-hover align-items-lg-center ml-lg-auto" navbar>
                                <NavItem>
                                    <NavLink href="/" className="navlink-header">
                                        <i className="ni ni-app d-lg-none mr-3" />
                                        <span className="nav-link-inner--text">Home</span>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="navbar-nav-hover align-items-lg-center text-primary-color" navbar>
                                {/* About us */}
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav onClick={rotate} className="navlink-header">
                                        <Link
                                            to="/about"
                                            style={{ color: 'inherit'}}
                                        >
                                            <i className="ni ni-building d-lg-none mr-3" />
                                            <span className="nav-link-inner--text">About Us</span>
                                            <i className={cx(`ni ni-bold-down d-lg-none mr-3 float-right arrow-up ${rotateArrow ? 'rotate' : 'rotate-down'}`)} />
                                        </Link>
                                    </DropdownToggle>
                                    {/* <DropdownMenu className="dropdown-menu-affinity dropdown-menu-custom">
                                        <div className="dropdown-menu-inner">
                                            <AnchorLink to="/about/#whyUS" style={{ color: 'inherit' }}>
                                                <Media
                                                    className="d-flex align-items-center mb-0"
                                                >
                                                    <div className="icon icon-shape text-primary-color">
                                                        <MdGroupWork />
                                                    </div>
                                                    <Media body className="ml-3 headerLeft-sm">
                                                        <h6 className="heading text-primary-color mb-md-1 font-weight-custom">
                                                            Why Us
                                                        </h6>
                                                    </Media>
                                                </Media>
                                            </AnchorLink>
                                            <AnchorLink to="/about/#position" style={{ color: 'inherit' }}>
                                                <Media
                                                    className="d-flex align-items-center mb-0"
                                                >
                                                    <div className="icon icon-shape text-primary-color">
                                                        <MdAccountBalance />
                                                    </div>
                                                    <Media body className="ml-3 headerLeft-sm">
                                                        <h6 className="heading text-primary-color mb-md-1 font-weight-custom">
                                                            About Us
                                                        </h6>
                                                    </Media>
                                                </Media>
                                            </AnchorLink>
                                            <AnchorLink to="/about/#core" style={{ color: 'inherit' }}>
                                                <Media
                                                    className="d-flex align-items-center mb-0"
                                                >
                                                    <div className="icon icon-shape text-primary-color">
                                                        <MdThumbUp />
                                                    </div>
                                                    <Media body className="ml-3">
                                                        <h6 className="heading text-primary-color mb-md-1 font-weight-custom">
                                                            Core Values
                                                        </h6>
                                                    </Media>
                                                </Media>
                                            </AnchorLink>
                                            <AnchorLink to="/about/#bod" style={{ color: 'inherit' }}>
                                                <Media
                                                    className="d-flex align-items-center mb-0"
                                                >
                                                    <div className="icon icon-shape text-primary-color">
                                                        <MdPeople />
                                                    </div>
                                                    <Media body className="ml-3 headerLeft-sm">
                                                        <h6 className="heading text-primary-color mb-md-1 font-weight-custom">
                                                            Board and Management
                                                        </h6>
                                                    </Media>
                                                </Media>
                                            </AnchorLink>
                                        </div>
                                    </DropdownMenu> */}
                                </UncontrolledDropdown>

                                {/* Insights */}
                                {/* <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav onClick={started} className="navlink-header">
                                        <i className="ni ni-money-coins d-lg-none mr-3" />
                                        <span className="nav-link-inner--text">Get Started</span>
                                        <i className={cx(`ni ni-bold-down d-lg-none mr-3 float-right arrow-up ${startedArrow ? 'rotate' : 'rotate-down'}`)} />
                                    </DropdownToggle>
                                    <DropdownMenu className="dropdown-menu-insights dropdown-menu-custom">
                                        <div className="dropdown-menu-inner insights-pb-lg">
                                            <Media
                                                className="d-flex align-items-center mb-0"
                                            >
                                                <div className="icon icon-shape text-primary-color">
                                                    <MdVisibility />
                                                </div>
                                                <Media body className="ml-3 headerLeft-sm">
                                                    <h6 className="heading text-primary-color mb-md-1 font-weight-custom">
                                                        Get Started
                                                    </h6>
                                                </Media>
                                            </Media>
                                            <Row>
                                                <Col md={12}>
                                                    <ul className="heading mb-md-1 started-left ml-5 ">
                                                        <li className="mb-3"><AnchorLink to="/how-to-invest" style={{ color: 'inherit' }}>How to Invest</AnchorLink></li>
                                                        <li className="mb-3"><AnchorLink to="/how-to-redeem" style={{ color: 'inherit' }}>How to Redeem</AnchorLink></li>
                                                        <li className="mb-3"><AnchorLink to="/how-to-fs" style={{ color: 'inherit' }}>How to Fund Switch</AnchorLink></li>
                                                        <li className="mb-2"><a role="button" onClick={() => setCreateAccount(true)} style={{ color: 'inherit' }}>How to Open an Account</a></li>
                                                        <li className="mb-3"><AnchorLink to="/payment" style={{ color: 'inherit' }}>Ways to Remit Investment Deposit</AnchorLink></li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                            <Media
                                                className="d-flex align-items-center mb-0"
                                                target="_blank"
                                            >
                                                <div className="icon icon-shape text-primary-color">
                                                    <MdAccountBox />
                                                </div>
                                                <Media body className="ml-3 headerLeft-sm">
                                                    <h6 className="heading text-primary-color mb-md-1 font-weight-custom">
                                                        Forms
                                                    </h6>
                                                </Media>
                                            </Media>
                                            <Row>
                                                <Col md={12}>
                                                    <ul className="heading mb-md-1 ml-5 formHead-bottom">
                                                        <li className="mb-3"><AnchorLink to="/individual-forms" style={{ color: 'inherit' }}>Individual</AnchorLink></li>
                                                        <li className="mb-3"><AnchorLink to="/corporate-forms" style={{ color: 'inherit' }}>Institutional/Corporate</AnchorLink></li>
                                                        <li><AnchorLink to="/ada-forms" style={{ color: 'inherit' }}>Automatic Debit Arrangement (ADA)</AnchorLink></li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                            <AnchorLink to="/faq" style={{ color: 'inherit' }}>
                                                <Media
                                                    className="d-flex align-items-center mb-0"
                                                    target="_blank"
                                                >
                                                    <div className="icon icon-shape text-primary-color">
                                                        <MdQuestionAnswer />
                                                    </div>
                                                    <Media body className="ml-3 headerLeft-sm">
                                                        <h6 className="heading text-primary-color mb-md-1 font-weight-custom">
                                                            Frequently Asked Questions (FAQs)
                                                        </h6>
                                                    </Media>
                                                </Media>
                                            </AnchorLink>
                                        </div>
                                    </DropdownMenu>
                                </UncontrolledDropdown> */}

                                {/* Funds */}
                                {/* <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav onClick={funds} className="navlink-header">
                                        <i className="ni ni-chart-bar-32 d-lg-none mr-3" />
                                        <span className="nav-link-inner--text">Investment</span>
                                        <i className={cx(`ni ni-bold-down d-lg-none mr-3 float-right arrow-up ${fundsArrow ? 'rotate' : 'rotate-down'}`)} />
                                    </DropdownToggle>
                                    <DropdownMenu className="dropdown-menu-funds dropdown-menu-custom">
                                        <div className="dropdown-menu-inner funds-pb-lg">
                                            <Row>
                                                <Col md={6}>
                                                    <p className="fund--heading pad--sm text-primary-color font-weight-500" style={{ fontSize: '13px'}}>Our wide range of mutual funds are classified by category for your convenience.</p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md={6}>
                                                    <Media
                                                        className="d-flex align-items-center"
                                                    >
                                                        <Media body className="ml-3 headerLeft-sm">
                                                            <h6 className="heading text-primary-color mb-md-1 font-weight-custom">
                                                                I. Mutual Funds
                                                            </h6>
                                                            <ul className="heading-ul heading mt-2">
                                                                <li className="mb-3">
                                                                    <AnchorLink to="/funds" style={{ color: 'inherit' }}>
                                                                        <div className="mb-0 fund-headSM" style={{ display: 'block' }}>
                                                                            <span>By Investor Type</span>
                                                                            <br />
                                                                            <span className="link-subText left-smFunds">(Conservative, Moderate Aggressive, Aggressive)</span>
                                                                        </div>
                                                                    </AnchorLink>
                                                                </li>
                                                                <li className="mb-3">
                                                                    <AnchorLink to="/asset" style={{ color: 'inherit' }}>
                                                                        <div className="mb-0 text-primary-color fund-headSM" style={{ display: 'block' }}>
                                                                            <span>By Asset Class </span>
                                                                            <br />
                                                                            <span className="link-subText left-smFunds">(Fixed Income, Multi-Asset, Equities, etc)</span>
                                                                        </div>
                                                                    </AnchorLink>
                                                                </li>
                                                                <li className="mb-3">
                                                                    <AnchorLink to="/currency" style={{ color: 'inherit' }}>
                                                                        <div className="fund-headSM">
                                                                            <span>By Currency</span>
                                                                            <span className="link-subText ml-1">(Peso and USD)</span>
                                                                        </div>
                                                                    </AnchorLink>
                                                                </li>
                                                                <li className="mb-3">
                                                                    <AnchorLink to="/time-horizon" style={{ color: 'inherit' }}>
                                                                        <div className="fund-headSM" style={{ display: 'block' }}>
                                                                            <span>By Time Horizon </span>
                                                                            <br />
                                                                            <span className="link-subText">(Short, Medium, Long Term)</span>
                                                                        </div>
                                                                    </AnchorLink>
                                                                </li>
                                                            </ul>
                                                        </Media>
                                                    </Media>
                                                </Col>
                                                <Col md={4}>
                                                    <Media
                                                        className="d-flex align-items-center mb-0"
                                                    >
                                                        <Media body className="ml-3 headerLeft-sm">
                                                            <h6 className="heading text-primary-color mb-md-1 font-weight-custom">
                                                                II. Mutual Fund Performance
                                                            </h6>
                                                            <ul className="heading-ul heading mt-2">
                                                                <li className="mb-3"><Link to="/daily-navpu">Daily NAVPU/S</Link></li>
                                                                <li className="mb-3"><Link to="/navpu">Historical Performance</Link></li>
                                                            </ul>
                                                        </Media>
                                                    </Media>
                                                </Col>
                                            </Row>
                                        </div>
                                    </DropdownMenu>
                                </UncontrolledDropdown> */}
                            </Nav>
                            <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                                <NavItem>
                                    <NavLink href="/services" className="navlink-header">
                                        <i className="ni ni-single-02 d-lg-none mr-3" />
                                        <span className="nav-link-inner--text">Services</span>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                                <NavItem>
                                    <NavLink href="/what-we-do" className="navlink-header">
                                        <i className="ni ni-single-02 d-lg-none mr-3" />
                                        <span className="nav-link-inner--text">Corlife 2.0</span>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                                <NavItem>
                                    <NavLink href="/what-we-do" className="navlink-header">
                                        <i className="ni ni-single-02 d-lg-none mr-3" />
                                        <span className="nav-link-inner--text">Careers</span>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                                <NavItem>
                                    <NavLink href="/contact-us" className="navlink-header">
                                        <i className="ni ni-email-83 d-lg-none mr-3" />
                                        <span className="nav-link-inner--text">Contact Us</span>
                                    </NavLink>
                                </NavItem>
                            </Nav>

                            {/* <Nav className="align-items-lg-center ml-lg-auto" navbar>
                                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                                    <NavItem>
                                        <NavLink href="https://affinity.nvestmo.com/home" style={{ textTransform: 'none' }} className="navlink-header">
                                            <i className="ni ni-world-2 d-lg-none mr-3" />
                                            <span className="nav-link-inner--text">Log in</span>
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <NavItem className="d-none d-lg-block ml-lg-4">
                                    <Button
                                        className="btn-brand-secondary"
                                        href="https://affinity.nvestmo.com/auth/register"
                                        target="_blank"
                                    >
                                        <span className="nav-link-inner--text ml-1">
                                            Start Investing
                                        </span>
                                    </Button>
                                </NavItem>
                            </Nav> */}
                        </UncontrolledCollapse>
                    </Container>
                    <Container fluid className="d-lg-none justify-content-end">
                        <Nav className="align-items-lg-center" navbar>
                            <NavItem className="d-lg-block d-lg-none">
                                <Button
                                    className="btn-brand-secondary btn-start-sm"
                                    href="https://affinity.nvestmo.com/auth/register"
                                    target="_blank"
                                >
                                    <span className="nav-link-inner--text ml-1 text-white">
                                        Start Investing
                                    </span>
                                </Button>
                            </NavItem>
                        </Nav>
                    </Container>
                </Navbar>
            </header>
        </Fragment>
    );
}

