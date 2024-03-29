import type { Meta, StoryObj } from "@storybook/react";
import { TableEmptyMessage } from "../components/TableEmptyMessage";
import { Table, TableBody } from "@mui/material";

const meta = {
    title: "Table/Empty Message",
    component: TableEmptyMessage,
} satisfies Meta<typeof TableEmptyMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        message: "Brak danych do wyświetlenia"
    },
    render: ({ message }) => {
        return (
            <Table>
                <TableBody>
                    <TableEmptyMessage message={message} />
                </TableBody>
            </Table>
        )
    }
}

