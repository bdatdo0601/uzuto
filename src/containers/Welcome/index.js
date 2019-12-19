import React, { useMemo } from "react";
import { getDescriptions } from "../../graphql/queries";
import { useQuery } from "../../utils/hooks";
import { Spin, Result } from "antd";
import DescriptionDisplay from "../../components/DescriptionDisplay";

export default function Welcome() {
    const variables = useMemo(() => ({ id: "Welcome" }), []);
    const { data, loading, errors } = useQuery(getDescriptions, variables, null, "API_KEY");
    if (loading) {
        return <Spin spinning />;
    }
    if (errors || !data.getDescriptions) {
        return <Result status="error" title="Something wrong! blame Linh's brother" />;
    }
    const description = data.getDescriptions;
    return <DescriptionDisplay description={description} />;
}
