import {
  InputAdornment,
  OutlinedInput,
  OutlinedInputProps,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    "&.MuiOutlinedInput-root.Mui-focused": {
      "& > fieldset": {
        borderColor: "rgba(226, 115, 18, 0.86)",
      },
    },
    "&.MuiOutlinedInput-root:hover": {
      "& > fieldset": {
        borderColor: "rgba(237, 229, 222, 0.5)",
      },
    },
  },
}));

interface LoginFieldProps extends OutlinedInputProps {
  startIcon: JSX.Element;
}

function LoginField({ startIcon, ...props }: LoginFieldProps) {
  const classes = useStyles();
  return (
    <div>
      <OutlinedInput
        startAdornment={
          <InputAdornment position="start">{startIcon}</InputAdornment>
        }
        fullWidth
        classes={classes}
        {...props}
      />
    </div>
  );
}

export default LoginField;
