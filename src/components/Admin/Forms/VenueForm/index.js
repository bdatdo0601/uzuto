import React, { useState, useCallback, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import debounce from "p-debounce";
import { Card, Form, Input, notification, Upload, Icon, Modal, Radio } from "antd";
import { normFile, getBase64 } from "../../../../utils";

export default function VenueForm({ form, id, title, defaultData, onChange, debounceTime, extra }) {
    const { getFieldDecorator, getFieldsValue, getFieldValue } = form;
    const isSubcribedRef = useRef(true);
    const [isDisabled, setIsDisabled] = useState(false);
    const [previewImage, setPreviewImage] = useState(null);
    const [previewVisible, setPreviewVisible] = useState(false);
    const titleKey = `${id}-VenueFormTitle`;
    const shortNameKey = `${id}-VenueFormShortName`;
    const addressKey = `${id}-VenueFormAddress`;
    const descriptionKey = `${id}-VenueFormDescription`;
    const imageKey = `${id}-VenueFormImage`;
    const defaultLocationKey = `${id}-VenueFormDefaultLocation`;
    const [imageList, setImageList] = useState(getFieldValue(imageKey) || []);

    useEffect(() => {
        setImageList(defaultData.image ? [defaultData.image] : []);
    }, [defaultData.image]);
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
                    const values = getFieldsValue([
                        titleKey,
                        shortNameKey,
                        addressKey,
                        imageKey,
                        descriptionKey,
                        defaultLocationKey,
                    ]);
                    const images = (values[imageKey] || []).map(item => ({
                        ...item,
                        subTitle: form.getFieldValue(`${id}-${item.name}`),
                    }));
                    await onChange({
                        title: values[titleKey],
                        shortName: values[shortNameKey],
                        address: values[addressKey],
                        description: values[descriptionKey],
                        image: images[0] || null,
                        defaultLocation: values[defaultLocationKey],
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
            <Modal visible={previewVisible} footer={null} onCancel={() => setPreviewVisible(false)}>
                <img alt="example" style={{ width: "100%" }} src={previewImage} />
            </Modal>
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
                <Form.Item label={<span className="text-xl">Short Name</span>}>
                    {getFieldDecorator(shortNameKey, {
                        initialValue: defaultData.shortName,
                    })(<Input onChange={onContentChange} disabled={isDisabled} />)}
                </Form.Item>
                <Form.Item label={<span className="text-xl">Address</span>}>
                    {getFieldDecorator(addressKey, {
                        initialValue: defaultData.address,
                    })(<Input onChange={onContentChange} disabled={isDisabled} />)}
                </Form.Item>
                <Form.Item label={<span className="text-xl">Description</span>}>
                    {getFieldDecorator(descriptionKey, {
                        initialValue: defaultData.description,
                    })(
                        <Input.TextArea
                            onChange={onContentChange}
                            autoSize={{ minRows: 5 }}
                            disabled={isDisabled}
                            style={{ whiteSpace: "pre-line" }}
                        />
                    )}
                </Form.Item>
                <Form.Item label={<span className="text-xl">Is this one of the main locations</span>}>
                    {getFieldDecorator(defaultLocationKey, {
                        initialValue: defaultData.defaultLocation,
                    })(
                        <Radio.Group onChange={onContentChange}>
                            <Radio.Button value={true}>Yah</Radio.Button>
                            <Radio.Button value={false}>Nay</Radio.Button>
                        </Radio.Group>
                    )}
                </Form.Item>
                <Form.Item label={<span className="text-xl">Images</span>}>
                    {getFieldDecorator(imageKey, {
                        initialValue: defaultData.image
                            ? [{ ...defaultData.image, key: defaultData.image.name, uid: defaultData.image.name }]
                            : [],
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
                            {imageList.length < 1 && (
                                <div>
                                    <Icon type="plus" />
                                    <div className="ant-upload-text">Upload</div>
                                </div>
                            )}
                        </Upload>
                    )}
                </Form.Item>
                {imageList.length >= 1 && (
                    <Form.Item label={<span className="text-xl">Image ({imageList[0].name}) Subtitle</span>}>
                        {getFieldDecorator(`${id}-${imageList[0].name}`, {
                            initialValue: defaultData.image ? defaultData.image.subTitle : "",
                        })(<Input onChange={onContentChange} disabled={isDisabled} />)}
                    </Form.Item>
                )}
            </Card>
        </>
    );
}

VenueForm.propTypes = {
    form: PropTypes.object.isRequired,
    title: PropTypes.string,
    defaultData: PropTypes.shape({
        title: PropTypes.string,
        shortName: PropTypes.string,
        address: PropTypes.string,
        image: PropTypes.object,
        description: PropTypes.string,
    }),
    debounceTime: PropTypes.number,
    onChange: PropTypes.func,
    extra: PropTypes.object,
};

VenueForm.defaultProps = {
    title: "",
    defaultData: {
        title: "",
        shortName: "",
        address: "",
        image: null,
        description: "",
        defaultLocation: false,
    },
    onChange: () => {},
    debounceTime: 1000,
    extra: null,
};
