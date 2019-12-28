import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";
import ImageDisplay from "../ImageDisplay";

const getStyleFromLocation = location => {
    switch (location) {
        case "top":
            return { maxHeight: 600, minHeight: 500, width: "70%" };
        case "bottom":
            return {};
        case "left":
            return { width: "100%" };
        default:
            return {};
    }
};

export default function DescriptionDisplay({ description }) {
    const imagesDisplay = location => (
        <Row type="flex" justify="space-around">
            {description.images.items.map(item => (
                <Col md={12} sm={24} xs={24} key={item.imageLink}>
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
        <div className="text-center py-8">
            {!description.imageLocation || description.imageLocation === "top"
                ? imagesDisplay(description.imageLocation)
                : null}
            <Row gutter={4} type="flex" justify="space-between" align="middle">
                <Col
                    className="px-8 my-4 description-content"
                    lg={description.imageLocation === "left" ? 12 : 24}
                    md={24}
                    xs={24}
                    sm={24}
                >
                    <p style={{ fontSize: 16, margin: "4px 24px 4px 24px", fontFamily: "AvenirNextLT" }}>
                        {description.content}
                    </p>
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
