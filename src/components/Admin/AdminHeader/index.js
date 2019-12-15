import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Drawer, Icon } from "antd";
import { useWindowSize } from "../../../utils/hooks";

const WebAdminHeader = ({ currentUser, onClick, navList, selectedNavItem }) => (
    <div
        className="flex justify-between py-4 px-2"
        style={{
            borderTop: "6px solid rgb(38, 38, 38)",
            borderBottom: "6px solid rgb(38, 38, 38)",
            marginTop: 24,
            overflow: "scroll",
        }}
    >
        <span
            className="leading-loose text-lg"
            style={{
                fontSize: 14,
                margin: "4px 24px 4px 24px",
                fontFamily: "AvenirNextLT",
                verticalAlign: "middle",
            }}
        >
            Hello, <b>{currentUser.attributes.email}</b>
        </span>
        <button
            onClick={onClick}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        >
            Logout
        </button>
    </div>
);

const MobileAdminHeader = ({ currentUser, onClick, navList, selectedNavItem }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="fixed p-4 left-0 top-0">
                <button onClick={() => setIsOpen(!isOpen)}>
                    <Icon type="menu" style={{ fontSize: 24 }} />
                </button>
            </div>
            <Drawer placement="left" closable onClose={() => setIsOpen(false)} visible={isOpen}>
                <div className="flex flex-col flex-start w-full" style={{ width: "80vw" }}>
                    <span className="leading-loose text-lg">Hello</span>
                    <span className="leading-loose text-lg">
                        <b>{currentUser.attributes.email}</b>
                    </span>
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
                    <button
                        onClick={onClick}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border w-24 border-blue-700 rounded"
                    >
                        Logout
                    </button>
                </div>
            </Drawer>
        </>
    );
};

const AdminHeader = ({ ...props }) => {
    const windowSize = useWindowSize();
    const isMobile = windowSize.width < 765;
    if (!props.currentUser) return null;
    return isMobile ? <MobileAdminHeader {...props} /> : <WebAdminHeader {...props} />;
};

AdminHeader.propTypes = {
    currentUser: PropTypes.object,
    onClick: PropTypes.func,
};

AdminHeader.defaultProps = {
    currentUser: null,
    onClick: () => {},
};

export default AdminHeader;
