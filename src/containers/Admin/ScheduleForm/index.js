import React, { useState } from "react";
import { Form, Button } from "antd";
import uuid from "uuid";
import LinhButton from "../../../components/LinhButton";
import EventForm from "../../../components/Admin/Forms/EventForm";

export default Form.create({ name: "ScheduleForm" })(function ScheduleForm({ ...props }) {
    const [scheduleForm, setScheduleForm] = useState([]);
    return (
        <Form className="text-center">
            <h1 className="text-4xl my-8">Schedule Management</h1>
            {scheduleForm.map((event, index) => (
                <EventForm
                    {...props}
                    key={event}
                    title={`Event ${index + 1}`}
                    id={event}
                    extra={
                        <Button type="danger" onClick={() => setScheduleForm(scheduleForm.filter(id => event !== id))}>
                            Delete
                        </Button>
                    }
                    onChange={data => console.log(data)}
                />
            ))}
            <LinhButton style={{ marginBottom: 16 }} onClick={() => setScheduleForm([...scheduleForm, uuid()])}>
                Add new event
            </LinhButton>
        </Form>
    );
});
