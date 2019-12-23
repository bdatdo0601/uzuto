import React, { useState } from "react";
import { Form, Select, Button, Icon, Spin, Result, Tooltip, notification } from "antd";
import uuid from "uuid";
import LinhButton from "../../components/LinhButton";
import "./index.css";
import { listEvents, listVenues, listGuests } from "../../graphql/queries";
import { useQuery, useMutation } from "../../utils/hooks";
import { createGuest, updateGuest } from "../../graphql/mutations";
import { createEventAttendee } from "./queries";

const RSVP = Form.create({ name: "form" })(({ form }) => {
    const { getFieldDecorator } = form;
    const [guestFamily, setGuestFamily] = useState([]);
    const { data: listVenuesData, loading: listVenuesLoading, errors: listVenuesErrors } = useQuery(listVenues);
    const { data: listEventsData, loading: listEventsLoading, errors: listEventsErrors } = useQuery(listEvents);
    const { data: listGuestsData, loading: listGuestsLoading, errors: listGuestsErrors } = useQuery(listGuests);

    const { mutation: createGuestMutation } = useMutation(createGuest);
    const { mutation: updateGuestMutation } = useMutation(updateGuest);
    const { mutation: createEventAttendeeMutation } = useMutation(createEventAttendee);

    if (listVenuesLoading || listEventsLoading || listGuestsLoading) {
        return <Spin spinning />;
    }
    if (
        listVenuesErrors ||
        listEventsErrors ||
        listGuestsErrors ||
        !listVenuesData.listVenues ||
        !listEventsData.listEvents ||
        !listGuestsData.listGuests
    ) {
        return <Result status="error" title="Something wrong! blame Linh's brother" />;
    }
    const events = listEventsData.listEvents.items;
    const venues = listVenuesData.listVenues.items.slice(0, listVenuesData.listVenues.items.length - 1);
    const guestList = listGuestsData.listGuests.items;
    return (
        <Form className="text-center" style={{ fontFamily: "AvenirNextLT" }}>
            <div>
                <div
                    className="text-xl leading-loose rsvp"
                    style={{ display: "inline-flex", alignItems: "end", marginTop: 16 }}
                >
                    <span>I, </span>
                    <Form.Item>
                        {getFieldDecorator("name", {
                            initialValue: "",
                        })(
                            <input
                                type="text"
                                className="text-xl mx-2 py-0"
                                placeholder="YOUR NAME HERE"
                                style={{
                                    outline: "None",
                                    borderBottom: "1px solid black",
                                    lineHeight: 0,
                                    marginBottom: 0,
                                    paddingBottom: 0,
                                }}
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator("isAttending", {
                            initialValue: 1,
                        })(
                            <Select
                                type="text"
                                className="text-xl uppercase"
                                style={{ minWidth: 200 }}
                                dropdownMenuStyle={{ backgroundColor: "#fafafa" }}
                            >
                                <Select.Option value={1}>AM ATTENDING</Select.Option>
                                <Select.Option value={0}>AM NOT ATTENDING</Select.Option>
                            </Select>
                        )}
                    </Form.Item>
                    <span>the festivities</span>
                </div>
                <br style={{}} />
                {form.getFieldValue("isAttending") ? (
                    <div
                        className="text-xl leading-loose rsvp"
                        style={{ display: "inline-flex", alignItems: "end", flexWrap: "wrap" }}
                    >
                        <span className="mx-4">I will bring</span>
                        <Form.Item>
                            {getFieldDecorator("isExtraGuests", {
                                initialValue: 0,
                            })(
                                <Select
                                    type="text"
                                    className="text-xl uppercase"
                                    style={{ minWidth: 200 }}
                                    dropdownMenuStyle={{ backgroundColor: "#fafafa" }}
                                >
                                    <Select.Option value={0}>MY AWESOME SELF</Select.Option>
                                    <Select.Option value={1}>A DATE</Select.Option>
                                    <Select.Option value={2}>MY FAMILY</Select.Option>
                                </Select>
                            )}
                        </Form.Item>
                        {form.getFieldValue("isExtraGuests") === 1 && (
                            <>
                                ,
                                <Form.Item>
                                    {getFieldDecorator("guestDate", {
                                        initialValue: "",
                                    })(
                                        <input
                                            type="text"
                                            className="text-xl mx-2 py-0"
                                            placeholder="YOUR DATE's NAME"
                                            style={{
                                                outline: "None",
                                                borderBottom: "1px solid black",
                                                lineHeight: 0,
                                                marginBottom: 0,
                                                paddingBottom: 0,
                                            }}
                                        />
                                    )}
                                </Form.Item>
                            </>
                        )}
                        {form.getFieldValue("isExtraGuests") === 2 && (
                            <>
                                {guestFamily.map((item, index) => (
                                    <React.Fragment key={item}>
                                        ,
                                        <Form.Item>
                                            {getFieldDecorator(`guestFamily${index}`, {
                                                initialValue: "",
                                            })(
                                                <input
                                                    type="text"
                                                    className="text-xl mx-2 py-0"
                                                    placeholder={`FAMILY MEMBER #${index + 1}`}
                                                    style={{
                                                        outline: "None",
                                                        borderBottom: "1px solid black",
                                                        lineHeight: 0,
                                                        marginBottom: 0,
                                                        paddingBottom: 0,
                                                    }}
                                                />
                                            )}
                                        </Form.Item>
                                        <Icon
                                            type="close-circle"
                                            style={{ color: "#fafafa", marginTop: 10, marginRight: 4 }}
                                            onClick={() => setGuestFamily(guestFamily.filter(guest => guest !== item))}
                                        />
                                    </React.Fragment>
                                ))}
                                {guestFamily.length < 6 && (
                                    <Button
                                        type="dashed"
                                        size="small"
                                        style={{ marginTop: 10, marginLeft: 4, marginRight: 4 }}
                                        onClick={() => setGuestFamily([...guestFamily, uuid()])}
                                    >
                                        Add family member
                                    </Button>
                                )}
                            </>
                        )}
                        <span style={{ marginRight: 4 }}>and will be attending</span>
                        <Form.Item>
                            {getFieldDecorator("eventsAttending", {
                                initialValue: [],
                            })(
                                <Select
                                    mode="multiple"
                                    className="text-xl uppercase"
                                    style={{ minWidth: 130 }}
                                    placeholder={<span style={{ color: "black" }}>0 Events</span>}
                                    maxTagCount={0}
                                    maxTagPlaceholder={
                                        <span>
                                            {form.getFieldValue("eventsAttending")
                                                ? form.getFieldValue("eventsAttending").length
                                                : 0}{" "}
                                            Event(s)
                                        </span>
                                    }
                                    dropdownMenuStyle={{ backgroundColor: "#fafafa" }}
                                    dropdownStyle={{ width: 600 }}
                                >
                                    {events.map(event => (
                                        <Select.Option key={event.id} value={event.id}>
                                            <Tooltip title={event.title}>{event.title}</Tooltip>
                                        </Select.Option>
                                    ))}
                                </Select>
                            )}
                        </Form.Item>
                    </div>
                ) : null}
                <br />
                {form.getFieldValue("isAttending") ? (
                    <div
                        className="text-xl leading-loose"
                        style={{ display: "inline-flex", alignItems: "end", flexWrap: "wrap" }}
                    >
                        <span style={{ marginRight: 4 }}>I'll be hanging my hat at</span>
                        <Form.Item>
                            {getFieldDecorator("restLocation", {
                                initialValue: "",
                            })(
                                <Select
                                    className="text-xl uppercase"
                                    style={{ minWidth: 250 }}
                                    dropdownMenuStyle={{ backgroundColor: "#fafafa" }}
                                >
                                    {venues.map(venue => (
                                        <Select.Option key={venue.id} value={venue.id}>
                                            <Tooltip title={venue.title}>{venue.title}</Tooltip>
                                        </Select.Option>
                                    ))}
                                    <Select.Option value="">SOMEWHERE IN AUSTIN</Select.Option>
                                </Select>
                            )}
                        </Form.Item>
                    </div>
                ) : null}
                <br />
                {form.getFieldValue("isAttending") ? (
                    <div
                        className="text-xl leading-loose"
                        style={{ display: "inline-flex", alignItems: "end", flexWrap: "wrap" }}
                    >
                        <span style={{ marginRight: 4 }}>You'll find me dancing when they play</span>
                        <Form.Item>
                            {getFieldDecorator("songName", {
                                initialValue: "",
                            })(
                                <input
                                    type="text"
                                    className="text-xl mx-2 py-0"
                                    placeholder={"SONG NAME"}
                                    style={{
                                        outline: "None",
                                        borderBottom: "1px solid black",
                                        lineHeight: 0,
                                        marginBottom: 0,
                                        paddingBottom: 0,
                                    }}
                                />
                            )}
                        </Form.Item>
                    </div>
                ) : null}
                <p className="text-lg">You can reach me at</p>
                <Form.Item>
                    {getFieldDecorator("email", {
                        initialValue: "",
                    })(
                        <input
                            type="email"
                            className="text-lg"
                            placeholder="name@email.com"
                            style={{
                                outline: "None",
                                borderBottom: "1px solid black",
                                width: "30%",
                                marginBottom: 0,
                            }}
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator("phoneNumber", {
                        initialValue: "",
                    })(
                        <input
                            type="tel"
                            className="text-lg"
                            placeholder="(+1) 123-456-7891"
                            style={{
                                outline: "None",
                                borderBottom: "1px solid black",
                                width: "30%",
                            }}
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator("address1", {
                        initialValue: "",
                    })(
                        <input
                            type="text"
                            className="text-lg"
                            placeholder="100 Cloud Road"
                            style={{
                                outline: "None",
                                borderBottom: "1px solid black",
                                width: "30%",
                            }}
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator("address2", {
                        initialValue: "",
                    })(
                        <input
                            type="text"
                            className="text-lg"
                            placeholder="New York, NY 10000"
                            style={{
                                outline: "None",
                                borderBottom: "1px solid black",
                                width: "30%",
                            }}
                        />
                    )}
                </Form.Item>
                <LinhButton
                    style={{ marginBottom: 24, width: 300 }}
                    onClick={async () => {
                        const data = form.getFieldsValue();
                        const {
                            email,
                            name,
                            phoneNumber,
                            address1,
                            address2,
                            isAttending,
                            isExtraGuests,
                            restLocation,
                            songName,
                        } = data;
                        const existedGuest = guestList.find(existingGuest => email === existingGuest.email);
                        const getExtraGuest = () => {
                            if (!isExtraGuests) {
                                return [];
                            }
                            if (isExtraGuests === 1) {
                                return [data.guestDate];
                            }
                            return guestFamily.map((item, index) => data[`guestFamily${index}`]);
                        };
                        if (!name || !email) {
                            notification.error({
                                message: "Please provide your name and email",
                            });
                        }
                        try {
                            let guestID = "";
                            if (existedGuest) {
                                await updateGuestMutation({
                                    input: {
                                        id: existedGuest.id,
                                        name,
                                        email,
                                        phoneNumber,
                                        address: `${address1} ${address2}`,
                                        isAttending,
                                        isRsvp: true,
                                        rsvpTimeStamp: new Date(),
                                        companies: getExtraGuest(),
                                        restLocation,
                                        songName,
                                    },
                                });
                                guestID = existedGuest.id;
                            } else {
                                guestID = uuid();
                                await createGuestMutation({
                                    input: {
                                        id: guestID,
                                        name,
                                        email,
                                        phoneNumber,
                                        address: `${address1} ${address2}`,
                                        isVerified: false,
                                        isAttending,
                                        isRsvp: true,
                                        rsvpTimeStamp: new Date(),
                                        companies: getExtraGuest(),
                                        restLocation,
                                        songName,
                                    },
                                });
                            }
                            data.eventsAttending &&
                                (await Promise.all(
                                    data.eventsAttending.map(async event => {
                                        await createEventAttendeeMutation({
                                            input: {
                                                id: uuid(),
                                                eventID: event,
                                                guestID,
                                            },
                                        });
                                    })
                                ));
                            notification.success({
                                message: "You have rsvp'ed",
                                description: data.isAttending
                                    ? "We will be in touch soon"
                                    : "It would be nice to have you here....",
                            });
                            form.resetFields();
                        } catch (err) {
                            console.error(err);
                            notification.error({
                                message: "Something wrong",
                                description: "Please refresh the page and try again",
                            });
                        }
                    }}
                >
                    Submit
                </LinhButton>
            </div>
        </Form>
    );
});

export default RSVP;
