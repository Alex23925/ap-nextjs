import Head from 'next/head'
import dynamic from 'next/dynamic'
import styles from '../styles/home.scss'
import Burger from '../components/Burger'

import React, { Component } from "react";

const Layout = dynamic(() => import("../components/Layout"));

const Navbar = dynamic(() => import("../components/Navbar"));
const DesktopNavbar = dynamic(() => import("../components/DesktopNavbar"));
const Slogan = dynamic(() => import("../components/homeComponents/Slogan"));
const Services = dynamic(() => import("../components/homeComponents/Services"));
const FreeSection = dynamic(() => import("../components/homeComponents/FreeSection"));
const FreeGuide = dynamic(() => import("../components/homeComponents/FreeGuide"));
const Footer = dynamic(() => import( "../components/Footer"));

export default class Home extends Component {
  constructor(props) {
        super(props);
        this.state = {
            burgerClicked: false,
        };
        this.setBurgerClicked = this.setBurgerClicked.bind(this);
    }

    setBurgerClicked(clicked) {
        //console.log(clicked);
        this.setState({
            burgerClicked: clicked,
        });
    }
  render() {
    return (
        <div className="page-wrapper">
            <Head>
                <title>Authors Press</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content={`Authors Press is the sole owner of Creative Books and Authorial Magazine. We take pride in creating milestones in the literary industry. `}
                />
            </Head>
            <Burger setBurgerClicked={this.setBurgerClicked} />
            <DesktopNavbar />
            <Navbar burgerClicked={this.state.burgerClicked} />
            <Slogan />
            <Services />
            <FreeSection />
            <FreeGuide />
            <Footer />
            
        </div>
    );
  }
}
