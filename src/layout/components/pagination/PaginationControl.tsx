import { Pagination as RBPagination, PaginationProps } from "react-bootstrap";

export interface PaginationControlProps extends PaginationProps {
    pageNumber: number;
    pageSize: number;
    pagesCount: number;
    elementsCount: number;
    onChangePage: (pageNumber: number, pageSize: number) => void;
    between?: number;
    next?: boolean;
    last?: boolean;
    ellipsis?: number;
}

export const PaginationControl: React.FC<PaginationControlProps> = ({
    pageNumber = 1,
    pageSize = 10,
    pagesCount,
    elementsCount,
    onChangePage,
    between = 3,
    next = true,
    last = false,
    ellipsis = 0,
    ...paginationProps
}) => {
    between = between < 1 ? 1 : between;
    pageNumber =
        pageNumber < 1 ? 1 : pagesCount < pageNumber ? pagesCount : pageNumber;
    ellipsis =
        ellipsis < 1 ? 0 : ellipsis + 2 >= between ? between - 2 : ellipsis;

    let positions = Array.from({ length: pagesCount }, (_, i) => i);

    const qtd_pages = between * 2 + 1;
    const range =
        pagesCount <= qtd_pages
            ? // Show active without slice
              positions
            : pageNumber - 1 <= between
              ? // Show active in left
                positions.slice(
                    0,
                    qtd_pages - (ellipsis > 0 ? ellipsis + 1 : 0) - 1,
                )
              : pageNumber + between >= pagesCount
                ? // Show active in right
                  positions.slice(
                      pagesCount -
                          qtd_pages +
                          (ellipsis > 0 ? ellipsis + 1 : 0) -
                          1,
                      pagesCount,
                  )
                : // Show active in middle
                  positions.slice(
                      pageNumber -
                          (between - (ellipsis > 0 ? ellipsis + 1 : 0)),
                      pageNumber +
                          (between - (ellipsis > 0 ? ellipsis + 1 : 0)),
                  );

    const handlePageChange = (
        value: number,
        pageNumber: number,
        onChangePage: (pageNumber: number, pageSize: number) => void,
        pageSize: number,
    ) => {
        console.log("range:", range);
        console.log("pageNumber:", pageNumber);
        console.log("value:", value);
        onChangePage(value, pageSize);
    };

    return elementsCount !== null && elementsCount > 0 ? (
        <RBPagination {...paginationProps}>
            {last && (
                <RBPagination.First
                    onClick={() =>
                        pageNumber > 1 ? onChangePage(0, pageSize) : {}
                    }
                    disabled={pageNumber <= 1}
                />
            )}
            {next && (
                <RBPagination.Prev
                    onClick={() =>
                        pageNumber > 1
                            ? onChangePage(pageNumber - 1, pageSize)
                            : {}
                    }
                    disabled={pageNumber <= 1}
                />
            )}
            {pagesCount > between * 2 + 1 &&
                ellipsis > 0 &&
                positions
                    .slice(0, pageNumber - 1 <= between ? 0 : ellipsis)
                    .map((value) => {
                        return (
                            <RBPagination.Item
                                key={value}
                                onClick={() =>
                                    handlePageChange(
                                        value,
                                        pageNumber,
                                        onChangePage,
                                        pageSize,
                                    )
                                }
                            >
                                {value + 1}
                            </RBPagination.Item>
                        );
                    })}
            {
                // Show ellipsis when "page" is bigger than "between"
                pagesCount > between * 2 + 1 &&
                    ellipsis > 0 &&
                    pageNumber - 1 > between && (
                        <RBPagination.Ellipsis disabled />
                    )
            }
            {range.map((value) => {
                return (
                    <RBPagination.Item
                        active={value === pageNumber - 1}
                        key={value}
                        onClick={() =>
                            handlePageChange(
                                value,
                                pageNumber,
                                onChangePage,
                                pageSize,
                            )
                        }
                    >
                        {value + 1}
                    </RBPagination.Item>
                );
            })}
            {
                // Show ellipsis when "page" is lower than "between"
                pagesCount > between * 2 + 1 &&
                    ellipsis > 0 &&
                    pageNumber < pagesCount - between && (
                        <RBPagination.Ellipsis disabled />
                    )
            }
            {pagesCount > between * 2 + 1 &&
                ellipsis > 0 &&
                positions
                    .slice(
                        pageNumber >= pagesCount - between
                            ? pagesCount
                            : pagesCount - ellipsis,
                        pagesCount,
                    )
                    .map((value) => {
                        return (
                            <RBPagination.Item
                                key={value}
                                onClick={() =>
                                    handlePageChange(
                                        value,
                                        pageNumber,
                                        onChangePage,
                                        pageSize,
                                    )
                                }
                            >
                                {value + 1}
                            </RBPagination.Item>
                        );
                    })}
            {next && (
                <RBPagination.Next
                    onClick={() =>
                        pageNumber < pagesCount
                            ? onChangePage(pageNumber + 1, pageSize)
                            : {}
                    }
                    disabled={pageNumber >= pagesCount}
                />
            )}
            {last && (
                <RBPagination.Last
                    onClick={() =>
                        pageNumber < pagesCount
                            ? onChangePage(pagesCount, pageSize)
                            : {}
                    }
                    disabled={pageNumber >= pagesCount}
                />
            )}
        </RBPagination>
    ) : (
        <></>
    );
};
