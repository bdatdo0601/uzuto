import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Drawer, Icon } from "antd";
import { useWindowSize } from "../../utils/hooks";

const WebNavigationBar = ({ navList, selectedNavItem, marginLess }) => (
    <div
        className="flex justify-center py-4"
        style={{
            borderTop: marginLess ? "none" : "6px solid rgb(38, 38, 38)",
            borderBottom: "6px solid rgb(38, 38, 38)",
            marginTop: marginLess ? 0 : 24,
            overflow: "scroll",
        }}
    >
        {navList.map(navItem => (
            <Link key={navItem.path} to={navItem.path}>
                <h4
                    style={{
                        fontSize: 14,
                        margin: "4px 24px 4px 24px",
                        fontFamily: "AvenirNextLT",
                        fontWeight: selectedNavItem && navItem.path === selectedNavItem.path ? "bold" : "normal",
                    }}
                >
                    {navItem.name.toUpperCase()}
                </h4>
            </Link>
        ))}
    </div>
);

const MobileNavigationBar = ({ navList, selectedNavItem, hideMobile }) => {
    const [isOpen, setIsOpen] = useState(false);
    if (hideMobile) return null;
    return (
        <>
            <div className="fixed p-4 left-0 top-0">
                <button onClick={() => setIsOpen(!isOpen)}>
                    <Icon type="menu" style={{ fontSize: 24 }} />
                </button>
            </div>
            <Drawer placement="left" closable onClose={() => setIsOpen(false)} visible={isOpen}>
                <div className="flex flex-col flex-start w-full" style={{ width: "80vw" }}>
                    {navList.map(navItem => (
                        <Link key={navItem.path} to={navItem.path} onClick={() => setIsOpen(false)}>
                            <h4
                                style={{
                                    fontSize: 20,
                                    margin: "24px 4px 24px 16px",
                                    fontFamily: "AvenirNextLT",
                                    fontWeight:
                                        selectedNavItem && navItem.path === selectedNavItem.path ? "bold" : "normal",
                                }}
                            >
                                {navItem.name.toUpperCase()}
                            </h4>
                        </Link>
                    ))}
                </div>
            </Drawer>
        </>
    );
};

const NavigationBar = ({ ...props }) => {
    const windowSize = useWindowSize();
    const isMobile = windowSize.width < 765;
    return isMobile ? <MobileNavigationBar {...props} /> : <WebNavigationBar {...props} />;
};

NavigationBar.propTypes = {
    navList: PropTypes.arrayOf(
        PropTypes.shape({
            path: PropTypes.string,
        })
    ),
    selectedNavItem: PropTypes.shape({
        path: PropTypes.string,
    }),
    hideMobile: PropTypes.bool,
    marginLess: PropTypes.bool,
};

NavigationBar.defaultProps = {
    navList: [],
    hideMobile: false,
    marginLess: false,
    selectedNavItem: null,
};

export default NavigationBar;
