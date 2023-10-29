import { ItemType } from "@/shared/types/item_type";
import baseApi from "../baseApi";
import { PaginationType, ResponseType } from "@/shared/types/response_type";

export async function listItem({
  query,
  pagination,
}: any): Promise<ResponseType<ItemType>> {
  var filter = "";
  query.forEach((element: any, index: number) => {
    if (index == 0) {
      filter += "(";
    }
    filter += element.id + "~%27%25" + element.value + "%25%27";
    if (index < query.length - 1) {
      filter += "%26%26";
    }
    if (index == query.length - 1) {
      filter += ")";
    }
  });
  const res = await baseApi
    .get(
      "/collections/items/records?page=" +
        pagination.page +
        "&perPage=" +
        pagination.perPage +
        (filter == "" ? "" : "&filter=" + filter),
    )
    .then((res) => res.data)
    .catch((err) => []);
  const items: ItemType[] = res.items.map((obj: any) => {
    return {
      ...obj,
    };
  });
  const data = {
    items: items,
    pagination: {
      page: res.page,
      perPage: res.perPage,
      totalItems: res.totalItems,
      totalPages: res.totalPages,
    },
  };
  return data;
}

export const LIST_ITEM = "LIST_ITEM";
