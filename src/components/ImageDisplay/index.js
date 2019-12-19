import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Storage } from "aws-amplify";

export default function ImageDisplay({ parentID, subTitle, item }) {
    const [imageLink, setImageLink] = useState(null);
    useEffect(() => {
        Storage.get(`${parentID}/${item.imageLink}`).then(setImageLink);
    }, [item, parentID]);
    return (
        <div className="my-4">
            {imageLink && <img src={imageLink} alt={item.imageLink} style={{ width: "100%" }} />}
            {subTitle && (
                <span
                    style={{
                        fontSize: 16,
                        margin: "4px 24px 4px 24px",
                        fontFamily: "AvenirNextLT",
                        paddingRight: 24,
                        color: "#c9c9c9",
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
