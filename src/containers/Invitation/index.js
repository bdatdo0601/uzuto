import React from "react";
import { Connect } from "aws-amplify-react";
import { graphqlOperation } from "aws-amplify";
import { useParams } from "react-router-dom";
import ReactLoading from "react-loading";

import { listGuests } from "../../graphql/queries";

const Invitation = () => {
    const { name } = useParams();
    console.log(name);
    return (
        <Connect query={graphqlOperation(listGuests)}>
            {({ data: { listGuests }, loading, errors }) => {
                if (loading) {
                    return <ReactLoading type="balls" color="#ccc" height="20px" width="100px" />;
                }
                if (errors.length > 0 || !listGuests.items) {
                    return <div>{errors.toString()}</div>;
                }
                const guest = listGuests.items.find(g => g.name === name);
                if (!guest) {
                    return (
                        <h1
                            className="self-center text-2xl"
                            style={{
                                fontFamily: "CursiveFont",
                                color: "black",
                                padding: 16,
                            }}
                        >
                            {name} is not invited (yet) unfortunately
                        </h1>
                    );
                }
                const formattedName = guest.name.replace(/-/g, " ");
                return (
                    <h1
                        className="self-center text-2xl"
                        style={{
                            fontFamily: "CursiveFont",
                            color: "black",
                            padding: 16,
                        }}
                    >
                        You are invited to Linh Do & Andrew Fritz Wedding, {formattedName}
                    </h1>
                );
            }}
        </Connect>
    );
};

export default Invitation;
