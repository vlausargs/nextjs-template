"use client";
import { z } from "zod";
import { LIST_ITEM, listItem } from "@/shared/service/items/list";
import { ItemType } from "@/shared/types/item_type";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { columns } from "./itemColumns";
import DataTable from "@/components/ui/ue/datatable";
import { ColumnFilter, ColumnFiltersState, Updater } from "@tanstack/react-table";

export default function ItemList({ items: initialData }: { items?: ItemType[] }) {
  const queryClient = useQueryClient();
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([{ id: "initvalue", value: "initvalue" }]);
  const {
    isLoading,
    error,
    data: items,
    refetch,
  } = useQuery({
    queryKey: [LIST_ITEM],
    queryFn: () => listItem([]),
    initialData: initialData,
  });
  const isInitialRender = useRef(true);

  useEffect(() => {
    if (columnFilters.length >= 1 && columnFilters[0].id == "initvalue") {
      if (columnFilters.length == 1) return;
      else setColumnFilters([columnFilters[1]]);
      return;
    }
    const fetchData = async () => {
      await queryClient.prefetchQuery([LIST_ITEM], () => listItem(columnFilters));
    };
    fetchData();
    return () => {
      queryClient.removeQueries([LIST_ITEM, columnFilters]);
    };
  }, [columnFilters]);
  if (!items) return null;
  return (
    <>
      <DataTable data={items} columns={columns} filterCallback={setColumnFilters} />
    </>
  );
}
