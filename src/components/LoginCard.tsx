/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Card, CardProps, Grid, Link, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box, Theme } from "@mui/system";
import LoginForm from "./LoginForm";

function MyCard({ children, ...props }: CardProps): JSX.Element {
  return (
    <Card
      sx={{
        width: {
          xs: "500px",
          sm: "400px",
          md: "400px",
          lg: "500px",
          xl: "600px",
        },
        height: {
          xs: "60vh",
          sm: "70vh",
          md: "70vh",
        },
      }}
      {...props}
    >
      {children}
    </Card>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
}));

function LoginCard(): JSX.Element {
  const classes = useStyles();

  return (
    <Box
      className={classes.root}
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <MyCard>
        <LoginForm />
      </MyCard>
      <MyCard>
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
          <Grid width="100%" item>
            <Box
              maxWidth="100%"
              display="flex"
              flexDirection="column"
              textAlign="center"
              mt={7}
              justifyContent="center"
            >
              <Typography fontSize="1.08rem" variant="overline">
                Sign up and comment about your
              </Typography>
              <Typography fontSize="0.65rem" variant="overline">
                favorite anime
              </Typography>
              <Link
                mt={1}
                fontSize="0.73rem"
                variant="button"
                color="rgba(226, 115, 18, 0.86)"
                href="#"
                underline="always"
              >
                know more
              </Link>
            </Box>
          </Grid>
          <Grid item>
            <Box
              maxWidth="100%"
              display="flex"
              flexDirection="column"
              textAlign="center"
              mt={7}
              justifyContent="center"
            >
              <Typography fontSize="0.9rem" variant="overline">
                Is free and easy to use.
              </Typography>
              <Button variant="outlined">Sign Up</Button>
            </Box>
          </Grid>
        </Grid>
      </MyCard>
    </Box>
  );
}

export default LoginCard;
