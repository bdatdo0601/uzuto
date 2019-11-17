import React from "react";
import Admin from "./containers/Admin";
import Home from "./containers/Home";
import Invitation from "./containers/Invitation";

export default [
    { path: "/", name: "Home", component: Home, exact: true },
    { path: "/invitation/:name", name: "Guest Invitation", component: Invitation },
    { path: "/linh-only", name: "Admin Page", component: Admin },
    { path: "*", name: "Error 404", component: () => <h1>Uh-oh</h1>, exact: true },
];
