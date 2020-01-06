import React, { useMemo } from "react";
import { getDescriptions } from "../../graphql/queries";
import { useQuery, useWindowSize } from "../../utils/hooks";
import { Spin, Result } from "antd";
import DescriptionDisplay from "../../components/DescriptionDisplay";

export default function Registry() {
    const variables = useMemo(() => ({ id: "Registry" }), []);
    const { width } = useWindowSize();
    const { data, loading, errors } = useQuery(getDescriptions, variables, null, "API_KEY");
    if (loading) {
        return <Spin spinning />;
    }
    if (errors || !data.getDescriptions) {
        return <Result status="error" title="Something wrong! blame Linh's brother" />;
    }
    const description = data.getDescriptions;
    return (
        <DescriptionDisplay
            description={description}
            imageStyle={width > 765 ? { height: 700 } : { width: "100%" }}
            boxStyle={{ marginTop: -16, fontSize: 18 }}
        />
    );
}
