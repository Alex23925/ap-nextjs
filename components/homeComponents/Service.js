import React, { Component } from "react";
import Link from "next/link";

import { faSwatchbook, faEdit, faCubes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../../styles/home-styles/service.scss"
export class Service extends Component {
    render() {
        const { icon, title, description, btnPath, btnTxt } = this.props.service;
        return (
            <div className="service service--styles">
                <div className="icon-centering">
                    <div className="icon-container icon-container--styles">
                        {icon}
                    </div>
                </div>
                <div className="title-container">
                    <h2 className="title title--styles">{title}</h2>
                </div>
                <div className="description-container">
                    <p className="description description--styles">
                        {description}
                    </p>
                </div>
                <div className="btn-container">
                    <Link
                        href={btnPath}
                        className="navBar-link"
                        style={{ textDecoration: "none" }}
                    >
                        <a className="btn-path btn-path--styles">{btnTxt}</a>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Service;
