import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import TitleHeader from "../../components/TitleHeader";
import WeddingInfoContext from "../../context/weddingInfoContext";
import { getFormattedWeddingDateFromContext } from "../../utils";
import NavigationBar from "../../components/NavigationBar";
import PageFooter from "../../components/PageFooter";
import GlobalContext from "../../context";

const MainLayout = ({ children, routes, location, ...props }) => {
    const { adminRoutes } = useContext(GlobalContext);
    const { USA, Vietnam } = useContext(WeddingInfoContext);
    const currentLocation = useLocation();
    const displayedRoutes = routes.filter(route => !route.hiddenNav);
    return (
        <div className="p-10">
            <TitleHeader
                title="Fritz & Linh"
                subtitle={`${getFormattedWeddingDateFromContext(USA)} ${
                    USA.shortLocation
                } | ${getFormattedWeddingDateFromContext(Vietnam)} ${Vietnam.shortLocation}`}
            />
            {!adminRoutes.some(path => currentLocation.pathname.includes(path)) && (
                <NavigationBar
                    navList={displayedRoutes}
                    selectedNavItem={routes.find(route => route.path === currentLocation.pathname)}
                />
            )}
            {React.cloneElement(children, { ...props })}
            <PageFooter creator="Dat Do" />
        </div>
    );
};

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
    routes: PropTypes.arrayOf(
        PropTypes.shape({
            path: PropTypes.string,
        })
    ),
};

MainLayout.defaultProps = {
    routes: [],
};

export default MainLayout;
