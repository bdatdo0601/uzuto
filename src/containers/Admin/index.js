import React, { useState, useEffect } from "react";
import { Result } from "antd";
import { useRouteMatch, Switch, Route, useLocation } from "react-router-dom";
import { Authenticator, SignUp, Greetings } from "aws-amplify-react";
import { Auth } from "aws-amplify";
import AdminHeader from "../../components/Admin/AdminHeader";
import NavigationBar from "../../components/NavigationBar";
import GuestManagement from "./GuestManagement";
import WebsiteInforForm from "./WebsiteInfoForm";
import ScheduleForm from "./ScheduleForm";
import VenueManagement from "./VenueManagement";

export const adminRoute = [
    { path: "/", name: "Wedding Content", component: props => <WebsiteInforForm {...props} />, exact: true },
    { path: "/venue", name: "Venue Management", component: props => <VenueManagement {...props} />, exact: true },
    { path: "/schedule", name: "Schedule Management", component: props => <ScheduleForm {...props} />, exact: true },
    { path: "/guest", name: "Guest Management", component: props => <GuestManagement {...props} />, exact: true },
    {
        path: "*",
        name: "Admin 404",
        component: () => <Result status="404" title="Unable to found route" subTitle="Are you sure Linh?" />,
        exact: true,
        hiddenNav: true,
    },
];

const AdminContainer = props => {
    const [currentUser, setCurrentUser] = useState(null);
    const { path } = useRouteMatch();
    const currentLocation = useLocation();
    useEffect(() => {
        let isSubscribed = true;
        Auth.currentAuthenticatedUser()
            .then(user => {
                if (isSubscribed) {
                    setCurrentUser(user);
                }
            })
            .catch(() => {
                if (isSubscribed) {
                    setCurrentUser(null);
                }
            });
        return () => {
            isSubscribed = false;
        };
    }, [setCurrentUser, props.authState]);
    if (!currentUser) return null;
    return (
        <>
            <AdminHeader
                currentUser={currentUser}
                navList={adminRoute
                    .filter(item => !item.hiddenNav)
                    .map(item => ({ ...item, path: `${path}${item.path}` }))}
                selectedNavItem={{
                    ...adminRoute.find(route => `${path}${route.path}` === currentLocation.pathname),
                    path: currentLocation.pathname,
                }}
                onClick={() => Auth.signOut()}
            />
            <NavigationBar
                navList={adminRoute
                    .filter(item => !item.hiddenNav)
                    .map(item => ({ ...item, path: `${path}${item.path}` }))}
                selectedNavItem={{
                    ...adminRoute.find(route => `${path}${route.path}` === currentLocation.pathname),
                    path: currentLocation.pathname,
                }}
                hideMobile
                marginLess
            />
            <Switch>
                {adminRoute.map(route => (
                    <Route key={route.name} {...route} path={`${path}${route.path}`} />
                ))}
            </Switch>
        </>
    );
};

const AdminContainerWithAuth = props => {
    return (
        <Authenticator hide={[SignUp, Greetings]}>
            <AdminContainer {...props} />
        </Authenticator>
    );
};

export default AdminContainerWithAuth;
