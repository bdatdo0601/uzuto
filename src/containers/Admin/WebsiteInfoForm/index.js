import React from "react";
import { Form } from "antd";
import DescriptionsForm from "../../../components/Admin/Forms/DescriptionsForm";

const WebsiteInfoForm = ({ ...props }) => {
    return (
        <Form className="text-center">
            <h1 className="text-4xl my-8">Wedding Content</h1>
            <DescriptionsForm {...props} title="Welcome Page" id="Welcome" onChange={data => console.log(data)} />
            <DescriptionsForm {...props} title="Us (About Page)" id="Us" onChange={data => console.log(data)} />
            <DescriptionsForm {...props} title="Registry" id="Registry" onChange={data => console.log(data)} />
        </Form>
    );
};

export default Form.create({ name: "WebsiteInfo" })(WebsiteInfoForm);
