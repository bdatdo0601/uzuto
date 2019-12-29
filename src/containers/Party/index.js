import React from "react";
import { groupBy } from "lodash";
import moment from "moment";
import { useQuery } from "../../utils/hooks";
import { listVenues, listEvents } from "../../graphql/queries";
import { Spin, Result, Row } from "antd";
import VenueDisplay from "../../components/VenueDisplay";
import EventDisplay from "../../components/EventDisplay";

export default function Party() {
    const { data: listVenuesData, loading: listVenuesLoading, errors: listVenuesErrors } = useQuery(
        listVenues,
        null,
        null,
        "API_KEY"
    );
    const { data: listEventsData, loading: listEventsLoading, errors: listEventsErrors } = useQuery(
        listEvents,
        null,
        null,
        "API_KEY"
    );
    if (listVenuesLoading || listEventsLoading) {
        return <Spin spinning />;
    }
    if (listVenuesErrors || listEventsErrors || !listVenuesData.listVenues || !listEventsData.listEvents) {
        return <Result status="error" title="Something wrong! blame Linh's brother" />;
    }
    const mainVenue = listVenuesData.listVenues.items[0];
    const events = listEventsData.listEvents.items;
    const groupedEventsByDate = groupBy(
        events,
        item => `${moment(item.time[0]).format("MMMM")} ${moment(item.time[0]).get("date")}`
    );
    const sortedDates = Object.keys(groupedEventsByDate).sort();
    return (
        <div>
            <h1 className="text-center text-5xl my-8 uppercase" style={{ fontFamily: "CorbelBold", fontWeight: "500" }}>
                Venue
            </h1>
            <VenueDisplay venue={mainVenue} />
            <h1
                className="text-center text-5xl uppercase"
                style={{ fontFamily: "CorbelBold", fontWeight: "500", marginTop: 42 }}
            >
                Schedule
            </h1>
            {sortedDates.map(date => (
                <div key={date}>
                    <h2
                        className="text-center text-6xl my-8 uppercase"
                        style={{ fontFamily: "CorbelBold", fontWeight: "500" }}
                    >
                        {date}
                    </h2>
                    <Row>
                        {groupedEventsByDate[date].map((item, itemIndex) => (
                            <EventDisplay
                                key={item.id}
                                span={
                                    groupedEventsByDate[date].length % 2 !== 0 &&
                                    itemIndex === groupedEventsByDate[date].length - 1
                                        ? 24
                                        : 12
                                }
                                event={item}
                            />
                        ))}
                    </Row>
                </div>
            ))}
        </div>
    );
}
