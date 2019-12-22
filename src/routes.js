import React from "react";
import { Result } from "antd";
import Admin from "./containers/Admin";
import Home from "./containers/Home";
import Invitation from "./containers/Invitation";
import Welcome from "./containers/Welcome";
import Us from "./containers/Us";
import Registry from "./containers/Registry";
import Party from "./containers/Party";
import VietnamWedding from "./containers/VietnamWedding";
import Travel from "./containers/Travel";
import Accomodations from "./containers/Accomodations";
import RSVP from "./containers/RSVP";

export default [
    { path: "/", name: "Home", component: Home, exact: true },
    { path: "/welcome", name: "Welcome", component: Welcome, exact: true },
    { path: "/us", name: "Us", component: Us, exact: true },
    { path: "/party", name: "Party", component: Party, exact: true },
    { path: "/accommodations", name: "Accommodations", component: Accomodations, exact: true },
    { path: "/travel", name: "Travel", component: Travel, exact: true },
    { path: "/vietnamwedding", name: "Vietnam Wedding", component: VietnamWedding, exact: true },
    { path: "/rsvp", name: "RSVP", component: RSVP, exact: true },
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
