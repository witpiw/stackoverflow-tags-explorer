interface IExternalLink {
  type: string;
  link: string;
}

interface ICollectives {
  tags: string[];
  external_links: IExternalLink[];
  description: string;
  link: string;
  name: string;
  slug: string;
}

interface ITag {
  has_synonyms: boolean;
  is_moderator_only: boolean;
  is_required: boolean;
  count: number;
  name: string;
  collectives?: ICollectives[];
}

interface ITagsApiSuccessResponse {
  items: ITag[];
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
}

interface ITagsApiErrorResponse {
  error_id: number;
  error_message: string;
  error_name: string;
}

type ITagsApiResponse = ITagsApiSuccessResponse | ITagsApiErrorResponse;

interface IParams {
  page: number;
  pagesize: number;
  sort: "popular" | "activity" | "name";
  order: "asc" | "desc";
}

export type {
  IParams,
  ITagsApiResponse,
  ITagsApiSuccessResponse,
  ITagsApiErrorResponse,
  ITag,
  ICollectives,
  IExternalLink,
};
