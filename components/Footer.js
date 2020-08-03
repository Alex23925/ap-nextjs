import Link from "next/link";

import {
    faMapMarkerAlt,
    faPhone,
    faAt,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../styles/footer.scss";

function Footer() {
    return (
        <div className="footer">
            <div className="left-child">
                <div className="footer-info-container">
                    <div className="flex footer-info footer-info--styles">
                        <FontAwesomeIcon
                            className="info"
                            icon={["fa", "map-marker-alt"]}
                            style={{ width: "32px" }}
                        />
                        <h2 className="info-txt">
                            Pittsburg Calfornia, 94565, USA
                        </h2>
                    </div>

                    <div className="flex footer-info footer-info--styles">
                        <FontAwesomeIcon
                            className="info"
                            icon={["fa", "phone"]}
                            style={{ width: "32px" }}
                        />
                        <h2 className="info-txt">(925)255-0098</h2>
                    </div>

                    <div className="flex footer-info footer-info--styles">
                        <FontAwesomeIcon
                            className="info"
                            icon={["fa", "at"]}
                            style={{ width: "32px" }}
                        />
                        <h2 className="info-txt">info@authorspress.com</h2>
                    </div>
                    <div className="certificate">
                        <a href="https://www.bbb.org/us/ca/pittsburg/profile/publishers/authors-press-1116-896738/#sealclick">
                            <img
                                className="certificate-img"
                                src="https://seal-goldengate.bbb.org/seals/blue-seal-200-65-bbb-896738.png"
                                alt="logo"
                            />
                            </a>
                    </div>
                </div>
            </div>

            <div className="right-child">
                <div className="icons-child">
                    <div className="socials-container">
                        <div className="socials-title-container">
                            <h2 className="socials-title socials-title--styles">
                                Stay connected
                            </h2>
                        </div>
                        <div className="socials">
                            <FontAwesomeIcon
                                className="social"
                                icon={["fab", "facebook-f"]}
                                style={{ width: "35px" }}
                            />
                            <FontAwesomeIcon
                                className="social"
                                icon={["fab", "twitter"]}
                                style={{ width: "38px" }}
                            />
                            <FontAwesomeIcon
                                className="social"
                                icon={["fab", "instagram"]}
                                style={{ width: "38px" }}
                            />
                            <FontAwesomeIcon
                                className="social"
                                icon={["fab", "youtube"]}
                                style={{ width: "38px" }}
                            />
                        </div>
                    </div>
                    <div className="payments-container">
                        <h2 className="payments-title payments-title--styles">
                            Payments Supported
                        </h2>
                        <div className="payments">
                            <FontAwesomeIcon
                                className="payment"
                                icon={["fab", "cc-visa"]}
                            />
                            <FontAwesomeIcon
                                className="payment"
                                icon={["fab", "cc-mastercard"]}
                            />
                            <FontAwesomeIcon
                                className="payment"
                                icon={["fab", "cc-amex"]}
                            />
                            <FontAwesomeIcon
                                className="payment"
                                icon={["fab", "cc-discover"]}
                            />
                        </div>
                    </div>
                </div>
                <div className="site-overview-container">
                    <p className="site-overview site-overview--styles">
                        Authors Press is an online self-publishing company and
                        book reseller catering to the needs of both published
                        and aspiring authors. Our services are centered on
                        providing the best solutions for our clients.
                    </p>
                    <div className="footer-policies-container">
                        <div className="policies">
                            <h2 className="policy policy--styles">
                                Testimonials
                            </h2>
                            <h2 className="policy policy--styles">
                                Terms & Conditions
                            </h2>
                            <h2 className="policy policy--styles">
                                Refunds Policy
                            </h2>
                            <h2 className="policy policy--styles">
                                Private Policy
                            </h2>
                        </div>
                    </div>

                    <div className="copyright-container">
                        <h2 className="copyright copyright--styles">
                            Copyright 2020 | Authors Press
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
