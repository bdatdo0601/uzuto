import React from "react";
import Admin from "./containers/Admin";
import Home from "./containers/Home";
import Invitation from "./containers/Invitation";

export default [
    { path: "/", name: "Home", component: Home, exact: true },
    { path: "/welcome", name: "Welcome", component: () => <div>Welcome</div>, exact: true },
    { path: "/us", name: "Us", component: () => <div>Us</div>, exact: true },
    { path: "/party", name: "Party", component: () => <div>Party</div>, exact: true },
    { path: "/accommodations", name: "Accommodations", component: () => <div>Accommodations</div>, exact: true },
    { path: "/travel", name: "Travel", component: () => <div>Trave</div>, exact: true },
    { path: "/vietnamwedding", name: "Vietnam Wedding", component: () => <div>Vietnam Wedding</div>, exact: true },
    { path: "/rsvp", name: "RSVP", component: () => <div>RSVP</div>, exact: true },
    { path: "/registry", name: "Registry", component: () => <div>Registry</div>, exact: true },
    { path: "/invitation/:name", name: "Guest Invitation", component: Invitation, hiddenNav: true },
    { path: "/linh-only", name: "Admin Page", component: Admin, hiddenNav: true },
    { path: "*", name: "Error 404", component: () => <h1>Uh-oh</h1>, exact: true, hiddenNav: true },
];
