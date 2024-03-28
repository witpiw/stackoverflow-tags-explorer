import { TableCell, TableRow } from "@mui/material"
import { ITagsApiSuccessResponse } from "../types/TagsApi"

interface ITableDataProps {
    data: ITagsApiSuccessResponse
}

const TableData = ({ data }: ITableDataProps) => {
    return (
        <>
            {!data.items.length && <TableRow><TableCell colSpan={2} align="center">Brak danych do wyświetlenia</TableCell></TableRow>}
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