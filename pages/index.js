import Head from 'next/head'
import dynamic from 'next/dynamic'
import styles from '../styles/home.scss'
import Burger from '../components/Burger'

import React, { Component } from "react";
import FreeSection from '../components/homeComponents/FreeSection';
import FreeGuide from '../components/homeComponents/FreeGuide';
import Footer from '../components/Footer';

const Navbar = dynamic(() => import("../components/Navbar"));
const DesktopNavbar = dynamic(() => import("../components/DesktopNavbar"));
const Slogan = dynamic(() => import("../components/homeComponents/Slogan"));
const Services = dynamic(() => import("../components/homeComponents/Services"));

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
