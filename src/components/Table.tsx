import { TableContainer, Table as MuiTable, TableHead, TableRow, TableCell, TableBody } from "@mui/material"
import { useTags } from "../hooks/useTags"
import { useParametersStore } from "../hooks/useParametersStore"
import { TableSkeletonLoading } from "./TableSkeletonLoading"

const Table = () => {
    const { data, isLoading, error } = useTags()

    const { pageSize } = useParametersStore()


    return (
        <TableContainer>
            <MuiTable>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Nazwa tag'u
                        </TableCell>
                        <TableCell>
                            Liczba powiązanych postów
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(error || (data && !("items" in data))) && <p>Error</p>}
                    {isLoading && <TableSkeletonLoading rows={pageSize} itemsPerRow={2} />}
                    {data && "items" in data &&
                        data.items.map((item, idx) => (
                            <TableRow key={idx}>
                                <TableCell>
                                    {item.name}
                                </TableCell>
                                <TableCell>
                                    {item.count}
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </MuiTable>
        </TableContainer>
    )
}

export { Table }