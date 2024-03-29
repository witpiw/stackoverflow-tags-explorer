import type { Meta, StoryObj } from "@storybook/react";
import { TablePageSizeControll } from "../components/TablePageSizeControll";
import { Table, TableBody } from "@mui/material";
import { useParametersStore } from "../hooks/useParametersStore";
import { TableSkeletonLoading } from "../components/TableSkeletonLoading";

const meta = {
    title: "Table/Page Size",
    component: TablePageSizeControll
} satisfies Meta<typeof TablePageSizeControll>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    render: () => {
        const { pageSize } = useParametersStore()

        return (
            <>
                <TablePageSizeControll />
                <Table>
                    <TableBody>
                        <TableSkeletonLoading rows={pageSize} itemsPerRow={2} />
                    </TableBody>
                </Table>
            </>
        )
    }
}
