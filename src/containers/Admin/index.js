import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Authenticator, SignUp, Greetings, Connect } from "aws-amplify-react";
import { createGuest } from "../../graphql/mutations";
import { graphqlOperation, Auth } from "aws-amplify";

const AdminContainer = props => {
    const [currentUser, setCurrentUser] = useState(null);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [inviteLink, setInviteLink] = useState("");
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
    return (
        currentUser && (
            <Connect mutation={graphqlOperation(createGuest)}>
                {({ mutation }) => (
                    <>
                        <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            style={{ margin: 16 }}
                            onClick={async e => {
                                e.preventDefault();
                                setInviteLink("");
                                await Auth.signOut();
                            }}
                        >
                            Logout
                        </button>
                        <h1
                            className="self-center text-6xl"
                            style={{
                                fontFamily: "CursiveFont",
                                color: "black",
                                padding: 16,
                            }}
                        >
                            Invite someone
                        </h1>
                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                    Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="username"
                                    type="text"
                                    placeholder="Person Name"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Description
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                    id="description"
                                    type="text"
                                    placeholder="Lorem Ipsum"
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="button"
                                    onClick={async e => {
                                        e.preventDefault();
                                        setInviteLink("");
                                        const formattedName = name.replace(/ /g, "-");
                                        await mutation({
                                            input: {
                                                name: formattedName,
                                                description,
                                                isRsvp: false,
                                                rsvpTimeStamp: null,
                                                response: [],
                                            },
                                        });
                                        setInviteLink(`/invitation/${formattedName}`);
                                    }}
                                >
                                    Invite
                                </button>
                            </div>
                        </form>
                        {inviteLink && (
                            <h1
                                className="self-center text-2xl"
                                style={{
                                    fontFamily: "CursiveFont",
                                    color: "black",
                                    padding: 16,
                                }}
                            >
                                {name} has been added to invite list (
                                <Link to={inviteLink} style={{ color: "blue" }}>
                                    {process.env.PUBLIC_URL || "localhost:3000"}
                                    {inviteLink}
                                </Link>
                                )
                            </h1>
                        )}
                    </>
                )}
            </Connect>
        )
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
