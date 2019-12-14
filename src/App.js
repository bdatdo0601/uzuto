import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import routes from "./routes";
import { ContextProvider } from "./context";
import MainLayout from "./layout/MainLayout";

Amplify.configure(awsconfig);

function App() {
    return (
        <ContextProvider>
            <Router>
                <MainLayout routes={routes}>
                    <Switch>
                        {routes.map(route => (
                            <Route key={route.name} {...route} />
                        ))}
                    </Switch>
                </MainLayout>
            </Router>
        </ContextProvider>
    );
}

export default App;
