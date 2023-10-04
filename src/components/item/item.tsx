"use client";
import { LIST_ITEM, listItem } from "@/shared/service/items/list";
import { Item } from "@/shared/types/item";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function ItemLayout({ items: initialData }: { items?: Item[] }) {
  const { data: items, refetch } = useQuery(LIST_ITEM, listItem, {
    initialData,
  });
  return (
    <div>
      {items?.map((item) => (
        <div key={item.id}>{item.name} </div>
      ))}
    </div>
  );
}
