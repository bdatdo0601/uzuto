import React from "react";
import { Col } from "antd";
import moment from "moment";

export default function EventDisplay({ event, span }) {
    const descriptions = event.description.split("\n");
    return (
        <Col
            className="my-8"
            style={{ borderLeft: "2px solid #c9c9c9", paddingLeft: 16, fontFamily: "AvenirNextLT", paddingRight: 16 }}
            xl={span}
            lg={span}
            md={span}
            xs={24}
            sm={24}
        >
            <h3 className="text-2xl">{moment(event.time[0]).format("hh:mm a")}</h3>
            <h3 className="text-2xl" style={{ fontWeight: "bold" }}>
                {event.title}
            </h3>
            {descriptions.map(item => (
                <p key={item} className="text-base">
                    {item}
                </p>
            ))}
            <h3 className="text-xl italic">Venue</h3>
            <p className="text-base">{event.venue}</p>
            <h3 className="text-xl italic">Attire</h3>
            <p className="text-base">{event.attire}</p>
        </Col>
    );
}
