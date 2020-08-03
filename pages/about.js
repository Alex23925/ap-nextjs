import React, { Component } from 'react'

export class about extends Component {
    constructor(props) {
        super(props);
        this.state = {
            greetings: "Hello World",
        }
    }
    render() {
        return (
            <div>
                <h1 className="hello">{this.state.greetings}</h1>
            </div>
        )
    }
}

export default about
