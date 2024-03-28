import { TableFooter as MuiTableFooter, Pagination, Stack, TableCell, TableRow } from "@mui/material"
import { useParametersStore } from "../hooks/useParametersStore"

interface ITableFooterPaginationProps {
    hasMore: boolean
}

const TableFooterPagination = ({ hasMore }: ITableFooterPaginationProps) => {
    const { page, setPage } = useParametersStore()

    return (
        <MuiTableFooter>
            <TableRow>
                <TableCell colSpan={2} align="center">
                    <Stack justifyContent={"center"} alignItems={"center"}>
                        <Pagination variant="outlined" color="primary" count={hasMore ? page + 1 : page} page={page} boundaryCount={1} siblingCount={0} onChange={(_, page) => setPage(page)} />
                    </Stack>
                </TableCell>
            </TableRow>
        </MuiTableFooter>
    )
}

export { TableFooterPagination }