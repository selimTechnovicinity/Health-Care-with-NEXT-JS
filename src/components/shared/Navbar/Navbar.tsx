"use client";
import { getUserInfo, removeUser } from "@/services/auth.services";
import { decodedToken } from "@/utils/jwt";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const authToken = getUserInfo();
  const userData = authToken ? decodedToken(authToken) : null;

  const handleLogout = () => {
    removeUser();
    router.refresh();
  };

  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h4" component={Link} href="/" fontWeight={600}>
          P
          <Box component="span" color="primary.main">
            H
          </Box>{" "}
          Health Care
        </Typography>

        <Stack direction="row" justifyContent="space-between" gap={4}>
          <Typography component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography component={Link} href="/login">
            Healht Plans
          </Typography>
          <Typography component={Link} href="/login">
            Medicine
          </Typography>
          <Typography component={Link} href="/login">
            Diagnosis
          </Typography>
          <Typography component={Link} href="/login">
            NGOs
          </Typography>
        </Stack>
        {userData?.userId ? (
          <Button variant="outlined" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <Button component={Link} href="/login">
            Login
          </Button>
        )}
      </Stack>
    </Container>
  );
};

export default Navbar;
