import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";
import ImageDisplay from "../ImageDisplay";

export default function DescriptionDisplay({ description }) {
    const imagesDisplay = images => (
        <Row type="flex" justify="space-around">
            {description.images.items.map(item => (
                <Col span={10} lg={10} md={12} sm={24} xs={24} key={item.imageLink}>
                    <ImageDisplay item={item} parentID={description.id} subTitle={item.subTitle} />
                </Col>
            ))}
        </Row>
    );
    return (
        <div className="text-center py-8">
            {!description.imageLocation || description.imageLocation === "top"
                ? imagesDisplay(description.images.items)
                : null}
            <Row>
                <Col className="px-8 my-4 description-content" span={description.imageLocation === "left" ? 18 : 24}>
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
                {description.imageLocation === "left" ? (
                    <Col span={6}>{imagesDisplay(description.images.items)}</Col>
                ) : null}
            </Row>

            {description.imageLocation === "bottom" ? imagesDisplay(description.images.items) : null}
        </div>
    );
}
DescriptionDisplay.propTypes = {
    description: PropTypes.object.isRequired,
};
