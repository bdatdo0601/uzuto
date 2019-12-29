import React from "react";
import { Connect } from "aws-amplify-react";
import { graphqlOperation } from "aws-amplify";
import { useParams } from "react-router-dom";
import ReactLoading from "react-loading";
import INVITATION from "../../assets/invitation.png";

import { listGuests } from "../../graphql/queries";

const Invitation = () => {
    const { name } = useParams();
    return (
        <div className="w-full text-center">
            <Connect query={graphqlOperation(listGuests)}>
                {({ data: { listGuests }, loading, errors }) => {
                    if (loading) {
                        return <ReactLoading type="balls" color="#ccc" height="20px" width="100px" />;
                    }
                    if (errors.length > 0 || !listGuests.items) {
                        return <div>{errors.toString()}</div>;
                    }
                    const guest = listGuests.items.find(g => g.name.replace(/\W+/g, "") === name.replace(/\W+/g, ""));
                    if (!guest) {
                        return (
                            <h1
                                className="self-center text-2xl text-center"
                                style={{
                                    fontFamily: "CorbelBold",
                                    color: "red",
                                    padding: 16,
                                }}
                            >
                                <span style={{ color: "black" }}>{name}</span> is not invited (yet) unfortunately
                            </h1>
                        );
                    }
                    const formattedName = guest.name;
                    if (!guest.isVerified) {
                        return (
                            <h1
                                className="self-center text-2xl text-center"
                                style={{
                                    fontFamily: "CorbelBold",
                                    color: "red",
                                    padding: 16,
                                }}
                            >
                                <span style={{ color: "black" }}>{name}</span>, Linh and Fritz are verifying your
                                invitation
                            </h1>
                        );
                    }
                    if (!guest.isAttending) {
                        return (
                            <h1
                                className="self-center text-2xl text-center"
                                style={{
                                    fontFamily: "CorbelBold",
                                    color: "black",
                                    padding: 16,
                                }}
                            >
                                We will see you next time, <span style={{ color: "black" }}>{name}</span>
                            </h1>
                        );
                    }
                    return (
                        <>
                            <h1
                                className="self-center text-2xl"
                                style={{
                                    fontFamily: "CorbelBold",
                                    color: "black",
                                    padding: 16,
                                }}
                            >
                                Hello, {formattedName}
                            </h1>
                            <img
                                src={INVITATION}
                                alt="Invitation"
                                style={{ border: "3px solid black", margin: "0 auto", marginBottom: 32, height: 800 }}
                            />
                        </>
                    );
                }}
            </Connect>
        </div>
    );
};

export default Invitation;
