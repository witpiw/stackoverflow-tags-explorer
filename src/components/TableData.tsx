import { TableCell, TableRow } from "@mui/material"
import { ITagsApiSuccessResponse } from "../types/TagsApi"
import { TableEmptyMessage } from "./TableEmptyMessage"

interface ITableDataProps {
    data: ITagsApiSuccessResponse
}

const TableData = ({ data }: ITableDataProps) => {
    return (
        <>
            {!data.items.length && <TableEmptyMessage message="Brak danych do wyświetlenia" />}
            {
                data.items.map((item, idx) => (
                    <TableRow key={idx}>
                        <TableCell align="center">
                            {item.name}
                        </TableCell>
                        <TableCell align="center">
                            {item.count}
                        </TableCell>
                    </TableRow>
                ))
            }
        </>
    )
}

export { TableData }