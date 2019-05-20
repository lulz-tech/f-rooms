import React from "react";

import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

import { LoginModal } from "./Login.jsx";

const App = (props) => (
    <div>
        <Navigation />
        <div className="uk-section">
            <div className="uk-container">
                {props.children}
            </div>
        </div>
        <LoginModal />

        <Footer />
    </div>
)

export default App;
