import assets from "@/assets";
import {
  Box,
  Button,
  Container,
  Grid2,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Image src={assets.svgs.logo} alt="logo" />
            </Box>
            <Box
              sx={{
                margin: "20px",
              }}
            >
              <Typography variant="h6" fontWeight={600}>
                Login PH Health Care
              </Typography>
            </Box>
          </Stack>
          <Box>
            <form>
              <Grid2 container spacing={2} my={1}>
                <Grid2 size={{ xs: 6 }}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    size="small"
                    type="email"
                    fullWidth={true}
                  />
                </Grid2>
                <Grid2 size={{ xs: 6 }}>
                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                  />
                </Grid2>
              </Grid2>
              <Typography mb={1} textAlign='end' component="p" variant="h6" fontWeight={100}>
                <Link href="/forgot-password" color="primary">
                  Forgot Password?
                </Link>
              </Typography>
              <Button
                fullWidth={true}
                sx={{
                  margin: "10px 0px",
                }}
              >
                Login
              </Button>

              <Typography component="p" variant="h6" fontWeight={200}>
                Don't have an account?{" "}
                <Link href="/register" color="primary">
                  Register
                </Link>
              </Typography>
            </form>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
