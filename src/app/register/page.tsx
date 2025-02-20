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

const Register = () => {
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
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Patient Register
              </Typography>
            </Box>
          </Stack>
          <Box>
            <form>
              <Grid2 container spacing={2} my={1}>
                <Grid2 size={{ xs: 12 }}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                  />
                </Grid2>
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
                <Grid2 size={{ xs: 6 }}>
                  <TextField
                    label="Contact Number"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                  />
                </Grid2>
                <Grid2 size={{ xs: 6 }}>
                  <TextField
                    label="Address"
                    type="text"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                  />
                </Grid2>
              </Grid2>
              <Button
                fullWidth={true}
                sx={{
                  margin: "10px 0px",
                }}
              >
                Register
              </Button>

              <Typography component="p" variant="h6" fontWeight={200}>
                Do you already have an account?{" "}
                <Link href="/login" color="primary">
                  Login
                </Link>
              </Typography>
            </form>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default Register;
