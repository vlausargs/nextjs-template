import { Item } from "@/shared/types/item";
import baseApi from "../baseApi";

export async function listItem() {
  const res = await baseApi
    .get("/collections/items/records")
    .then((res) => res.data.items)
    .catch((err) => []);
  const item: Item[] = res.map((obj: any) => {
    return {
      ...obj,
    };
  });
  return item;
}

export const LIST_ITEM = ["LIST_ITEM"];
