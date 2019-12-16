import React, { useState, useEffect } from "react";
import { Form, Button, Spin, Result, notification } from "antd";
import uuid from "uuid";
import LinhButton from "../../../components/LinhButton";
import EventForm from "../../../components/Admin/Forms/EventForm";
import { listEvents } from "../../../graphql/queries";
import { deleteEvent, updateEvent, createEvent } from "../../../graphql/mutations";
import { useMutation, useQuery } from "../../../utils/hooks";

const queryVariables = { limit: 10000 };

export default Form.create({ name: "ScheduleForm" })(function ScheduleForm({ ...props }) {
    const [scheduleForm, setScheduleForm] = useState([]);
    const { data, loading, errors, refetch } = useQuery(listEvents, queryVariables);
    const { mutation: deleteEventMutation } = useMutation(deleteEvent);
    const { mutation: updateEventMutation } = useMutation(updateEvent);
    const { mutation: createEventMutation } = useMutation(createEvent);
    const [deleteLoading, setDeleteLoading] = useState(false);

    useEffect(() => {
        if (data.listEvents && data.listEvents.items) {
            setScheduleForm(data.listEvents.items.map(venue => venue.id));
        }
    }, [data.listEvents]);
    if (loading) {
        return <Spin spinning />;
    }
    if (!loading && (errors || !data.listEvents || !data.listEvents.items)) {
        return <Result status="error" title="Something wrong! Blame Dat" subTitle={JSON.stringify(errors)} />;
    }
    return (
        <Form className="text-center">
            <h1 className="text-4xl my-8">Schedule Management</h1>
            {scheduleForm.map((event, index) => (
                <EventForm
                    {...props}
                    key={event}
                    title={`Event ${index + 1}`}
                    id={event}
                    defaultData={data.listEvents ? data.listEvents.items.find(item => item.id === event) || {} : {}}
                    extra={
                        <Button
                            type="danger"
                            loading={deleteLoading}
                            disabled={deleteLoading}
                            onClick={async () => {
                                setDeleteLoading(true);
                                try {
                                    const deletingEvent = data.listEvents.items.find(item => item.id === event);
                                    if (deletingEvent) {
                                        await deleteEventMutation({ input: { id: event } });
                                    }
                                    setScheduleForm(scheduleForm.filter(id => event !== id));
                                } catch (err) {
                                    notification.error({
                                        message: "Something wrong",
                                        description: err.message,
                                    });
                                }
                                setDeleteLoading(false);
                                await refetch();
                            }}
                        >
                            Delete
                        </Button>
                    }
                    onChange={async updateEvent => {
                        const existingEvent = data.listEvents.items.find(
                            item => item.id.toString() === event.toString()
                        );
                        const rawInput = {
                            title: updateEvent.title,
                            description: updateEvent.description,
                            venue: updateEvent.venue,
                            attire: updateEvent.attire,
                            time: updateEvent.time,
                        };
                        const input = Object.keys(rawInput).reduce(
                            (acc, currentValue) => ({
                                ...acc,
                                ...(rawInput[currentValue] ? { [currentValue]: rawInput[currentValue] } : {}),
                            }),
                            {}
                        );
                        existingEvent
                            ? await updateEventMutation({ input: { ...input, id: event } })
                            : await createEventMutation({ input: { ...input, id: event } });
                        await refetch();
                    }}
                />
            ))}
            <LinhButton style={{ marginBottom: 16 }} onClick={() => setScheduleForm([...scheduleForm, uuid()])}>
                Add new event
            </LinhButton>
        </Form>
    );
});
