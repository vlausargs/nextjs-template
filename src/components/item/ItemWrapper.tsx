import { LIST_ITEM, listItem } from "@/shared/service/items/list";
import { getQueryClient } from "@/shared/utils/queryClient";
import React from "react";
import ItemLayout from "./item";
import { dehydrate } from "@tanstack/react-query";
import Hydrate from "../Hydrate";

export default async function ItemWrapper() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(LIST_ITEM, listItem);
  const dehydratedState = dehydrate(queryClient);
  return (
    <Hydrate state={dehydratedState}>
      <ItemLayout />
    </Hydrate>
  );
}
