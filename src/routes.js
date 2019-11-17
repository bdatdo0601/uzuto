import React from "react";
import Admin from "./containers/Admin";
import Home from "./containers/Home";

export default [
    { path: "/", name: "Home", component: Home, exact: true },
    { path: "/invitation/:name", name: "Guest Invitation", component: () => <h1>Guess Invitation</h1> },
    { path: "/linh-only", name: "Admin Page", component: Admin },
    { path: "*", name: "Error 404", component: () => <h1>Uh-oh</h1>, exact: true },
];
