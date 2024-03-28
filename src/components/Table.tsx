import { TableContainer, Table as MuiTable, TableRow, TableCell, TableBody } from "@mui/material"
import { useTags } from "../hooks/useTags"
import { useParametersStore } from "../hooks/useParametersStore"
import { TableSkeletonLoading } from "./TableSkeletonLoading"
import { TableHead } from "./TableHead"
import { IParams } from "../types/TagsApi"
import { TableFooterPagination } from "./TableFooterPagination"

const cells = ["Nazwa tag'u", "Liczba powiązanych postów"]
const cellToSort = new Map<string, IParams["sort"]>([
    [cells[0], "name"],
    [cells[1], "popular"]
])

const Table = () => {
    const { data, isLoading, error } = useTags()

    const { pageSize } = useParametersStore()


    return (
        <TableContainer>
            <MuiTable>
                <TableHead cells={cells} cellToSort={cellToSort} />
                <TableBody>
                    {error && <p>{error.message}</p>}
                    {isLoading && <TableSkeletonLoading rows={pageSize} itemsPerRow={2} />}
                    {data && "items" in data &&
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
                </TableBody>
                <TableFooterPagination hasMore={!!(data && "items" in data && data.has_more)} />
            </MuiTable>
        </TableContainer>
    )
}

export { Table }