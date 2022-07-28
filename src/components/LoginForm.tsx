/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  Typography,
} from "@mui/material";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import KeyIcon from "@mui/icons-material/Key";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React from "react";
import LoginField from "./LoginField";

interface State {
  username: string;
  password: string;
  showPassword: boolean;
}

function LoginForm() {
  const [values, setValues] = React.useState<State>({
    username: "",
    password: "",
    showPassword: false,
  });

  const placeholders: { username: string; password: string } = {
    username: "Username or Email",
    password: "Password",
  };

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Grid
      container
      alignItems="center"
      pt={5}
      spacing={4}
      direction="column"
      sx={{
        minHeight: "100%",
        minWidth: "100%",
      }}
    >
      <Grid item>
        <Typography
          variant="button"
          sx={{ color: "rgba(226, 115, 18, 1.00)", fontSize: "1.05rem" }}
        >
          Sign in
        </Typography>
      </Grid>
      <Grid width="60%" item>
        <LoginField
          startIcon={<AssignmentIndIcon />}
          value={values.username}
          onChange={handleChange("username")}
          placeholder={placeholders.username}
        />
      </Grid>
      <Grid width="60%" item>
        <LoginField
          startIcon={<KeyIcon />}
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          placeholder={placeholders.password}
          endAdornment={
            <InputAdornment sx={{ paddingRight: "10px" }} position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        <Link
          fontSize="0.63rem"
          variant="button"
          color="rgba(226, 115, 18, 0.86)"
          href="#"
          underline="always"
        >
          Forgot Password?
        </Link>
      </Grid>
      <Grid
        display="flex"
        alignItems="center"
        justifyContent="center"
        item
        mt={2.8}
        width="50%"
      >
        <Button fullWidth variant="outlined">
          Log In
        </Button>
      </Grid>
    </Grid>
  );
}

export default LoginForm;
