import { TableContainer, Table as MuiTable, TableBody } from "@mui/material"
import { useTags } from "../hooks/useTags"
import { useParametersStore } from "../hooks/useParametersStore"
import { TableSkeletonLoading } from "./TableSkeletonLoading"
import { TableHead } from "./TableHead"
import { IParams } from "../types/TagsApi"
import { TableFooterPagination } from "./TableFooterPagination"
import { TablePageSizeControll } from "./TablePageSizeControll"
import { TableError } from "./TableError"
import { TableData } from "./TableData"

const cells = ["Nazwa tag'u", "Liczba powiązanych postów"]
const cellToSort = new Map<string, IParams["sort"]>([
    [cells[0], "name"],
    [cells[1], "popular"]
])

const Table = () => {
    const { data, isLoading, error } = useTags()

    const { pageSize } = useParametersStore()


    return (
        <TableContainer sx={{ maxHeight: "100vh" }}>
            <TablePageSizeControll />
            <MuiTable stickyHeader>
                <TableHead cells={cells} cellToSort={cellToSort} />
                <TableBody>
                    {error && <TableError error={error} />}
                    {isLoading && <TableSkeletonLoading rows={pageSize} itemsPerRow={2} />}
                    {data && "items" in data && <TableData data={data} />}
                </TableBody>
                <TableFooterPagination hasMore={!!(data && "items" in data && data.has_more)} />
            </MuiTable>
        </TableContainer>
    )
}

export { Table }