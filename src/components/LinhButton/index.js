import React from "react";
import PropTypes from "prop-types";
import "./index.css";

export default function LinhButton({ children, textProps, ...props }) {
    return (
        <button
            {...props}
            className="border-black border-solid border-2 py-3 px-10 linh-button"
            style={{ outline: "none", boxShadow: "8px 8px 0px 2px #000" }}
        >
            <span className="uppercase text-xl font-bold" style={{ fontFamily: "AvenirNextLT" }} {...textProps}>
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
