
import {
  TextField as MuiTextArea,
  TextFieldProps
} from "@mui/material";
import { useField } from "formik";
import { ReactNode } from "react";
import { useFormik, FormikProps } from "formik";

export function TextField( Props : TextFieldProps) {
  return (
    <MuiTextArea 
      {...Props}
      size="small"
      fullWidth
      InputLabelProps={{
        shrink: true,
      }}
      
    
    />
  )

}