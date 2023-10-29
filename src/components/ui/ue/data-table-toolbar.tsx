import { Table } from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Cross2Icon, InputIcon } from "@radix-ui/react-icons";
import { DataTableViewOptions } from "@/components/ui/ue/data-table-view-options";
import { useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  useEffect(() => {}, []);
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="flex space-x-2">
              <InputIcon />
              <div>Filter</div>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="max-h-80 w-80 overflow-y-auto">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Filter</h4>
                <p className="text-sm text-muted-foreground">
                  Set the filter for the table.
                </p>
              </div>

              <div className="grid gap-2">
                {table
                  .getAllColumns()
                  .filter((c) => c.getCanFilter())
                  .map((column) => {
                    return (
                      <div
                        key={column.id}
                        className="grid grid-cols-3 items-center gap-4"
                      >
                        <Label htmlFor={column.id}>{column.id}</Label>
                        <Input
                          id={column.id}
                          value={column.getFilterValue() as string}
                          onChange={(event) =>
                            column.setFilterValue(event.target.value)
                          }
                          className="col-span-2 h-8"
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </PopoverContent>
        </Popover>
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
