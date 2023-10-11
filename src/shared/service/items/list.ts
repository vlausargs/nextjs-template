import { ItemType } from "@/shared/types/item_type";
import baseApi from "../baseApi";

export async function listItem(query: any) {
  console.log(query);
  var filter = "";
  query.forEach((element: any, index: number) => {
    if (index == 0) {
      filter += "(";
    }
    filter += element.id + "='" + element.value + "'";
    if (index < query.length - 1) {
      filter += "%26%26";
    }
    if (index == query.length - 1) {
      filter += ")";
    }
  });
  const res = await baseApi
    .get("/collections/items/records?" + (filter == "" ? "" : "filter=" + filter))
    .then((res) => res.data.items)
    .catch((err) => []);
  const item: ItemType[] = res.map((obj: any) => {
    return {
      ...obj,
    };
  });
  return item;
}

export const LIST_ITEM = "LIST_ITEM";
