// material-ui
import { Grid, Stack, Typography } from "@mui/material";
import AuthWrapper from "../../components/Auth/AuthWrapper";
import AuthLogin from "../../components/Auth/AuthLogin";
import Logo from "../../components/Auth/Logo";
import { Box } from "@mui/system";
// project import
// import AuthLogin from './auth-forms/AuthLogin';

// ================================|| LOGIN ||================================ //

const Login = () => (
  <AuthWrapper>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ mb: { xs: -0.5, sm: 0.5 } }}
        >
          <Logo />
        </Stack>
     
          <Typography variant="h4" >
            Login
          </Typography>
       
      </Grid>
      <Grid item xs={12}>
        <AuthLogin />
      </Grid>
    </Grid>
  </AuthWrapper>
);

export default Login;
