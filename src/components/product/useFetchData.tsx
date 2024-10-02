import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Swal from "sweetalert2";

interface FetchResult<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}
// TODO problemem pierwszym jest jak zrobić hook do pobierania danych
// TODO czy zrobić każdy oddzielnie (chyba najlepsza opcja)
// TODO czy zrobić jeden z pod funkcjami

// TODO sprawdzić jak to działa z endpointami z compstore czyli axios.post

export const useFetchData = <T,>(endpoint: string, initialFilter: any) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [filter, setFilter] = useState<any>(initialFilter);

    const fetchData = useCallback(async () => {
        try {
            const result = await axios.get(endpoint);
            console.log("file: useFetchData.tsx:20   fetchData   result:", result.data);
            setData(result.data);
            setLoading(false);
        } catch (e: any) {
            console.error("Error while fetching data:", e);
            const errorMsg = e.response?.data?.violations
                ? e.response.data.violations
                      .map(
                          (violation: { field: string; message: string }) => `${violation.field}: ${violation.message}`,
                      )
                      .join(", ")
                : "An error occurred";
            setError(errorMsg);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: errorMsg,
            });
        }
    }, [endpoint, filter]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, loading, error, setFilter };
};
