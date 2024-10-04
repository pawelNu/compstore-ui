import React from "react";
import { useFetchData } from "./useFetchData"; // zakładamy, że hook masz w pliku useFetchData.tsx
import { SimpleProductCard } from "./SimpleProductCard";
import { endpoints } from "../../config/links";
import { SimpleProductCardDetails } from "./SimpleProductCardDetails";

// Prosty komponent do testowania hooka
export const FetchDataTestComponent: React.FC = () => {
    // const endpoint = "https://jsonplaceholder.typicode.com/posts"; // użyj przykładowego API
    const initialFilter = {}; // jeśli nie potrzebujesz żadnych filtrów, zostaw puste

    // Użyj hooka useFetchData
    // const { data, loading, error } = useFetchData<any[]>(endpoint, initialFilter);

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error}</p>;

    return (
        <div>
            {/* <h1>Fetched Data:</h1>
            {data && data.length > 0 ? (
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>
                            <h2>{item.title}</h2>
                            <p>{item.body}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No data found</p>
            )} */}
            <div>
                <SimpleProductCard
                    endpoint={endpoints.pcs.getAll}
                    initialFilter={initialFilter}
                    ItemComponent={SimpleProductCardDetails}
                    responseKey={"pcs"}
                />
            </div>
        </div>
    );
};
