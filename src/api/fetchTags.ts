import { IParams, ITagsApiResponse } from "../types/TagsApi";

const fetchTags = ({ pagesize, page, sort, order }: IParams) => {
  return fetch(
    `https://api.stackexchange.com/2.3/tags?site=stackoverflow&` +
      new URLSearchParams({
        pagesize: `${pagesize || 10}`,
        page: `${page || 1}`,
        sort: sort || "popular",
        order: order || "desc",
      })
  ).then((res) => res.json() as Promise<ITagsApiResponse>);
};

export { fetchTags };
