export function formatPrice(price: number, separator?: string) {
    if (separator === undefined || separator === null) {
        separator = " ";
    }
    return price
        .toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            useGrouping: true,
        })
        .replace(/,/g, separator);
}
