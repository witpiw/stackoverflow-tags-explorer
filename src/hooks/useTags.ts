import { useQuery } from "@tanstack/react-query";
import { fetchTags } from "../api/fetchTags";
import { useParametersStore } from "./useParametersStore";

const useTags = () => {
  const { page, pageSize, order, sort } = useParametersStore();

  return useQuery({
    queryKey: ["tags", { page, order, sort, pageSize }],
    queryFn: () => fetchTags({ page, order, sort, pagesize: pageSize }),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
};

export { useTags };
