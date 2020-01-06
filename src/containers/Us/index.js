import React, { useMemo } from "react";
import { getDescriptions } from "../../graphql/queries";
import { useQuery, useWindowSize } from "../../utils/hooks";
import { Spin, Result } from "antd";
import DescriptionDisplay from "../../components/DescriptionDisplay";

export default function Us() {
    const variables = useMemo(() => ({ id: "Us" }), []);
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
            boxStyle={{ marginTop: -24, paddingLeft: width > 765 ? 100 : 0, paddingRight: width > 765 ? 100 : 0 }}
        />
    );
}
