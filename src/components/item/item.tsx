"use client";
import { z } from "zod";
import { LIST_ITEM, listItem } from "@/shared/service/items/list";
import { ItemType } from "@/shared/types/item_type";
import { ResponseType } from "@/shared/types/response_type";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { columns } from "./itemColumns";
import DataTable from "@/components/ui/ue/datatable";
import { ColumnFiltersState, PaginationState } from "@tanstack/react-table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";

export default function ItemList({
  data: initialData,
}: {
  data?: ResponseType<ItemType>;
}) {
  const queryClient = useQueryClient();
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const initRunRef = useRef(false);
  const { isLoading, isFetching, error, data, refetch } = useQuery({
    queryKey: [LIST_ITEM],
    queryFn: () =>
      listItem({
        query: [],
        pagination: {
          page: 0,
          perPage: 10,
        },
      }),
    initialData: initialData,
  });

  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: (data?.pagination.page || 1) - 1,
    pageSize: data?.pagination.perPage || 10,
  });
  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize],
  );

  const fetchData = async () => {
    await queryClient.prefetchQuery([LIST_ITEM], () =>
      listItem({
        query: columnFilters,
        pagination: {
          page: pageIndex + 1,
          perPage: pageSize,
        },
      }),
    );
  };
  const killFetchData = () => {
    queryClient.removeQueries([LIST_ITEM, columnFilters]);
  };

  useEffect(() => {
    if (!initRunRef.current) {
      initRunRef.current = true;
      return;
    }
    if (isFetching) return;

    fetchData();
    return killFetchData();
  }, [columnFilters, pagination]);

  const initCreate = () => {
    //redirect to create item
  };

  if (!data) return null;
  return (
    <div className="flex w-full flex-col space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="flex space-x-1">
                <PlusIcon />
                <div>Create</div>
              </Button>
            </DialogTrigger>
            <DialogContent className="flex h-[calc(100vh*0.8)] max-w-[calc(100vw*0.9)] flex-col">
              <DialogHeader>
                <DialogTitle>Create Item</DialogTitle>
                <DialogDescription></DialogDescription>
              </DialogHeader>
              <div className="flex h-full w-full  flex-col">
                <div className="grid max-h-[calc((100vh*0.8)-120px)] grid-cols-3 flex-row gap-4 overflow-y-auto p-2">
                  <div className="flex flex-col">
                    <div>SKU</div>
                    <div>
                      <Input />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div>Name</div>
                    <div>
                      <Input />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div>Desc</div>
                    <div>
                      <Input />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div>Price</div>
                    <div>
                      <Input />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div>Status</div>
                    <div>
                      <Input />
                    </div>
                  </div>
                </div>
                <div className="mt-auto flex flex-col">
                  <div className="flex flex-row justify-end space-x-2">
                    <Button variant="outline">Submit</Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <DataTable
        data={data.items}
        columns={columns}
        filterCallback={setColumnFilters}
        pagination={pagination}
        paginationCallback={setPagination}
        createCallback={initCreate}
        totalPage={data.pagination.totalPages}
      />
    </div>
  );
}
