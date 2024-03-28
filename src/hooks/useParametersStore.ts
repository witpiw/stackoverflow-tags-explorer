import { create } from "zustand";
import { IParams } from "../types/TagsApi";

interface IParametersStore {
  page: IParams["page"];
  pageSize: IParams["pagesize"];
  sort: IParams["sort"];
  order: IParams["order"];

  setPage: (page: IParams["page"]) => void;
  setPageSize: (pageSize: IParams["pagesize"]) => void;
  setSort: (sort: IParams["sort"]) => void;
  setOrder: (order: IParams["order"]) => void;
}

const useParametersStore = create<IParametersStore>()((set) => ({
  page: 1,
  pageSize: 10,
  sort: "popular",
  order: "desc",
  setPage: (page) => {
    page && set({ page });
  },
  setPageSize: (pageSize) => {
    pageSize && set({ pageSize });
  },
  setSort: (sort) => {
    sort && set({ sort });
  },
  setOrder: (order) => {
    order && set({ order });
  },
}));

export { useParametersStore };
