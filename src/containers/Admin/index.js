import React from "react";
import { Authenticator, SignUp, Greetings } from "aws-amplify-react";

const AdminContainer = () => {
    console.warn("not implemented");
    return (
        <Authenticator hide={[SignUp, Greetings]}>
            <div>Admin</div>
        </Authenticator>
    );
};

export default AdminContainer;
