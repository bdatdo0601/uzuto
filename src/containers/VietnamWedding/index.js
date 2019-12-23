import React from "react";
import { useQuery } from "../../utils/hooks";
import { listVenues } from "../../graphql/queries";
import { Spin, Result } from "antd";
import VenueDisplay from "../../components/VenueDisplay";

export default function VietnamWedding() {
    const { data: listVenuesData, loading: listVenuesLoading, errors: listVenuesErrors } = useQuery(
        listVenues,
        null,
        null,
        "API_KEY"
    );
    if (listVenuesLoading) {
        return <Spin spinning />;
    }
    if (listVenuesErrors || !listVenuesData.listVenues) {
        return <Result status="error" title="Something wrong! blame Linh's brother" />;
    }
    const mainVenue = listVenuesData.listVenues.items[listVenuesData.listVenues.items.length - 1];
    return (
        <div>
            <h1 className="text-center text-5xl my-8 uppercase" style={{ fontFamily: "CorbelBold", fontWeight: "500" }}>
                Another Celebration!
            </h1>
            {mainVenue && <VenueDisplay venue={mainVenue} />}
        </div>
    );
}
