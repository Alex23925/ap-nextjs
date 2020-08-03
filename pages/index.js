import Head from 'next/head'
import dynamic from 'next/dynamic'
import styles from '../styles/home.scss'
import Burger from '../components/Burger'

import React, { Component } from "react";

const Navbar = dynamic(() => import("../components/Navbar"));
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
            <Navbar burgerClicked={this.state.burgerClicked} />
            <Slogan />
            <Services />
            
        </div>
    );
  }
}
