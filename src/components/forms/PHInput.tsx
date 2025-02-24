import { SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  sx?: SxProps;
  required: boolean;
};

const PHInput = ({
  name,
  label,
  type = "text",
  size = "small",
  fullWidth,
  sx,
  placeholder,
  required,
}: TInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          sx={{ ...sx }}
          label={label}
          variant="outlined"
          size={size}
          type={type}
          fullWidth={fullWidth}
          placeholder={placeholder}
          required={required}
        />
      )}
    />
  );
};

export default PHInput;
