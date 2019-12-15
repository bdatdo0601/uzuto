import React, { useState } from "react";
import uuid from "uuid";
import VenueForm from "../../../components/Admin/Forms/VenueForm";
import { Form, Button } from "antd";
import LinhButton from "../../../components/LinhButton";

const VenueManagement = ({ ...props }) => {
    const [venueForms, setVenueForms] = useState([]);
    return (
        <Form className="text-center">
            <h1 className="text-4xl my-8">Venue Management</h1>
            {venueForms.map((venue, index) => (
                <VenueForm
                    {...props}
                    key={venue}
                    title={`Venue ${index + 1}`}
                    id={venue}
                    extra={
                        <Button type="danger" onClick={() => setVenueForms(venueForms.filter(id => venue !== id))}>
                            Delete
                        </Button>
                    }
                    onChange={data => console.log(data)}
                />
            ))}
            <LinhButton style={{ marginBottom: 16 }} onClick={() => setVenueForms([...venueForms, uuid()])}>
                Add new venue
            </LinhButton>
        </Form>
    );
};

export default Form.create({ name: "Venue" })(VenueManagement);
