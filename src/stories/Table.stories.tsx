import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "../components/Table";
import { ITagsApiSuccessResponse } from "../types/TagsApi";

const meta = {
  title: "Table",
  component: Table,
  tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData: ITagsApiSuccessResponse = {
  has_more: false,
  quota_max: 1,
  quota_remaining: 1,
  items: [
    {
      count: 1,
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      name: "Tag 1"
    },
    {
      count: 2,
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      name: "Tag 2"
    }
  ]
}
export const SampleData: Story = {
  args: {
    data: sampleData
  },
};

export const Loading: Story = {
  args: {
    loading: true
  },
};

const sampleError = { name: "Error", message: "Sample error" } as Error
export const Error: Story = {
  args: {
    error: sampleError
  },
};

