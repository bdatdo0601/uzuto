import React from "react";
import PropTypes from "prop-types";
import { useWindowSize } from "../../utils/hooks";

export default function HomeSection({ borders, children, filledRow, hideMobileBorder }) {
    const windowSize = useWindowSize();
    let coloredBorder =
        windowSize.width < 765 && !hideMobileBorder
            ? ["borderLeft", "borderRight", "borderTop", "borderBottom"]
            : borders;
    return (
        <div
            className={`${
                filledRow ? "" : "md:w-1/2"
            } sm:w-full xs:w-full flex justify-center content-center items-center align-middle md:m-0 sm:my-5 text-center`}
            style={{
                ...coloredBorder.reduce(
                    (accumulator, currentBorder) => ({
                        ...accumulator,
                        [currentBorder]: "3px solid rgb(38,38,38)",
                    }),
                    windowSize.width > 765 ? {} : { width: "100%" }
                ),
            }}
        >
            {children}
        </div>
    );
}

HomeSection.propTypes = {
    borders: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.node.isRequired,
    filledRow: PropTypes.bool,
    hideMobileBorder: PropTypes.bool,
};

HomeSection.defaultProps = {
    borders: [],
    filledRow: false,
    hideMobileBorder: false,
};
