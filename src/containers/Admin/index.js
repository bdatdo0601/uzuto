import React, { useState, useEffect } from "react";
import { Authenticator, SignUp, Greetings } from "aws-amplify-react";
import { Auth } from "aws-amplify";
import AdminHeader from "../../components/Admin/AdminHeader";

const AdminContainer = props => {
    const [currentUser, setCurrentUser] = useState(null);
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
    console.log(currentUser);
    return <>{currentUser && <AdminHeader currentUser={currentUser} />}</>;
};

const AdminContainerWithAuth = props => {
    return (
        <Authenticator hide={[SignUp, Greetings]}>
            <AdminContainer {...props} />
        </Authenticator>
    );
};

export default AdminContainerWithAuth;
