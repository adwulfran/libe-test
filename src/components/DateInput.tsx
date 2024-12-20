import { DatePicker } from "@mui/x-date-pickers";
import { FieldValues, useController, UseControllerProps } from "react-hook-form";


export default function DateInput<T extends FieldValues>(props: UseControllerProps<T>) {
    const { field, formState } = useController(props);

    return (
        <DatePicker
            {...field}
            label={`Select ${props.name}`}
            onChange={(date) => field.onChange(date)}
            slotProps={{
                textField: {
                    error: !!formState.errors[props.name],
                    helperText: formState.errors[props.name]?.message?.toString()
                },
            }}
        />
    )
}