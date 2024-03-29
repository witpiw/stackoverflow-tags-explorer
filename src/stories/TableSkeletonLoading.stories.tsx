import type { Meta, StoryObj } from "@storybook/react";
import { TableSkeletonLoading } from "../components/TableSkeletonLoading";
import { Table, TableBody } from "@mui/material";

const meta = {
    title: "Table/Skeleton Loading",
    component: TableSkeletonLoading
} satisfies Meta<typeof TableSkeletonLoading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        rows: 2,
        itemsPerRow: 2
    },
    render: ({ rows, itemsPerRow }) => {
        return (
            <Table>
                <TableBody>
                    <TableSkeletonLoading rows={rows} itemsPerRow={itemsPerRow} />
                </TableBody>
            </Table>
        )
    }
}
