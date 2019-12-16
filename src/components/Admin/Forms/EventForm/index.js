import React, { useState, useCallback, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import debounce from "p-debounce";
import { Card, Form, Input, notification, DatePicker } from "antd";
import moment from "moment";

export default function EventForm({ form, id, title, defaultData, onChange, debounceTime, extra, suggestedVenues }) {
    const { getFieldDecorator, getFieldsValue } = form;
    const [isDisabled, setIsDisabled] = useState(false);
    const isSubcribedRef = useRef(true);

    const titleKey = `${id}-EventFormTitle`;
    const descriptionKey = `${id}-EventFormDescription`;
    const venueKey = `${id}-EventFormVenue`;
    const attireKey = `${id}-EventFormAttire`;
    const timeKey = `${id}-EventFormTime`;

    useEffect(
        () => () => {
            isSubcribedRef.current = false;
        },
        []
    );
    const onContentChange = useCallback(
        debounce(
            async () => {
                setIsDisabled(true);
                try {
                    const values = getFieldsValue([titleKey, descriptionKey, venueKey, attireKey, timeKey]);
                    await onChange({
                        title: values[titleKey],
                        description: values[descriptionKey],
                        venue: values[venueKey],
                        attire: values[attireKey],
                        time: values[timeKey],
                    });
                    notification.success({
                        message: `Updated ${title} content`,
                        description: "The information should already be reflected on main site",
                    });
                } catch (err) {
                    notification.error({
                        message: `Unable to update ${title} content`,
                        description: err.message,
                    });
                }
                if (isSubcribedRef.current) {
                    setIsDisabled(false);
                }
            },
            debounceTime,
            { trailing: true, leading: false }
        ),
        []
    );

    if (!id) return <span>Please provide an ID</span>;

    return (
        <>
            <Card
                className="w-full text-left"
                title={<span className="text-2xl">{title}</span>}
                style={{ marginBottom: 16 }}
                extra={extra}
            >
                <Form.Item label={<span className="text-xl">Title</span>}>
                    {getFieldDecorator(titleKey, {
                        initialValue: defaultData.title,
                    })(<Input onChange={onContentChange} disabled={isDisabled} />)}
                </Form.Item>
                <Form.Item label={<span className="text-xl">Time</span>}>
                    {getFieldDecorator(timeKey, {
                        initialValue: defaultData.time ? defaultData.time.map(item => moment(item)) : [],
                    })(
                        <DatePicker.RangePicker
                            showTime
                            format="MM-DD HH:mm a"
                            className="w-1/2"
                            onChange={onContentChange}
                        />
                    )}
                </Form.Item>
                <Form.Item label={<span className="text-xl">Description</span>}>
                    {getFieldDecorator(descriptionKey, {
                        initialValue: defaultData.description,
                    })(<Input.TextArea onChange={onContentChange} autoSize={{ minRows: 5 }} disabled={isDisabled} />)}
                </Form.Item>
                <Form.Item label={<span className="text-xl">Venue</span>}>
                    {getFieldDecorator(venueKey, {
                        initialValue: defaultData.venue,
                    })(<Input onChange={onContentChange} disabled={isDisabled} />)}
                </Form.Item>
                <Form.Item label={<span className="text-xl">Attire</span>}>
                    {getFieldDecorator(attireKey, {
                        initialValue: defaultData.attire,
                    })(<Input onChange={onContentChange} disabled={isDisabled} />)}
                </Form.Item>
            </Card>
        </>
    );
}

EventForm.propTypes = {
    form: PropTypes.object.isRequired,
    title: PropTypes.string,
    defaultData: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        venue: PropTypes.string,
        attire: PropTypes.string,
        time: PropTypes.array,
    }),
    debounceTime: PropTypes.number,
    onChange: PropTypes.func,
    extra: PropTypes.object,
    suggestedVenues: PropTypes.arrayOf(PropTypes.string),
};

EventForm.defaultProps = {
    title: "",
    defaultData: {
        title: "",
        description: "",
        venue: "",
        attire: "",
        time: [],
    },
    onChange: () => {},
    debounceTime: 1000,
    extra: null,
    suggestedVenues: [],
};
