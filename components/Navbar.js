import React, { Component } from "react";
import Link from "next/link";
import {
    faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/navbar.scss";

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: "hide",
            rotate: "",
            clicked: false,
        }
        this.showServices = this.showServices.bind(this);
    }

    showServices() {
        if (!this.state.clicked) {
            this.setState({
                show: "",
                rotate: "rotate",
                clicked: true,
            });
        } else if (this.state.clicked) {
            this.setState({
                show: "hide",
                rotate: "unrotate",
                clicked: false,
            });
        }
    }

    render() {
        // put back hide to make burger work again
        let show = this.state.show;
        let rotate = this.state.rotate;
        let hide = "hide";
        let clicked = this.props.burgerClicked;
        if (clicked) {
            hide = "grid";
        }
        return (
            <div
                className={`${hide} navbar-container navbar-container--styles`}
            >  
                <div onClick={this.showServices} className={`link link--styles`}>
                    <span className="service-flex">
                        Services 
                        <FontAwesomeIcon
                            className={`${rotate} arrow-right`}
                            icon={faAngleRight}
                            style={{ width: "10px" }}
                        />
                    </span>
                        <span className={`${show} services-tab services-tab--styles`}>
                            <div className="services-tab-grid">
                                <Link href="/services">
                                    <a className="service-item service-item--styles">Overview</a>
                                </Link>
                                <Link href="/publishing-packages">
                                    <a className="service-item service-item--styles">Publishing Packages</a>
                                </Link>
                                <Link href="/editorial-and-add-ons">
                                    <a className="service-item service-item--styles">Editorial & Add-Ons</a>
                                </Link>
                                <Link href="/marketing-packages">
                                    <a className="service-item service-item--styles">Marketing Packages</a>
                                </Link> 
                            </div>
                        </span>
                    </div>

                <Link href="/bookstore"><a className={`link link--styles`}>Bookstore</a></Link>
                <Link href="/blog"><a className={`link link--styles`}>Blog</a></Link>
                <Link href="/about"><a className={`link link--styles`}>About us</a></Link>    
            </div>
        );
    }
}

