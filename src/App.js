import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import routes from "./routes";

Amplify.configure(awsconfig);

function App() {
    return (
        <Router>
            <Switch>
                {routes.map(route => (
                    <Route key={route.name} {...route} />
                ))}
            </Switch>
        </Router>
    );
}

export default App;
