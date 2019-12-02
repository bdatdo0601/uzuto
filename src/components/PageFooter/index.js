import React from "react";

const PageFooter = ({ creator }) => (
    <div
        className="py-2 px-0 text-right uppercase w-full"
        style={{
            textAlign: "right",
            borderTop: "3px solid rgb(38, 38, 38)",
            borderBottom: "6px solid rgb(38, 38, 38)",
        }}
    >
        <h4
            style={{
                fontSize: 14,
                margin: "4px 4px 4px 0px",
                fontFamily: "AvenirNextLT",
                fontWeight: "normal",
                textAlign: "right",
            }}
        >
            Made by {creator}
        </h4>
    </div>
);

export default PageFooter;
