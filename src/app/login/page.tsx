"use client";
import assets from "@/assets";
import PHForm from "@/components/forms/PHForm";
import PHInput from "@/components/forms/PHInput";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.services";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Button,
  Container,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export const LoginValidationSchema = z.object({
  email: z.string().email("Please enter a valid email!"),
  password: z.string().min(3, "Password must be at least 3 characters!"),
});

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = async (values: FieldValues) => {
    try {
      const res = await userLogin(values);
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
            <PHForm
              onSubmit={handleLogin}
              resolver={zodResolver(LoginValidationSchema)}
              defaultValues={{
                email: "",
                password: "",
              }}
            >
              <Grid2 container spacing={2} my={1}>
                <Grid2 size={{ xs: 6 }}>
                  <PHInput
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth={true}
                  />
                </Grid2>
                <Grid2 size={{ xs: 6 }}>
                  <PHInput
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth={true}
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
            </PHForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
