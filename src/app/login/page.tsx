"use client";
import assets from "@/assets";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.services";
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
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

export type TLoginData = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const { register, handleSubmit } = useForm<TLoginData>();
  const router = useRouter();

  const onSubmit: SubmitHandler<TLoginData> = async (values) => {
    try {
      const res = await userLogin(values);
      console.log(res);
      if (res?.data) {
        storeUserInfo({ accessToken: res?.data?.accessToken });
        toast.success(res.message);
        router.push("/");
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid2 container spacing={2} my={1}>
                <Grid2 size={{ xs: 6 }}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    size="small"
                    type="email"
                    fullWidth={true}
                    {...register("email")}
                  />
                </Grid2>
                <Grid2 size={{ xs: 6 }}>
                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("password")}
                  />
                </Grid2>
              </Grid2>
              <Typography
                mb={1}
                textAlign="end"
                component="p"
                variant="h6"
                fontWeight={100}
              >
                <Link href="/forgot-password" color="primary">
                  Forgot Password?
                </Link>
              </Typography>
              <Button
                fullWidth={true}
                sx={{
                  margin: "10px 0px",
                }}
                type="submit"
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
