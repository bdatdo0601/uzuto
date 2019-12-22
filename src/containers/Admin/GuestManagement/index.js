import React, { useState } from "react";
import uuid from "uuid";
import LinhButton from "../../../components/LinhButton";
import { Table, Spin, Result, Badge, Popconfirm, notification } from "antd";
import GuestForm from "../../../components/Admin/Forms/GuestForm";
import { useQuery, useMutation } from "../../../utils/hooks";
import { listGuests } from "../../../graphql/queries";
import { createGuest, deleteGuest } from "../../../graphql/mutations";

export default function GuestManagement() {
    const [modalVisible, setModalVisible] = useState(false);
    const { data, loading, errors, refetch } = useQuery(listGuests);
    const { mutation: createGuestMutation } = useMutation(createGuest);
    const { mutation: deleteGuestMutation } = useMutation(deleteGuest);

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            fixed: "left",
            width: "100px",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
            fixed: "left",
            width: "200px",
        },
        {
            title: "Phone Number",
            dataIndex: "phoneNumber",
            key: "phoneNumber",
        },
        {
            title: "Status",
            key: "status",
            render: (text, record) => {
                if (!record.isVerified) return <Badge color="grey" text="Unverified" />;
                if (record.isRsvp) {
                    return record.isAttending ? (
                        <Badge color="green" text="Attending" />
                    ) : (
                        <Badge color="red" text="Bailed" />
                    );
                }
                return <Badge color="blue" text="Waiting for RSVP" />;
            },
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
        {
            title: "Action",
            key: "operation",
            fixed: "right",
            width: 200,
            render: (text, record) => (
                <Popconfirm
                    title="Are you sure?"
                    onConfirm={async () => {
                        try {
                            await deleteGuestMutation({ input: { id: record.id.toString() } });
                            notification.success({
                                message: "Guest deleted",
                                description: "One less person to worry about",
                            });
                        } catch (err) {
                            console.error(err);
                            notification.error({
                                message: "Unable to delete this guest! blame Dat",
                                description: err.message,
                            });
                        }
                        await refetch();
                    }}
                >
                    <button className="text-red-400" style={{ outline: "none" }}>
                        Remove
                    </button>
                </Popconfirm>
            ),
        },
    ];
    if (loading) {
        return <Spin spinning />;
    }
    if (!loading && (errors || !data.listGuests || !data.listGuests.items)) {
        return <Result status="error" title="Something wrong! Blame Dat" subTitle={JSON.stringify(errors)} />;
    }
    return (
        <>
            <GuestForm
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onOk={async values => {
                    await Promise.all(
                        values.map(async email => {
                            if (data.listGuests.items.find(item => item.email === email)) {
                                return;
                            }
                            const newGuest = {
                                id: uuid(),
                                isVerified: true,
                                isRsvp: false,
                                email,
                            };
                            await createGuestMutation({ input: newGuest });
                        })
                    );
                    setModalVisible(false);
                    await refetch();
                }}
            />
            <div className="text-center">
                <h1 className="text-4xl my-8">Guest Management</h1>
                <div className="flex-auto justify-end space-between my-8 w-full align-right text-right px-8">
                    <LinhButton onClick={() => setModalVisible(true)}>Add New Guest</LinhButton>
                </div>
                <Table
                    dataSource={data.listGuests.items}
                    columns={columns}
                    scroll={{ x: 2000, y: 300 }}
                    rowKey={item => item.id}
                />
            </div>
        </>
    );
}