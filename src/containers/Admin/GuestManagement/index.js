import React, { useState } from "react";
import LinhButton from "../../../components/LinhButton";
import { Table } from "antd";
import GuestForm from "../../../components/Admin/Forms/GuestForm";

const columns = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
        fixed: "left",
    },
    {
        title: "Email",
        dataIndex: "email",
        key: "email",
    },
    {
        title: "Phone Number",
        dataIndex: "phoneNumber",
        key: "phoneNumber",
    },
    {
        title: "Status",
        dataIndex: "status",
        key: "status",
    },
    {
        title: "Company Count",
        dataIndex: "companies",
        key: "companies",
    },
    {
        title: "Event Count",
        dataIndex: "attendingEvents",
        key: "attendingEvents",
    },
    {
        title: "Resting Location",
        dataIndex: "restLocation",
        key: "restLocation",
    },
];

export default function GuestManagement() {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <GuestForm visible={modalVisible} onClose={() => setModalVisible(false)} />
            <div className="text-center">
                <h1 className="text-4xl my-8">Guest Management</h1>
                <div className="flex-auto justify-end space-between my-8 w-full align-right text-right px-8">
                    <LinhButton onClick={() => setModalVisible(true)}>Add New Guest</LinhButton>
                </div>
                <Table columns={columns} />
            </div>
        </>
    );
}
