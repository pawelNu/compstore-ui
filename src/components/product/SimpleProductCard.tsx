import { Loading } from "../spinner/Loading";
import { useFetchData } from "./useFetchData";

type PagingMetadata = {
    pageNumber: number;
    pageSize: number;
    pagesCount: number;
    elementsCount: number;
};

type Props = {
    endpoint: string;
    initialFilter: any;
    responseKey: string;
    ItemComponent: React.ComponentType<any>;
};

export const SimpleProductCard = ({ endpoint, initialFilter, responseKey, ItemComponent }: Props) => {
    console.log("file: SimpleProductCard.tsx:27   SimpleProductCard   responseKey:", responseKey);
    const { data, loading, error, setFilter } = useFetchData(endpoint, initialFilter);

    console.log("file: SimpleProductCard.tsx:27   data:", data);

    const items = Array.isArray(data?.[responseKey]) ? data[responseKey] : [];

    const mapToItems = (itemsArray: any[]) => {
        return itemsArray.map((item) => {
            return Object.keys(item).map((key) => ({
                param: key,
                value: (item as any)[key],
            }));
        });
    };

    const itemsMapped = mapToItems(items);
    console.log("file: SimpleProductCard.tsx:36   itemsMapped:", itemsMapped);

    if (loading) return <Loading />;

    if (error) return <div>{error}</div>;

    // TODO dodać wyświetlanie danych w karcie

    return (
        <div>
            {/* Renderowanie komponentu ItemComponent dla każdego elementu */}
            {items.map((item: any, index: number) => (
                <ItemComponent key={index} {...item} />
            ))}
            {/* Możesz dodać komponent paginacji, jeśli to konieczne */}
            {/* 
                <PaginationComponent
                    currentPage={data.pagingAndSortingMetadata.pageNumber}
                    totalPages={data.pagingAndSortingMetadata.pagesCount}
                    onPageChange={(pageNumber, pageSize) => setFilter({ ...initialFilter, pageNumber, pageSize })}
                />
            */}
        </div>
    );
};
