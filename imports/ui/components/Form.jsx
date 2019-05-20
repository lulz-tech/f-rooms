import React from "react";

export const FormTitle = (props) => (
    <h2 className="uk-text-center uk-margin">{props.title}</h2>
);

export const FormWrapper = (props) => (
    <div>
        <FormTitle title={props.title} />

        <form>
            <fieldset className="uk-fieldset">
                {props.children}
            </fieldset>
        </form>
    </div>
);

export const FormButton = (props) => (
    <div className="uk-margin">
        <button type="submit" onClick={props.onClick} className="uk-button uk-button-secondary uk-width-1-1">{props.title}</button>
    </div>
)

/**
 * Form input
 * 
 * @param {Object} props 
 * @param {String} props.icon - Icon name
 * @param {String} props.placeholder - Placeholder
 * @param {String} props.type - Input Type
 */
export const FormInput = (props) => (
    <div className="uk-margin">
        <div className="uk-inline uk-width-1-1">
            <i className={`uk-form-icon fa ${props.icon}`}></i>
            <input className="uk-input uk-border-pill" required="" name="password" placeholder={props.placeholder} type={props.type} />
        </div>
    </div>
)
