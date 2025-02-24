"use client";
import { getUserInfo, removeUser } from "@/services/auth.services";
import { decodedToken } from "@/utils/jwt";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  const router = useRouter();
  const authToken = getUserInfo();
  const userData = authToken ? decodedToken(authToken) : null;

  const handleLogout = () => {
    removeUser();
    router.refresh();
  };
  return (
    <>
      {userData?.userId ? (
        <Button variant="outlined" onClick={handleLogout}>
          Logout
        </Button>
      ) : (
        <Button component={Link} href="/login">
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;
