import { TableHead as MuiTableHead, TableCell, TableRow, TableSortLabel } from "@mui/material"
import { IParams } from "../types/TagsApi"
import { useParametersStore } from "../hooks/useParametersStore"

interface ITableHeadProps {
    cells: string[],
    cellToSort: Map<string, IParams["sort"]>
}

const TableHead = ({ cells, cellToSort }: ITableHeadProps) => {
    const { sort, order, setSort, setOrder } = useParametersStore()

    const handleSortChange = (cell: string) => {
        const sortFromCell = cellToSort.get(cell)
        if (sortFromCell && sort != sortFromCell) return setSort(sortFromCell)

        if (order === "asc") setOrder("desc")
        else setOrder("asc")
    }

    return (
        <MuiTableHead>
            <TableRow>
                {cells.map((cell, idx) => (
                    <TableCell key={idx} align="center" sx={{ fontSize: "1rem" }}>
                        <TableSortLabel active={sort === cellToSort.get(cell)} direction={order} onClick={() => handleSortChange(cell)}>
                            <strong>{cell}</strong>
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </MuiTableHead>
    )
}

export { TableHead }