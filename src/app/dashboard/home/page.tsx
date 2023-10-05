import ItemWrapper from "@/components/item/ItemWrapper";
import ItemLayout from "@/components/item/item";
import { columns } from "@/components/item/itemColumns";
import DataTable from "@/components/ui/ue/datatable";
import { listItem } from "@/shared/service/items/list";
import { Item } from "@/shared/types/item";
import { getCacheQueryClient } from "@/shared/utils/queryClient";

import React, { useEffect, useState } from "react";

export default function Page() {
  const tasks = [
    {
      id: "TASK-8782",
      title: "You can't compress the program without quantifying the open-source SSD pixel!",
      status: "in progress",
      label: "documentation",
      priority: "medium",
    },
    {
      id: "TASK-7878",
      title: "Try to calculate the EXE feed, maybe it will index the multi-byte pixel!",
      status: "backlog",
      label: "documentation",
      priority: "medium",
    },
    {
      id: "TASK-7839",
      title: "We need to bypass the neural TCP card!",
      status: "todo",
      label: "bug",
      priority: "high",
    },
    {
      id: "TASK-5562",
      title: "The SAS interface is down, bypass the open-source pixel so we can back up the PNG bandwidth!",
      status: "backlog",
      label: "feature",
      priority: "medium",
    },
    {
      id: "TASK-8686",
      title: "I'll parse the wireless SSL protocol, that should driver the API panel!",
      status: "canceled",
      label: "feature",
      priority: "medium",
    },
    {
      id: "TASK-1280",
      title: "Use the digital TLS panel, then you can transmit the haptic system!",
      status: "done",
      label: "bug",
      priority: "high",
    },
    {
      id: "TASK-7262",
      title: "The UTF8 application is down, parse the neural bandwidth so we can back up the PNG firewall!",
      status: "done",
      label: "feature",
      priority: "high",
    },
    {
      id: "TASK-1138",
      title: "Generating the driver won't do anything, we need to quantify the 1080p SMTP bandwidth!",
      status: "in progress",
      label: "feature",
      priority: "medium",
    },
    {
      id: "TASK-7184",
      title: "We need to program the back-end THX pixel!",
      status: "todo",
      label: "feature",
      priority: "low",
    },
  ];
  // const [Items, setItems] = useState<Item[]>([]);
  // const queryClient = getQueryClient();

  // useEffect(() => {
  //   async function getItem() {
  //     const items = await listItem();
  //     setItems(items);
  //   }
  //   getItem();
  // }, []);
  return (
    <div className="flex flex-row p-10 w-full h-full">
      {/* <DataTable data={tasks} columns={columns} /> */}
      {/* <ItemLayout items={Items} /> */}
      <ItemWrapper />
    </div>
  );
}
