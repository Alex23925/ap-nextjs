import React, { Component } from "react";
import dynamic from "next/dynamic";
import { faSwatchbook, faEdit, faCubes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Service = dynamic(() => import("./Service"));

import styles from "../../styles/home-styles/services.scss";


export class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services: [
                {
                    icon: (
                        <FontAwesomeIcon
                            className="icon icon--styles"
                            icon={faSwatchbook}
                            style={{ width: "52px" }}
                        />
                    ),
                    title: "Publishing Packages",
                    description:
                        "Achieve your dream of becoming a published author through Authors Press’ publishing packages including specially designed packages that tailor fit your publishing needs.",
                    btnPath: "/PublishingPackages",
                },
                {
                    icon: (
                        <FontAwesomeIcon
                            className="icon icon--styles"
                            icon={faEdit}
                            style={{ width: "52px" }}
                        />
                    ),
                    title: "Editorial & Add-Ons",
                    description:
                        "The great Stephen King once said in his book On Writing, “To write is human, to edit is divine.” Editing transforms a manuscript from ordinary to extraordinary. No matter how skilled of a writer we are.",
                    btnPath: "/PublishingPackages",
                },
                {
                    icon: (
                        <FontAwesomeIcon
                            className="icon icon--styles"
                            icon={faCubes}
                            style={{ width: "52px" }}
                        />
                    ),
                    title: "Marketing Packages",
                    description:
                        "Publishing a book is one thing; delivering it to the right audiences is another. Authors Press provides various marketing strategies that ensures progressive and remarkable.",
                    btnPath: "/PublishingPackages",
                },
            ],
        };
    }
    render() {
        return (
            <div className="services-container">
                <h1 className="services-title service-title--styles">
                    Our Services
                </h1>
                <div className="services-list-container">
                    <Service service={this.state.services[0]} />
                    <Service service={this.state.services[1]} />
                    <Service service={this.state.services[2]} />
                </div>
            </div>
        );
    }
}

export default Services;
