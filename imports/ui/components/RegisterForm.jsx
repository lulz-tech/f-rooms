import React from "react";

import { FormButton, FormWrapper, FormInput } from "./Form";

export const RegisterForm = (props) => (
    <div>
        <FormWrapper title="Register">
            <FormInput icon="fa-user" placeholder="Login" type="email" />
            <FormInput icon="fa-lock" placeholder="Password" type="password" />
            <FormInput icon="fa-lock" placeholder="Password repeat" type="password" />

            <FormButton title="Register" />
        </FormWrapper>

        <hr className="uk-divider-icon"></hr>
        <p style={{ textAlign: "center" }}>Already have an account? <a href="#" onClick={props.onModeToggle}>Sign in</a></p>
    </div>
)