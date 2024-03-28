import {
  IParams,
  ITagsApiErrorResponse,
  ITagsApiResponse,
} from "../types/TagsApi";

const fetchTags = async ({
  pagesize,
  page,
  sort,
  order,
}: IParams): Promise<ITagsApiResponse> => {
  const response = await fetch(
    `https://api.stackexchange.com/2.3/tags?site=stackoverflow&` +
      new URLSearchParams({
        pagesize: `${pagesize || 10}`,
        page: `${page || 1}`,
        sort: sort || "popular",
        order: order || "desc",
      })
  );

  if (!response.ok) {
    const errorResponse: ITagsApiErrorResponse | any = await response.json();
    throw new Error(
      errorResponse?.error_message || "Error while fetching data"
    );
  }

  return response.json();
};

export { fetchTags };
