import React from "react";

export class Hello extends React.Component {
    state = {
        counter: 0,
    }

    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    render() {
        return (
            <div>
                <button className="uk-button uk-button-default" onClick={this.increment}>Click Me</button>
                <p>You"ve pressed the button {this.state.counter} times.</p>
            </div>
        );
    }
}
