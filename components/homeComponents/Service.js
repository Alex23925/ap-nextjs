import React, { Component } from "react";
import Link from "next/link";

import { faSwatchbook, faEdit, faCubes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../../styles/home-styles/service.scss"
export class Service extends Component {
    render() {
        const { icon, title, description, btnPath } = this.props.service;
        return (
            <div className="service service--styles">
                <div className="icon-container icon-container--styles">
                    {icon}
                </div>
                <div className="title-container">
                    <h2 className="title title--styles">{title}</h2>
                </div>
                <div className="description-container">
                    <p className="description description--styles">
                        {description}
                    </p>
                </div>
                <Link
                    href={btnPath}
                    className="navBar-link"
                    style={{ textDecoration: "none" }}
                >
                    <div className="btn-path-container btn-path-container--styles">
                        <a className="btn-path btn-path--styles">Learn More</a>
                    </div>
                </Link>
            </div>
        );
    }
}

export default Service;
