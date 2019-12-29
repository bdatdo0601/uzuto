import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";
import { Storage } from "aws-amplify";

export default function VenueDisplay({ venue }) {
    const [image, setImage] = useState(null);
    useEffect(() => {
        if (venue.id) {
            Storage.get(`${venue.id}/${venue.id}Image`).then(setImage);
        } else {
        }
    }, [venue.id]);
    return (
        <Row className="my-8" style={{ borderLeft: "3px solid #c9c9c9", paddingLeft: 16, fontFamily: "AvenirNextLT" }}>
            <Col
                xl={image ? 14 : 24}
                lg={image ? 14 : 24}
                md={image ? 12 : 24}
                sm={24}
                xs={24}
                style={{ paddingRight: 16 }}
            >
                <h3 className="text-xl" style={{ fontWeight: "bold" }}>
                    {venue.title}
                </h3>
                <h1 className="text-lg" style={{ fontWeight: "normal" }}>
                    {venue.address}
                </h1>
                <a
                    className="text-lg underline text-gray-500"
                    href={`https://maps.google.com/?q=${venue.address}`}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    View on Maps
                </a>
                {venue.description.split("\n").map((item, index) => (
                    <p className="text-base" key={item + index} style={{ fontSize: "AvenirNextLT" }}>
                        {item}
                    </p>
                ))}
            </Col>
            {image ? (
                <Col xl={10} lg={10} md={12} sm={24} xs={24}>
                    <img
                        src={image}
                        alt={`${venue.id}`}
                        style={{ width: "100%", maxHeight: 350, textAlign: "right", objectFit: "cover" }}
                    />
                </Col>
            ) : null}
        </Row>
    );
}

VenueDisplay.propTypes = {
    venue: PropTypes.object.isRequired,
};
