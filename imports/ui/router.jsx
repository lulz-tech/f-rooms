import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./containers/App";

import { Hello } from "./containers/Hello";

export const renderRoutes = () => (
    <Router>
        <App>
            <Route exact={true} path="/" component={Hello} />
        </App>
    </Router>
);
