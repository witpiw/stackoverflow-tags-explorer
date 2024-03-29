import type { Meta, StoryObj } from "@storybook/react";
import { TableHead } from "../components/TableHead";
import { Table } from "@mui/material";

const meta = {
    title: "Table/Head",
    component: TableHead
} satisfies Meta<typeof TableHead>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        cells: ["One", "Two"],
        cellToSort: new Map([["One", "popular"], ["Two", "name"]])
    },
    render: ({ cells, cellToSort }) => {
        return (
            <Table>
                <TableHead cells={cells} cellToSort={cellToSort} />
            </Table>
        )
    }
}
