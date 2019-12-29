import React from "react";
import { useQuery } from "../../utils/hooks";
import { listVenues } from "../../graphql/queries";
import { Spin, Result, Row } from "antd";
import MiniVenueDisplay from "../../components/MiniVenueDisplay";

export default function Accomodations() {
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
    const venues = listVenuesData.listVenues.items.slice(1, listVenuesData.listVenues.items.length - 1);
    return (
        <div>
            <h1 className="text-center text-5xl my-8 uppercase" style={{ fontFamily: "CorbelBold", fontWeight: "500" }}>
                Accommodations
            </h1>
            <Row className="my-8" type="flex" justify="space-around">
                {venues.map(item => (
                    <MiniVenueDisplay venue={item} key={item.id} />
                ))}
            </Row>
        </div>
    );
}
