import type { Meta, StoryObj } from "@storybook/react";
import { Table, TableBody } from "@mui/material";
import { TableFooterPagination } from "../components/TableFooterPagination";
import { TableSkeletonLoading } from "../components/TableSkeletonLoading";

const meta = {
    title: "Table/Footer pagination",
    component: TableFooterPagination
} satisfies Meta<typeof TableFooterPagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        hasMore: false
    },
    render: (args) => {
        return (
            <>
                <Table>
                    <TableBody>
                        <TableSkeletonLoading rows={2} itemsPerRow={2} />
                    </TableBody>
                    <TableFooterPagination hasMore={args.hasMore} />
                </Table>
            </>
        )
    }
}

export const HasMore: Story = {
    args: {
        hasMore: true
    },
    render: (args) => {
        return (
            <>
                <Table>
                    <TableBody>
                        <TableSkeletonLoading rows={2} itemsPerRow={2} />
                    </TableBody>
                    <TableFooterPagination hasMore={args.hasMore} />
                </Table>
            </>
        )
    }
}
