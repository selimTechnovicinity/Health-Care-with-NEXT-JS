"use client";
import assets from "@/assets";
import PHForm from "@/components/forms/PHForm";
import PHInput from "@/components/forms/PHInput";
import { registerPatient } from "@/services/actions/registerPatient";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.services";
import { modifyPayload } from "@/utils/modifyPayload";
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

export const patientValidationSchema = z.object({
  name: z.string().min(1, "Please enter your name!"),
  email: z.string().email("Please enter a valid email address!"),
  contactNumber: z
    .string()
    .regex(/^\d{11}$/, "Please enter a valid phone number!"),
  address: z.string().min(1, "Please enter your adsress!"),
});

export const registerValidationSchema = z.object({
  password: z.string().min(3, "Password must be 3 characters!"),
  patient: patientValidationSchema,
});

const Register = () => {
  const router = useRouter();

  const handleRegister = async (values: FieldValues) => {
    const data = modifyPayload(values);

    try {
      const res = await registerPatient(data);

      if (res?.data) {
        toast.success(res.message);
        const result = await userLogin({
          password: values.password,
          email: values.patient.email,
        });
        if (result?.data) {
          storeUserInfo({ accessToken: result?.data?.accessToken });
          router.push("/");
        }
      } else {
        toast.error(res.message);
      }
    } catch (err) {
      console.log(err);
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
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Patient Register
              </Typography>
            </Box>
          </Stack>
          <Box>
            <PHForm
              onSubmit={handleRegister}
              resolver={zodResolver(registerValidationSchema)}
              // defaultValues={}
            >
              <Grid2 container spacing={2} my={1}>
                <Grid2 size={{ xs: 12 }}>
                  <PHInput name="patient.name" label="Name" fullWidth={true} />
                </Grid2>
                <Grid2 size={{ xs: 6 }}>
                  <PHInput
                    name="patient.email"
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
                <Grid2 size={{ xs: 6 }}>
                  <PHInput
                    name="patient.contactNumber"
                    label="Contact Number"
                    fullWidth={true}
                  />
                </Grid2>
                <Grid2 size={{ xs: 6 }}>
                  <PHInput
                    name="patient.address"
                    label="Address"
                    type="text"
                    fullWidth={true}
                  />
                </Grid2>
              </Grid2>
              <Button
                fullWidth={true}
                sx={{
                  margin: "10px 0px",
                }}
                type="submit"
              >
                Register
              </Button>

              <Typography component="p" variant="h6" fontWeight={200}>
                Do you already have an account?{" "}
                <Link href="/login" color="primary">
                  Login
                </Link>
              </Typography>
            </PHForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default Register;
