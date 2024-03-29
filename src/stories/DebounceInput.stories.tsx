import type { Meta, StoryObj } from "@storybook/react";
import { DebounceInput } from "../components/DebounceInput";
import { useState } from "react";

const meta = {
    title: "DebounceInput",
    component: DebounceInput,
    tags: ["autodocs"],
} satisfies Meta<typeof DebounceInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        debounceTimeout: 2000,
        handleDebounce: () => { },
    },
    render: (args) => {
        const [value, setValue] = useState("")

        return (
            <>
                <DebounceInput defaultValue={value} debounceTimeout={args.debounceTimeout} onChange={() => { }} handleDebounce={(e) => setValue(e.target.value)} />
                <p>Value: {value}</p>
            </>
        )
    }
};

