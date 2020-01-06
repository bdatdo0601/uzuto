import React, { useMemo } from "react";
import { useQuery, useWindowSize } from "../../utils/hooks";
import { listVenues, getDescriptions } from "../../graphql/queries";
import { Spin, Result, Row, Col } from "antd";
import AIRPLANE_ICON from "../../assets/airplane.png";
import CAR_ICON from "../../assets/car.png";
import LinhButton from "../../components/LinhButton";
import DescriptionDisplay from "../../components/DescriptionDisplay";

export default function Travel() {
    const { data: listVenuesData, loading: listVenuesLoading, errors: listVenuesErrors } = useQuery(
        listVenues,
        null,
        null,
        "API_KEY"
    );
    const variables = useMemo(() => ({ id: "Travel" }), []);
    const { data: getDescriptionData, loading: descriptionLoading, errors: descriptionErrors } = useQuery(
        getDescriptions,
        variables,
        null,
        "API_KEY"
    );
    const { width } = useWindowSize();
    if (listVenuesLoading || descriptionLoading) {
        return <Spin spinning />;
    }
    if (listVenuesErrors || !listVenuesData.listVenues || descriptionErrors || !getDescriptionData.getDescriptions) {
        return <Result status="error" title="Something wrong! blame Linh's brother" />;
    }
    const mainVenue = listVenuesData.listVenues.items[0];
    const travelDescription = getDescriptionData.getDescriptions;
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
                style={{ width: "100%", paddingBottom: 16 }}
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
                    <a
                        href={`http://google.com/maps?q=${mainVenue.address}`}
                        style={{ outline: "none", color: "black", paddingBottom: 32 }}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <LinhButton style={{ marginTop: 24 }}>FIND DIRECTIONS</LinhButton>
                    </a>
                </Col>
            </Row>
            <DescriptionDisplay
                description={travelDescription}
                boxStyle={{
                    width: "100%",
                    textAlign: "center",
                    paddingLeft: width > 765 ? 200 : 0,
                    paddingRight: width > 765 ? 200 : 0,
                    marginTop: -32,
                }}
            />
        </div>
    );
}
