import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Card, Grid, IconButton, InputAdornment } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import KeyIcon from "@mui/icons-material/Key";
import LoginField from "./LoginField";

interface State {
  username: string;
  password: string;
  showPassword: boolean;
}

const placeholders: { username: string; password: string } = {
  username: "Username or Email",
  password: "Password",
};

function LoginCard(): JSX.Element {
  const [values, setValues] = React.useState<State>({
    username: "",
    password: "",
    showPassword: false,
  });

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
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Card
        sx={{
          width: {
            xs: "300px",
            sm: "400px",
            md: "450px",
            lg: "550px",
            xl: "600px",
          },
          height: "90vh",
        }}
      >
        <Grid
          container
          alignItems="center"
          pt={10}
          spacing={4}
          direction="column"
          sx={{
            minHeight: "100%",
            minWidth: "100%",
          }}
        >
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
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}

export default LoginCard;
