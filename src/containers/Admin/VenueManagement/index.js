import React, { useState, useEffect } from "react";
import uuid from "uuid";
import { Storage } from "aws-amplify";
import VenueForm from "../../../components/Admin/Forms/VenueForm";
import { Form, Button, Result, notification, Spin } from "antd";
import LinhButton from "../../../components/LinhButton";
import { useQuery, useMutation } from "../../../utils/hooks";
import { listVenues } from "../../../graphql/queries";
import {
    deleteVenue,
    createImage,
    updateImage,
    updateVenue,
    createVenue,
    deleteImage,
} from "../../../graphql/mutations";

const queryVariables = { limit: 10000 };

const VenueManagement = ({ ...props }) => {
    const [venueForms, setVenueForms] = useState([]);
    const [deleteLoading, setDeleteLoading] = useState(false);
    const { data, loading, errors, refetch } = useQuery(listVenues, queryVariables);
    const { mutation: deleteVenueMutation } = useMutation(deleteVenue);
    const { mutation: updateVenueMutation } = useMutation(updateVenue);
    const { mutation: createVenueMutation } = useMutation(createVenue);
    const { mutation: deleteImageMutation } = useMutation(deleteImage);
    const { mutation: createImageMutation } = useMutation(createImage);
    const { mutation: updateImageMutation } = useMutation(updateImage);

    useEffect(() => {
        if (data.listVenues && data.listVenues.items) {
            setVenueForms(data.listVenues.items.map(venue => venue.id));
        }
    }, [data.listVenues]);
    if (loading) {
        return <Spin spinning />;
    }
    if (!loading && (errors || !data.listVenues || !data.listVenues.items)) {
        return <Result status="error" title="Something wrong! Blame Dat" subTitle={JSON.stringify(errors)} />;
    }
    return (
        <Form className="text-center">
            <h1 className="text-4xl my-8">Venue Management</h1>
            {venueForms.map((venue, index) => (
                <VenueForm
                    {...props}
                    key={venue}
                    title={`Venue ${index + 1}`}
                    id={venue}
                    defaultData={data.listVenues ? data.listVenues.items.find(item => item.id === venue) || {} : {}}
                    extra={
                        <Button
                            type="danger"
                            loading={deleteLoading}
                            disabled={deleteLoading}
                            onClick={async () => {
                                setDeleteLoading(true);
                                try {
                                    const deletingVenue = data.listVenues.items.find(item => item.id === venue);
                                    if (deletingVenue) {
                                        await Storage.remove(`${venue}/${venue}Image`);
                                        deletingVenue.image &&
                                            (await deleteImageMutation({ input: { id: deletingVenue.image.id } }));
                                        await deleteVenueMutation({ input: { id: venue } });
                                    }
                                    setVenueForms(venueForms.filter(id => venue !== id));
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
                    onChange={async updateVenue => {
                        const existingVenue = data.listVenues.items.find(item => {
                            return item.id.toString() === venue.toString();
                        });
                        const newImageUUID = uuid();
                        if (updateVenue.image) {
                            if (!updateVenue.image.url) {
                                await Storage.put(`${venue}/${venue}Image`, updateVenue.image.originFileObj);
                            }
                            const url = await Storage.get(`${venue}/${venue}Image`);
                            const imageInput = {
                                id: updateVenue.image.url
                                    ? updateVenue.image.id
                                    : `${newImageUUID}-${updateVenue.image.name}`,
                                url,
                                imageLink: updateVenue.image.name,
                                thumbUrl: updateVenue.image.thumbUrl,
                                subTitle: updateVenue.image.subTitle,
                                name: updateVenue.image.name,
                                type: updateVenue.image.type,
                                venueID: venue,
                            };
                            updateVenue.image.url
                                ? await updateImageMutation({ input: imageInput })
                                : await createImageMutation({ input: imageInput });
                        } else {
                            if (existingVenue && existingVenue.image) {
                                await deleteImageMutation({ input: { id: existingVenue.image.id } });
                            }
                        }
                        const rawInput = {
                            title: updateVenue.title,
                            shortName: updateVenue.shortName,
                            context: "Venue",
                            address: updateVenue.address,
                            description: updateVenue.description,
                            defaultLocation: updateVenue.defaultLocation,
                            venueImageId: updateVenue.image
                                ? updateVenue.image.id || `${newImageUUID}-${updateVenue.image.name}`
                                : null,
                        };
                        const input = Object.keys(rawInput).reduce(
                            (acc, currentValue) => ({
                                ...acc,
                                ...(rawInput[currentValue] || currentValue === "venueImageId"
                                    ? { [currentValue]: rawInput[currentValue] }
                                    : {}),
                            }),
                            {}
                        );
                        existingVenue
                            ? await updateVenueMutation({ input: { ...input, id: venue } })
                            : await createVenueMutation({ input: { ...input, id: venue } });
                        await refetch();
                    }}
                />
            ))}
            <LinhButton style={{ marginBottom: 16 }} onClick={() => setVenueForms([...venueForms, uuid()])}>
                Add new venue
            </LinhButton>
        </Form>
    );
};

export default Form.create({ name: "Venue" })(VenueManagement);
