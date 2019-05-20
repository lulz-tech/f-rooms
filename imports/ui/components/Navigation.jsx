import React from "react";

export class Navigation extends React.Component {

    constructor(props) {
        super(props);

        this.state = this.getMeteorData();
        this.logout = this.logout.bind(this);
    }

    getMeteorData = () => {
        return { isAuthenticated: Meteor.userId() !== null };
    }

    logout(e) {
        e.preventDefault();
        Meteor.logout((err) => {
            if (err) {
                console.log(err.reason);
            } else {
                this.props.history.push("/login");
            }
        });
        this.props.history.push("/login");
    }

    render() {
        return (
            <div>
                <button className="uk-button uk-margin-small-right" type="button" uk-toggle="target: #offcanvas-push">
                    <i className="fa fa-bars"></i>
                </button>

                <div>
                    <div id="offcanvas-push" uk-offcanvas="mode: push; overlay: true">
                        <div className="uk-offcanvas-bar">
                            <h3>F-Rooms</h3>
                            <button className="uk-button uk-button-default uk-margin-small-right" type="button" uk-toggle="target: #modal-close-default">Sign in</button>


                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
