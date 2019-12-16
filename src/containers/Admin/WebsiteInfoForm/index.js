import React from "react";
import { Storage } from "aws-amplify";
import { Form, Spin, Result } from "antd";
import DescriptionsForm from "../../../components/Admin/Forms/DescriptionsForm";

import { listDescriptionss } from "./queries";
import { useQuery, useMutation } from "../../../utils/hooks";
import {
    updateDescriptions,
    createDescriptions,
    createImage,
    deleteImage,
    updateImage,
} from "../../../graphql/mutations";

const queryVariables = { limit: 10000 };

const welcomeKey = "Welcome";
const usKey = "Us";
const registryKey = "Registry";

const WebsiteInfoForm = ({ ...props }) => {
    const { loading, data, errors } = useQuery(listDescriptionss, queryVariables);
    const { mutation: updateDescriptionsMutation } = useMutation(updateDescriptions);
    const { mutation: createDescriptionsMutation } = useMutation(createDescriptions);
    const { mutation: createImageMutation } = useMutation(createImage);
    const { mutation: deleteImageMutation } = useMutation(deleteImage);
    const { mutation: updateImageMutation } = useMutation(updateImage);
    if (loading) return <Spin spinning />;
    if (errors || !data.listDescriptionss)
        return <Result status="error" title="Something wrong! Blame Dat" subTitle={JSON.stringify(errors)} />;
    const welcomeData = data.listDescriptionss.items.find(item => item.id === welcomeKey);
    const usData = data.listDescriptionss.items.find(item => item.id === usKey);
    const registryData = data.listDescriptionss.items.find(item => item.id === registryKey);
    const onChange = async (data, oldData, key, context) => {
        const { title, content, signature, imageLocation, images } = data;
        const input = Object.keys({ title, content, signature, imageLocation }).reduce(
            (acc, currentValue) => ({
                ...acc,
                ...(data[currentValue] ? { [currentValue]: data[currentValue] } : {}),
            }),
            {}
        );
        if (!oldData) {
            await createDescriptionsMutation({
                input: { id: key, ...input, context },
            });
        } else {
            await updateDescriptionsMutation({
                input: { id: key, ...input },
            });
            if (oldData.images.items) {
                await Promise.all(
                    oldData.images.items.map(async image => {
                        if (!images.find(img => img.name === image.name)) {
                            await Storage.remove(`${key}/${image.name}`);
                            await deleteImageMutation({ input: { id: image.name } });
                        }
                    })
                );
            }
        }
        await Promise.all(
            images.map(async image => {
                const isImageAlreadyExist = oldData.images.items.find(item => image.name === item.name);
                if (!isImageAlreadyExist) {
                    await Storage.put(`${key}/${image.name}`, image.originFileObj);
                }
                const url = await Storage.get(`${key}/${image.name}`);
                const input = {
                    id: image.name,
                    url,
                    imageLink: image.name,
                    ...(image.subTitle ? { subTitle: image.subTitle } : {}),
                    thumbUrl: image.thumbUrl,
                    name: image.name,
                    type: image.type,
                    descriptionID: key,
                };
                isImageAlreadyExist ? await updateImageMutation({ input }) : await createImageMutation({ input });
            })
        );
    };

    return (
        <Form className="text-center">
            <>
                <h1 className="text-4xl my-8">Wedding Content</h1>
                <DescriptionsForm
                    {...props}
                    title="Welcome Page"
                    id="Welcome"
                    defaultData={
                        welcomeData
                            ? {
                                  ...welcomeData,
                                  images:
                                      welcomeData.images.items.map(item => ({
                                          ...item,
                                          key: item.name,
                                          uid: item.name,
                                      })) || [],
                              }
                            : {}
                    }
                    onChange={async data => onChange(data, welcomeData, welcomeKey, "Welcome")}
                />
                <DescriptionsForm
                    {...props}
                    title="Us (About Page)"
                    id="Us"
                    defaultData={
                        usData
                            ? {
                                  ...usData,
                                  images:
                                      usData.images.items.map(item => ({
                                          ...item,
                                          key: item.name,
                                          uid: item.name,
                                      })) || [],
                              }
                            : {}
                    }
                    onChange={async data => onChange(data, usData, usKey, "Us")}
                />
                <DescriptionsForm
                    {...props}
                    title="Registry"
                    id="Registry"
                    defaultData={
                        registryData
                            ? {
                                  ...registryData,
                                  images:
                                      registryData.images.items.map(item => ({
                                          ...item,
                                          key: item.name,
                                          uid: item.name,
                                      })) || [],
                              }
                            : {}
                    }
                    onChange={async data => onChange(data, registryData, registryKey, "Registry")}
                />
            </>
            );
        </Form>
    );
};

export default Form.create({ name: "WebsiteInfo" })(WebsiteInfoForm);
