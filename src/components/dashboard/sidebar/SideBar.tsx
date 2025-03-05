import assets from "@/assets";
import { TUserRole } from "@/types/common";
import { drawerItems } from "@/utils/drawerItems";

import { getUserInfo } from "@/services/auth.services";
import { Box, List, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SidebarItem from "./SidebarItem";

const SideBar = () => {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const userInfo = getUserInfo();
    const { role } = userInfo;
    setUserRole(role);
  }, []);
  return (
    <Box>
      <Stack
        direction="row"
        alignContent="center"
        justifyContent="center"
        gap={1}
        component={Link}
        href="/"
        sx={{
          py: 1,
          mt: 1,
        }}
      >
        <Image src={assets.svgs.logo} width={40} height={40} alt="logo" />
        <Typography variant="h6">
          P
          <Box component="span" color="primary.main">
            H
          </Box>{" "}
          Health Care
        </Typography>
      </Stack>
      <List>
        {drawerItems(userRole as TUserRole).map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default SideBar;
