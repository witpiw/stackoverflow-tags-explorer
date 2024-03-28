import { Skeleton, TableCell, TableRow } from "@mui/material"

interface ITableSkeletonLoadingProps {
    rows: number
    itemsPerRow: number
}

const TableSkeletonLoading = ({ rows, itemsPerRow }: ITableSkeletonLoadingProps) => {
    return (
        <>
            {
                [...Array(rows)].map((_, rowIdx) => (
                    <TableRow key={rowIdx}>
                        {
                            [...Array(itemsPerRow)].map((_, colIdx) => (
                                <TableCell key={colIdx}>
                                    <Skeleton animation="wave" variant="text" />
                                </TableCell>
                            ))
                        }
                    </TableRow>))
            }
        </>
    )
}

export { TableSkeletonLoading }