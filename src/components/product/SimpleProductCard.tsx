import { Loading } from "../spinner/Loading";
import { useFetchData } from "./useFetchData";

interface PagingMetadata {
    pageNumber: number;
    pageSize: number;
    pagesCount: number;
    elementsCount: number;
}

export const SimpleProductCard = <T,>({
    endpoint,
    initialFilter,
    ItemComponent,
}: {
    endpoint: string;
    initialFilter: any;
    ItemComponent: React.ComponentType<T>;
}) => {
    const { data, loading, error, setFilter } = useFetchData<{ items: T[]; pagingAndSortingMetadata: PagingMetadata }>(
        endpoint,
        initialFilter
    );

    if (loading) return <Loading />;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <div>
                {data?.items.map((item: T, index: number) => (
                    <ItemComponent key={index} {...item} />
                ))}
            </div>
            {/* <PaginationComponent
                currentPage={data?.pagingAndSortingMetadata.pageNumber ?? 0}
                totalPages={data?.pagingAndSortingMetadata.pagesCount ?? 1}
                onPageChange={(pageNumber, pageSize) => setFilter({ ...initialFilter, pageNumber, pageSize })}
            /> */}
        </div>
    );
};