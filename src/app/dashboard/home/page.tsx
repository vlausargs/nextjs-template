import ItemWrapper from "@/components/item/ItemWrapper";
import { columns } from "@/components/item/itemColumns";
import DataTable from "@/components/ui/ue/datatable";

import React, { useEffect, useState } from "react";

export default function Page() {
  return (
    <div className="flex flex-row p-10 w-full h-full">
      <ItemWrapper />
    </div>
  );
}
