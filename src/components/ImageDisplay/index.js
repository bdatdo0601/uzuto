import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Storage } from "aws-amplify";

export default function ImageDisplay({ parentID, subTitle, item, imageStyle }) {
    const [imageLink, setImageLink] = useState(null);
    useEffect(() => {
        Storage.get(`${parentID}/${item.imageLink}`).then(setImageLink);
    }, [item, parentID]);
    return (
        <div
            className="my-4 mx-4"
            style={{ display: "flex", alignContent: "center", flexDirection: "column", alignItems: "center" }}
        >
            {imageLink && (
                <img
                    src={imageLink}
                    alt={item.imageLink}
                    style={{
                        objectFit: "cover",
                        marginBottom: 2,
                        ...imageStyle,
                    }}
                />
            )}
            {subTitle && (
                <span
                    className="my-4"
                    style={{
                        fontSize: 15,
                        padding: "0px 24px 4px 24px",
                        fontFamily: "AvenirNextLT",
                        paddingRight: 24,
                        color: "#838383",
                    }}
                >
                    {subTitle}
                </span>
            )}
        </div>
    );
}

ImageDisplay.propTypes = {
    item: PropTypes.object.isRequired,
    subTitle: PropTypes.string,
    parentID: PropTypes.string.isRequired,
};

ImageDisplay.defaultProps = {
    subTitle: null,
};
