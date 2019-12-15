import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import debounce from "p-debounce";
import { Card, Form, Input, notification, Upload, Icon, Modal, Radio } from "antd";
import { normFile, getBase64 } from "../../../../utils";

export default function DescriptionsForm({ form, id, title, defaultData, onChange, debounceTime }) {
    const { getFieldDecorator, getFieldsValue, getFieldValue } = form;
    const [isDisabled, setIsDisabled] = useState(false);
    const [previewImage, setPreviewImage] = useState(null);
    const [previewVisible, setPreviewVisible] = useState(false);
    const titleKey = `${id}-DescriptionsFormTitle`;
    const contentKey = `${id}-DescriptionsFormContent`;
    const signatureKey = `${id}-DescriptionsFormSignature`;
    const imageKey = `${id}-DescriptionsFormImages`;
    const imageLocationKey = `${id}-DescriptionsFormImageLocation`;

    const imageList = getFieldValue(imageKey) || [];

    const onContentChange = useCallback(
        debounce(
            async () => {
                setIsDisabled(true);
                try {
                    const values = getFieldsValue([titleKey, contentKey, signatureKey, imageKey, imageLocationKey]);
                    const images = (values[imageKey] || []).map(item => ({
                        ...item,
                        subTitle: form.getFieldValue(`${id}-${item.uid}`),
                    }));
                    await onChange({
                        title: values[titleKey],
                        content: values[contentKey],
                        signature: values[signatureKey],
                        images,
                        imageLocation: values[imageLocationKey],
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
                setIsDisabled(false);
            },
            debounceTime,
            { trailing: true, leading: false }
        ),
        []
    );

    if (!id) return <span>Please provide an ID</span>;

    return (
        <>
            <Modal visible={previewVisible} footer={null} onCancel={() => setPreviewVisible(false)}>
                <img alt="example" style={{ width: "100%" }} src={previewImage} />
            </Modal>
            <Card
                className="w-full text-left"
                title={<span className="text-2xl">{title}</span>}
                style={{ marginBottom: 16 }}
            >
                <Form.Item label={<span className="text-xl">Title</span>}>
                    {getFieldDecorator(titleKey, {
                        initialValue: defaultData.title,
                    })(<Input onChange={onContentChange} disabled={isDisabled} />)}
                </Form.Item>
                <Form.Item label={<span className="text-xl">Content</span>}>
                    {getFieldDecorator(contentKey, {
                        initialValue: defaultData.content,
                    })(<Input.TextArea onChange={onContentChange} autoSize={{ minRows: 5 }} disabled={isDisabled} />)}
                </Form.Item>
                <Form.Item label={<span className="text-xl">Signature</span>}>
                    {getFieldDecorator(signatureKey, {
                        initialValue: defaultData.signature,
                    })(<Input onChange={onContentChange} disabled={isDisabled} />)}
                </Form.Item>
                <Form.Item label={<span className="text-xl">Image Location</span>}>
                    {getFieldDecorator(imageLocationKey, {
                        initialValue: defaultData.imageLocation,
                    })(
                        <Radio.Group onChange={onContentChange}>
                            <Radio.Button value="top">Top</Radio.Button>
                            <Radio.Button value="left">Left</Radio.Button>
                            <Radio.Button value="bottom">Bottom</Radio.Button>
                        </Radio.Group>
                    )}
                </Form.Item>
                <Form.Item label={<span className="text-xl">Images</span>}>
                    {getFieldDecorator(imageKey, {
                        initialValue: defaultData.images,
                        valuePropName: "fileList",
                        getValueFromEvent: normFile,
                    })(
                        <Upload
                            listType="picture-card"
                            beforeUpload={() => false}
                            onChange={onContentChange}
                            onPreview={async file => {
                                if (!file.url && !file.preview) {
                                    file.preview = await getBase64(file.originFileObj);
                                }
                                setPreviewImage(file.url || file.preview);
                                setPreviewVisible(true);
                            }}
                        >
                            <div>
                                <Icon type="plus" />
                                <div className="ant-upload-text">Upload</div>
                            </div>
                        </Upload>
                    )}
                </Form.Item>
                {imageList.map((item, index) => (
                    <Form.Item
                        key={item.uid}
                        label={
                            <span className="text-xl">
                                Image {index + 1} ({item.name}) Subtitle
                            </span>
                        }
                    >
                        {getFieldDecorator(`${id}-${item.uid}`, {
                            initialValue: defaultData.images.length > index ? defaultData.images[index].subTitle : "",
                        })(<Input onChange={onContentChange} disabled={isDisabled} />)}
                    </Form.Item>
                ))}
            </Card>
        </>
    );
}

DescriptionsForm.propTypes = {
    form: PropTypes.object.isRequired,
    title: PropTypes.string,
    defaultData: PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        signature: PropTypes.string.isRequired,
        images: PropTypes.array.isRequired,
        imageLocation: PropTypes.string.isRequired,
    }),
    debounceTime: PropTypes.number,
    onChange: PropTypes.func,
};

DescriptionsForm.defaultProps = {
    title: "",
    defaultData: {
        title: "",
        content: "",
        signature: "",
        images: [],
        imageLocation: "top",
    },
    onChange: () => {},
    debounceTime: 1000,
};
