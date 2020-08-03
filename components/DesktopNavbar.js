import React, { Component } from "react";
import Link from "next/link";

import styles from "../styles/desktop-navbar.scss";

export class DesktopNavbar extends Component {
    render() {
        return (
            <div className={"dp-navbar-container dp-navbar-container--styles"}>
                <div className="logo-container">
                    <img
                        className="logo"
                        src="https://authorspress.com/wp-content/uploads/2019/04/Logo_AuthorsPress_Colored.png"
                        alt="logo"
                    />
                </div>
                <div className="flex-btns nav-btns-container">
                    <Link href="/services"><a className={`link link--styles`}>Services</a></Link>
                    <Link href="/bookstore"><a className={`link link--styles`}>Bookstore</a></Link>
                    <Link href="/blog"><a className={`link link--styles`}>Blog</a></Link>
                    <Link href="/about"><a className={`link link--styles`}>About us</a></Link> 
                </div>
            </div>
        );
    }
}

export default DesktopNavbar;
