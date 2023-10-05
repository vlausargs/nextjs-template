import { QueryClient } from "@tanstack/query-core";
import { cache } from "react";

export const getQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false,
      },
    },
  });
export const getCacheQueryClient = cache(() => getQueryClient());
