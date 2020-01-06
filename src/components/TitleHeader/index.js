import React from "react";

const TitleHeader = ({ title, subtitle }) => (
    <div className="w-full text-center">
        <h1 className="uppercase m-0" style={{ fontFamily: "CorbelBold", fontSize: 64 }}>
            {title}
        </h1>
        <h3 className="" style={{ fontFamily: "AvenirNextLT", fontSize: 18 }}>
            {subtitle}
        </h3>
    </div>
);

export default TitleHeader;
