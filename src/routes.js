import React from "react";
import { Result } from "antd";
import Admin from "./containers/Admin";
import Home from "./containers/Home";
import Invitation from "./containers/Invitation";
import Welcome from "./containers/Welcome";
import Us from "./containers/Us";
import Registry from "./containers/Registry";

export default [
    { path: "/", name: "Home", component: Home, exact: true },
    { path: "/welcome", name: "Welcome", component: Welcome, exact: true },
    { path: "/us", name: "Us", component: Us, exact: true },
    { path: "/party", name: "Party", component: () => <div>Party</div>, exact: true },
    { path: "/accommodations", name: "Accommodations", component: () => <div>Accommodations</div>, exact: true },
    { path: "/travel", name: "Travel", component: () => <div>Trave</div>, exact: true },
    { path: "/vietnamwedding", name: "Vietnam Wedding", component: () => <div>Vietnam Wedding</div>, exact: true },
    { path: "/rsvp", name: "RSVP", component: () => <div>RSVP</div>, exact: true },
    { path: "/registry", name: "Registry", component: Registry, exact: true },
    { path: "/invitation/:name", name: "Guest Invitation", component: Invitation, hiddenNav: true },
    { path: "/linh-only", name: "Admin Page", component: Admin, hiddenNav: true },
    {
        path: "*",
        name: "Error 404",
        component: () => (
            <Result status="404" title="Unable to found route" subTitle="Are you sure Linh or Linh's friends?" />
        ),
        exact: true,
        hiddenNav: true,
    },
];
