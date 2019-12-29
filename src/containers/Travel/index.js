import React from "react";
import { useQuery } from "../../utils/hooks";
import { listVenues } from "../../graphql/queries";
import { Spin, Result, Row, Col, Tooltip } from "antd";
import AIRPLANE_ICON from "../../assets/airplane.png";
import CAR_ICON from "../../assets/car.png";
import LinhButton from "../../components/LinhButton";

export default function Travel() {
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
    const mainVenue = listVenuesData.listVenues.items[0];
    return (
        <div>
            <h1 className="text-center text-5xl my-8 uppercase" style={{ fontFamily: "CorbelBold", fontWeight: "500" }}>
                Travel
            </h1>
            <Row
                className="my-8"
                type="flex"
                justify="center"
                align="middle"
                style={{ width: "100%", paddingBottom: 64 }}
            >
                <Col style={{ textAlign: "center" }} span={4} md={8} sm={24} xs={24}>
                    <div
                        style={{
                            margin: "0 auto",
                            padding: 40,
                            borderRadius: "50%",
                            backgroundColor: "black",
                            width: 200,
                            height: 200,
                        }}
                    >
                        <img
                            src={AIRPLANE_ICON}
                            alt="airplane_icon"
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                        />
                    </div>
                    <Tooltip
                        placement="bottom"
                        title={
                            <span className="italic" style={{ fontFamily: "AvenirNextLT" }}>
                                Link to Google flight
                            </span>
                        }
                        arrowPointAtCenter
                    >
                        <a
                            href={
                                "https://www.google.com/flights#flt=/m/01cx_.AUS.2020-05-15*AUS./m/01cx_.2020-05-19;c:USD;e:1;sd:1;t:f"
                            }
                            style={{ outline: "none", color: "black", paddingBottom: 32 }}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <LinhButton style={{ marginTop: 24 }}>FIND FLIGHTS</LinhButton>
                        </a>
                    </Tooltip>
                </Col>
                <Col style={{ textAlign: "center" }} span={4} md={8} sm={24} xs={24}>
                    <div
                        className="my-4"
                        style={{
                            margin: "0 auto",
                            padding: 40,
                            borderRadius: "50%",
                            backgroundColor: "black",
                            width: 200,
                            height: 200,
                        }}
                    >
                        <img
                            src={CAR_ICON}
                            alt="airplane_icon"
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                        />
                    </div>
                    <Tooltip
                        placement="bottom"
                        title={
                            <span className="italic" style={{ fontFamily: "AvenirNextLT" }}>
                                Link to Google map
                            </span>
                        }
                        arrowPointAtCenter
                    >
                        <a
                            href={`http://google.com/maps?q=${mainVenue.address}`}
                            style={{ outline: "none", color: "black", paddingBottom: 32 }}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <LinhButton style={{ marginTop: 24 }}>FIND DIRECTIONS</LinhButton>
                        </a>
                    </Tooltip>
                </Col>
            </Row>
        </div>
    );
}
