import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./containers/App";

import { Home } from "./containers/Home";

export const renderRoutes = () => (
    <Router>
        <App>
            <Route exact={true} path="/" component={Home} />
        </App>
    </Router>
);
