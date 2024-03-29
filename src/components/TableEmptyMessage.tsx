import { TableCell, TableRow } from "@mui/material"

interface ITableEmptyMessageProps {
    message: string
}

const TableEmptyMessage = ({ message }: ITableEmptyMessageProps) => {
    return <TableRow><TableCell colSpan={2} align="center">{message}</TableCell></TableRow>
}

export { TableEmptyMessage }