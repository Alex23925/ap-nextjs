import React, { Component } from "react";
import styles from "../styles/burger.scss";

export class Burger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: "",
            fade: "",
            clicked: false,
        };
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler() {
        console.log("clicked");
        if (!this.state.clicked) {
            this.setState({
                open: "open",
                fade: "fade",
                clicked: true,
            });
            this.props.setBurgerClicked(true);
        } else if (this.state.clicked) {
            this.setState({
                open: "",
                fade: "",
                clicked: false,
            });
            this.props.setBurgerClicked(false);
        }
    }

    render() {
        return (
            <div className="bg-nav">
                <div className="logo-container">
                    <img
                        className="logo"
                        src="https://authorspress.com/wp-content/uploads/2019/04/Logo_AuthorsPress_Colored.png"
                        alt="logo"
                    />
                </div>
                <div className="burger-container">
                    <a
                        onClick={this.onClickHandler}
                        className={`${this.state.open} navicon-button burger burger--styles x`}
                    >
                        <div className="navicon"></div>
                    </a>
                </div>
            </div>
        );
    }
}

export default Burger;
