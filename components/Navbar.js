import React, { Component } from "react";
import Link from "next/link";

import styles from "../styles/Navbar.module.scss";

export default class Navbar extends Component {
    render() {
        // put back hide to make burger work again
        let hide = "hide";
        let clicked = this.props.burgerClicked;
        if (clicked) {
            hide = "grid";
        }
        return (
            <div
                className={`${hide} navbar-container navbar-container--styles`}
            >  
                <Link href="/services"><a className={`link link--styles`}>Services</a></Link>
                <Link href="/bookstore"><a className={`link link--styles`}>Bookstore</a></Link>
                <Link href="/blog"><a className={`link link--styles`}>Blog</a></Link>
                <Link href="/about"><a className={`link link--styles`}>About us</a></Link>    
            </div>
        );
    }
}

