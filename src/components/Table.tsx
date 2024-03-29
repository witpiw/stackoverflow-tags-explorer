import { TableContainer, Table as MuiTable, TableBody } from "@mui/material"
import { useParametersStore } from "../hooks/useParametersStore"
import { TableSkeletonLoading } from "./TableSkeletonLoading"
import { TableHead } from "./TableHead"
import { IParams, ITagsApiResponse } from "../types/TagsApi"
import { TableFooterPagination } from "./TableFooterPagination"
import { TablePageSizeControll } from "./TablePageSizeControll"
import { TableError } from "./TableError"
import { TableData } from "./TableData"
import { TableEmptyMessage } from "./TableEmptyMessage"

interface ITableProps {
    data?: ITagsApiResponse
    loading?: boolean
    error?: Error | null
}

const cells = ["Nazwa tag'u", "Liczba powiązanych postów"]
const cellToSort = new Map<string, IParams["sort"]>([
    [cells[0], "name"],
    [cells[1], "popular"]
])

const Table = ({ data, loading, error }: ITableProps) => {
    const { pageSize } = useParametersStore()


    return (
        <TableContainer sx={{ maxHeight: "100vh" }}>
            <TablePageSizeControll />
            <MuiTable stickyHeader>
                <TableHead cells={cells} cellToSort={cellToSort} />
                <TableBody>
                    {
                        (() => {
                            if (error) return <TableError error={error} />
                            if (loading) return <TableSkeletonLoading rows={pageSize} itemsPerRow={2} />
                            if (data && "items" in data) return <TableData data={data} />

                            return <TableEmptyMessage message="Brak danych do wyświetlenia" />
                        })()
                    }
                </TableBody>
                <TableFooterPagination hasMore={!!(data && "items" in data && data.has_more)} />
            </MuiTable>
        </TableContainer>
    )
}

export { Table }