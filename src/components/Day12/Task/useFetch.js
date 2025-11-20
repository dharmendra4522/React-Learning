import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch(url);
                if (!res.ok) {
                    throw new Error("Network error");
                }
                const json = await res.json();
                setData(json);

            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        getData();
    }, [url]);

    return { data, loading, error };
}

export default useFetch;