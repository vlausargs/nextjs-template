import { LIST_ITEM, listItem } from "@/shared/service/items/list";
import { getCacheQueryClient } from "@/shared/utils/queryClient";
import React from "react";
import ItemList from "./item";
import { dehydrate } from "@tanstack/react-query";
import Hydrate from "../Hydrate";

export default async function ItemWrapper() {
  const queryClient = getCacheQueryClient();
  await queryClient.prefetchQuery({
    queryKey: [LIST_ITEM],
    queryFn: () =>
      listItem({
        query: [],
        pagination: {
          page: 1,
          perPage: 10,
        },
      }),
  });
  const dehydratedState = dehydrate(queryClient);
  return (
    <Hydrate state={dehydratedState}>
      <ItemList />
    </Hydrate>
  );
}
