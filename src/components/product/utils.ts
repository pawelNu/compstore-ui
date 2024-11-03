import { UUID } from "crypto";
import { MappedItem, MappedProperty } from "./SimpleProductCardList";

export const mapToItems = (itemsArray: any[], keyMapping: { [key: string]: string }): MappedItem[] => {
    return itemsArray.map((item) => {
        return Object.keys(item).map((key) => {
            const newKey = keyMapping[key] || key;
            return {
                param: newKey,
                value: (item as any)[key],
            };
        });
    });
};

export const removeItemByIdFromList = (listOfItems: MappedItem[], idValue: UUID | undefined): MappedItem[] => {
    if (isUUID(idValue)) {
        return listOfItems.filter(
            (itemList) => !itemList.some((item) => item.param === "id" && item.value === idValue),
        );
    } else {
        console.log("Id was undefined: ", idValue);
        return listOfItems;
    }
};

export const isUUID = (value: any): value is UUID => {
    return typeof value === "string" && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value);
};
