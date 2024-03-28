import { Alert, AlertTitle, Stack, TableCell, TableRow } from "@mui/material"

interface ITableErrorProps {
    error: Error
}

const TableError = ({ error }: ITableErrorProps) => {
    return (
        <TableRow>
            <TableCell colSpan={2}>
                <Stack justifyContent={"center"} alignItems={"center"}>
                    <Alert severity="error" sx={{ maxWidth: "600px", width: "100%" }}>
                        <AlertTitle>Błąd podczas pobierania danych</AlertTitle>
                        {error.name}: {error.message}
                    </Alert>
                </Stack>
            </TableCell>
        </TableRow>
    )
}

export { TableError }