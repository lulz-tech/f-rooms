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
                <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
                    <nav className="uk-navbar-container uk-margin" uk-navbar="true" style={{ backgroundColor: "#fff" }}>
                        <div className="uk-navbar-left">
                            <button className="uk-button uk-margin-small-right uk-navbar-toggle" type="button" uk-toggle="target: #offcanvas-push" style={{ height: "48px" }}>
                                <i className="fa fa-bars"></i>
                            </button>
                        </div>

                        <div className="nav-overlay uk-navbar-right">

                            <a className="uk-navbar-toggle" uk-search-icon uk-toggle="target: .nav-overlay; animation: uk-animation-fade" href="#"><i className="fa fa-search"></i></a>

                        </div>

                        <div className="nav-overlay uk-navbar-left uk-flex-1" hidden>

                            <div className="uk-navbar-item uk-width-expand">
                                <form className="uk-search uk-search-navbar uk-width-1-1">
                                    <input className="uk-search-input" type="search" placeholder="Search..." autofocus="true" />
                                </form>
                            </div>

                            <a className="uk-navbar-toggle" uk-close uk-toggle="target: .nav-overlay; animation: uk-animation-fade" href="#"><i className="fa fa-times"></i></a>

                        </div>

                    </nav>
                </div>
                <div>
                    <div id="offcanvas-push" uk-offcanvas="mode: push; overlay: true">
                        <div className="uk-offcanvas-bar">
                            <h3>F-Rooms</h3>
                            <button className="uk-button uk-button-default uk-margin-small-right" type="button" uk-toggle="target: #modal-close-default">Sign in</button>


                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
