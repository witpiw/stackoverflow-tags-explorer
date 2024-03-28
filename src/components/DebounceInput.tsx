import { TextField, TextFieldProps } from "@mui/material";
import { ChangeEvent, useRef } from "react";

type DebounceProps = {
    handleDebounce: (event: ChangeEvent<HTMLInputElement>) => void;
    debounceTimeout: number;
};

const DebounceInput = (props: TextFieldProps & DebounceProps) => {
    const { handleDebounce, debounceTimeout, ...rest } = props;

    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            handleDebounce(event);
        }, debounceTimeout);
    };

    return <TextField {...rest} onChange={handleChange} />;
}

export { DebounceInput }