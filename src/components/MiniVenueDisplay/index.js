import React, { useState, useEffect } from "react";
import { Col } from "antd";
import { Storage } from "aws-amplify";

export default function MiniVenueDisplay({ venue }) {
    const [image, setImage] = useState(null);
    useEffect(() => {
        if (venue.id) {
            Storage.get(`${venue.id}/${venue.id}Image`).then(setImage);
        } else {
        }
    }, [venue.id]);
    return (
        <Col
            span={8}
            xl={8}
            lg={8}
            md={12}
            sm={12}
            xs={24}
            style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                fontFamily: "AvenirNextLT",
                paddingLeft: 8,
                paddingRight: 8,
            }}
        >
            {image && (
                <img
                    src={image}
                    alt={venue.id}
                    style={{
                        height: 200,
                        width: 200,
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "3px solid black",
                        margin: "0 auto",
                    }}
                />
            )}
            <h3
                className="text-xl uppercase px-16"
                style={{ fontWeight: "bold", fontFamily: "CorbelBold", marginTop: 16 }}
            >
                {venue.title}
            </h3>
            <h3 className="px-16" style={{ fontWeight: "normal", fontSize: 15 }}>
                {venue.address}
            </h3>
            <p className="text-center px-16" style={{ marginTop: 4, fontSize: 17 }}>
                {venue.description}
            </p>
        </Col>
    );
}
