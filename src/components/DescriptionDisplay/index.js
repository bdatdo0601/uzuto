import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";
import ImageDisplay from "../ImageDisplay";

const getStyleFromLocation = location => {
    switch (location) {
        case "top":
            return { maxHeight: 500, width: 500 };
        case "bottom":
            return { width: 800 };
        case "left":
            return { maxHeight: 500 };
        default:
            return {};
    }
};

export default function DescriptionDisplay({ description }) {
    const descriptions = description.content.split("\n").filter(item => item);
    console.log(descriptions);
    const imagesDisplay = location => (
        <Row type="flex" justify="center">
            {description.images.items.map(item => (
                <Col
                    span={description.images.items.length === 1 ? 24 : 6}
                    md={description.images.items.length === 1 ? 24 : 6}
                    sm={24}
                    xs={24}
                    key={item.imageLink}
                >
                    <ImageDisplay
                        item={item}
                        parentID={description.id}
                        subTitle={item.subTitle}
                        imageStyle={getStyleFromLocation(location)}
                    />
                </Col>
            ))}
        </Row>
    );
    return (
        <div className={description.imageLocation === "left" ? "text-center py-8" : "text-center py-8 px-8"}>
            {!description.imageLocation || description.imageLocation === "top"
                ? imagesDisplay(description.imageLocation)
                : null}
            <Row
                gutter={4}
                type="flex"
                justify="space-between"
                align="middle"
                style={description.imageLocation === "left" ? { borderLeft: "3px solid #c9c9c9" } : {}}
            >
                <Col
                    className="px-8 my-4 description-content"
                    lg={description.imageLocation === "left" ? 12 : 24}
                    md={24}
                    xs={24}
                    sm={24}
                >
                    {descriptions.map(content => (
                        <p
                            key={content}
                            className={description.imageLocation !== "top" ? "text-left" : ""}
                            style={{ fontSize: 16, margin: "4px 24px 4px 24px", fontFamily: "AvenirNextLT" }}
                        >
                            {content}
                        </p>
                    ))}

                    <p
                        className="text-right"
                        style={{
                            fontSize: 16,
                            margin: "4px 24px 4px 24px",
                            fontFamily: "AvenirNextLT",
                            paddingRight: 24,
                        }}
                    >
                        {description.signature}
                    </p>
                </Col>
                <Col xl={12} lg={12} md={24} xs={24} sm={24}>
                    {description.imageLocation === "left" ? imagesDisplay(description.imageLocation) : null}
                </Col>
            </Row>

            {description.imageLocation === "bottom" ? imagesDisplay(description.imageLocation) : null}
        </div>
    );
}
DescriptionDisplay.propTypes = {
    description: PropTypes.object.isRequired,
};
