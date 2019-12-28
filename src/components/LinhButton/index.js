import React from "react";
import PropTypes from "prop-types";
import "./index.css";

export default function LinhButton({ children, textProps, ...props }) {
    return (
        <button
            {...props}
            className="border-black border-solid border-2 py-2 px-8 linh-button my-4"
            style={{ ...props.style, outline: "none", boxShadow: "8px 8px 0px 2px #000" }}
        >
            <span className="uppercase text-lg font-bold" style={{ fontFamily: "AvenirNextLT" }} {...textProps}>
                {children}
            </span>
        </button>
    );
}

LinhButton.propTypes = {
    children: PropTypes.string.isRequired,
    textProps: PropTypes.object,
};

LinhButton.defaultProps = {
    textProps: {},
};
