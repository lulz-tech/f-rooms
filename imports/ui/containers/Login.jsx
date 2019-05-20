import React from "react";

import { LoginForm } from "../components/LoginForm";

import { RegisterForm } from "../components/RegisterForm";

const REGISTER_MODE = "register";
const LOGIN_MODE = "login";

export class LoginModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mode: LOGIN_MODE
        }
    }

    onChangeModeClick = (e) => {
        e.preventDefault();

        const mode = this.state.mode === LOGIN_MODE ? REGISTER_MODE : LOGIN_MODE;
        this.setState({
            mode
        });
    }

    render() {
        return (
            <div id="modal-close-default" uk-modal="true" className="uk-modal-full">
                <div className="uk-modal-dialog uk-modal-body" style={{ minHeight: "calc(100vh)" }}>
                    <button className="uk-modal-close-default" type="button" uk-close="true">
                    </button>

                    <div className="uk-width-medium uk-padding-small uk-scrollspy-inview uk-animation-fade uk-margin-auto"
                        uk-scrollspy="cls: uk-animation-fade">

                        {
                            this.state.mode === LOGIN_MODE ?
                                (<LoginForm onModeToggle={this.onChangeModeClick} />)
                                :
                                (<RegisterForm onModeToggle={this.onChangeModeClick} />)
                        }
                    </div>
                </div>
            </div>
        );
    }
}
