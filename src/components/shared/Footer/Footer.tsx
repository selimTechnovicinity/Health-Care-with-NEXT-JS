import facebookIcon from "@/assets/landing_page/facebook.png";
import instaIcon from "@/assets/landing_page/instagram.png";
import linkedInIcon from "@/assets/landing_page/linkedin.png";
import xIcon from "@/assets/landing_page/twitter.png";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17, 26, 34)">
      <Container>
        <Stack direction="row" justifyContent="center" gap={4}>
          <Typography color="#fff" component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography color="#fff" component={Link} href="/login">
            Healht Plans
          </Typography>
          <Typography color="#fff" component={Link} href="/login">
            Medicine
          </Typography>
          <Typography color="#fff" component={Link} href="/login">
            Diagnosis
          </Typography>
          <Typography color="#fff" component={Link} href="/login">
            NGOs
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="center" gap={2} py={3}>
          <Image src={facebookIcon} alt="facebook" width={30} />
          <Image src={instaIcon} alt="instagram" width={30} />
          <Image src={xIcon} alt="x" width={30} />
          <Image src={linkedInIcon} alt="linkedIn" width={30} />
        </Stack>
        <div className="border-b-[1px] border-dashed mb-5"></div>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={2}
          py={3}
        >
          <Typography color="#fff" component="p">
            &copy; 2025 PH HealthCare. All Rights Reserved.
          </Typography>
          <Typography
            color="#fff"
            variant="h4"
            component={Link}
            href="/"
            fontWeight={600}
          >
            P
            <Box component="span" color="primary.main">
              H
            </Box>{" "}
            Health Care
          </Typography>
          <Typography color="#fff" component="p">
            Privacy Policy! Terms & Conditions.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
