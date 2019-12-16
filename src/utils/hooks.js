import { useState, useEffect, useCallback, useRef } from "react";
import { API, graphqlOperation } from "aws-amplify";

const gqlOp = async (query, variables) => {
    const data = await API.graphql(graphqlOperation(query, variables));
    return data;
};

const fetchQuery = async (query, variables, setLoading, setData, setError) => {
    setLoading(true);
    try {
        const { data } = await gqlOp(query, variables);
        setData(data);
    } catch (error) {
        console.error(error);
        setError(error);
    } finally {
        setLoading(false);
    }
};

// Hook
export const useWindowSize = () => {
    const isClient = typeof window === "object";

    const getSize = useCallback(() => {
        return {
            width: isClient ? window.innerWidth : undefined,
            height: isClient ? window.innerHeight : undefined,
        };
    }, [isClient]);

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
        if (!isClient) {
            return false;
        }

        function handleResize() {
            setWindowSize(getSize());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [getSize, isClient]); // Empty array ensures that effect is only run on mount and unmount

    return windowSize;
};

export const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
};

export const useQuery = (query, variables, pollInterval = null) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [data, setData] = useState({});
    const [requestCount, setRequestCount] = useState(0);

    useEffect(() => {
        fetchQuery(query, variables, setLoading, setData, setError);
    }, [query, variables, requestCount]);

    useInterval(() => {
        if (pollInterval) {
            setRequestCount(requestCount + 1);
        }
    }, pollInterval || 30000);

    return {
        loading,
        data,
        error,
        refetch: async () => fetchQuery(query, variables, setLoading, setData, setError),
    };
};

export const useMutation = mutation => {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);

    return {
        mutation: async variables => {
            setLoading(true);
            try {
                await gqlOp(mutation, variables);
                setLoading(false);
            } catch (err) {
                setErrors([err]);
                setLoading(false);
                throw err;
            }
        },
        errors,
        loading,
    };
};
