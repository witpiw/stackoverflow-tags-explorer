import { Stack } from "@mui/material"
import { DebounceInput } from "./DebounceInput"
import { useParametersStore } from "../hooks/useParametersStore"
import { ChangeEvent, useState } from "react"

const TablePageSizeControll = () => {
    const [inputError, setInputError] = useState(false)

    const { pageSize, setPageSize } = useParametersStore()
    const handleDebounce = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checkValidity()) {
            setInputError(false)
            setPageSize(Number(e.target.value))
            return
        }
        setInputError(true)
    }

    return (
        <Stack justifyContent={"center"} alignItems={"center"} m={2}>
            <DebounceInput defaultValue={pageSize} type="number" handleDebounce={handleDebounce} debounceTimeout={250} size="small" error={inputError} helperText={inputError ? "Maks 100, min 1" : "Liczba elementów w tabeli"} inputProps={{ min: 1, max: 100, style: { textAlign: "center" } }} />
        </Stack>
    )
}

export { TablePageSizeControll }