import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import uuid from "uuid";
import { Form, Modal, Button, Input, Icon, notification } from "antd";
import pDebounce from "p-debounce";

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

function GuestForm({ visible, form, onClose, onOk }) {
    const [guestFields, setGuestField] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    // eslint-disable-next-line
    const onSubmit = useCallback(
        pDebounce(async () => {
            setIsSubmitting(true);
            try {
                const values = form.getFieldsValue();
                await onOk(Object.values(values));
                notification.success({
                    message: "Guests are verified",
                    description: "Guests will submit more information on their own",
                });
            } catch (err) {
                notification.error({
                    message: "Something wrong! blame Dat",
                    description: err.message,
                });
            }
            setIsSubmitting(false);
        }, 1000),
        []
    );
    return (
        <Form>
            <Modal
                title="Invite New Guest(s)"
                visible={visible}
                onCancel={onClose}
                onOk={onSubmit}
                okText="Invite"
                okButtonProps={{ disabled: guestFields.length === 0 || isSubmitting, loading: isSubmitting }}
            >
                {guestFields.map((guest, index) => (
                    <Form.Item key={guest} label={`Guest Email #${index + 1}`} {...formItemLayout}>
                        {form.getFieldDecorator(guest, {
                            rules: [
                                {
                                    type: "email",
                                    message: "The input is not valid E-mail!",
                                },
                            ],
                        })(<Input style={{ width: "60%", marginRight: 8 }} type="email" disabled={isSubmitting} />)}
                        <Icon
                            className="dynamic-delete-button"
                            type="minus-circle-o"
                            onClick={() => setGuestField(guestFields.filter(item => guest !== item))}
                        />
                    </Form.Item>
                ))}
                <Button
                    type="dashed"
                    disabled={isSubmitting}
                    onClick={() => setGuestField([...guestFields, uuid()])}
                    style={{ width: "100%" }}
                >
                    Add More Guest
                </Button>
            </Modal>
        </Form>
    );
}

GuestForm.propTypes = {
    form: PropTypes.object.isRequired,
    visible: PropTypes.bool.isRequired,
    onClose: PropTypes.func,
    onOk: PropTypes.func,
};

GuestForm.defaultProps = {
    onClose: () => {},
    onOk: () => {},
};

export default Form.create({ name: "Guest Form" })(GuestForm);
