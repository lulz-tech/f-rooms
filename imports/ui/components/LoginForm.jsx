import React from "react";

import { FormButton, FormWrapper, FormInput } from "./Form";

export const LoginForm = (props) => (
    <div>
        <FormWrapper title="Sign In">
            <FormInput icon="fa-user" placeholder="Login" type="email" />
            <FormInput icon="fa-lock" placeholder="Password" type="password" />

            <FormButton title="Enter" />
        </FormWrapper>

        <hr className="uk-divider-icon"></hr>
        <p style={{ textAlign: "center" }}>No account? <a href="#" onClick={props.onModeToggle}>Create one</a></p>
    </div>
)