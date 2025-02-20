import assets from "@/assets";
import choosingUsImg from "@/assets/choose-us.png";
import { Box, Container, Grid2, Typography } from "@mui/material";
import Image from "next/image";

const WhyUs = () => {
  const servicesData = [
    {
      imageSrc: assets.svgs.award,
      title: "Award Winning service",
      description:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, saepe.",
    },
    {
      imageSrc: assets.svgs.award,
      title: "Award Winning service",
      description:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, saepe.",
    },
    {
      imageSrc: assets.svgs.award,
      title: "Award Winning service",
      description:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, saepe.",
    },
    {
      imageSrc: assets.svgs.award,
      title: "Award Winning service",
      description:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, saepe.",
    },
  ];
  return (
    <Container>
      <Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            color="primary"
            variant="h4"
            component="h1"
            fontWeight={700}
          >
            Why Us
          </Typography>
          <Typography
            color="primary.body"
            variant="h2"
            component="h1"
            fontWeight={700}
          >
            Why Choose Us
          </Typography>
        </Box>

        <Grid2 container spacing={2} my={5}>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                backgroundColor: "rgba(245, 245, 245, 1)",
                padding: "15px",
                my: "20px",
                alignItems: "center",
                borderRadius: "10px 10px 100px 10px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Image src={servicesData[0].imageSrc} width={50} alt="Award" />
              </Box>

              <Box>
                <Typography variant="h6" component="h6" fontWeight={600}>
                  {servicesData[0].title}
                </Typography>
                <Typography
                  variant="body2"
                  color="primary.body"
                  fontWeight={300}
                >
                  {servicesData[0].description}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                backgroundColor: "rgba(245, 245, 245, 1)",
                padding: "15px",
                my: "20px",
                alignItems: "center",
                borderRadius: "10px 100px 10px 10px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Image src={servicesData[1].imageSrc} width={50} alt="Award" />
              </Box>

              <Box>
                <Typography variant="h6" component="h6" fontWeight={600}>
                  {servicesData[1].title}
                </Typography>
                <Typography
                  variant="body2"
                  color="primary.body"
                  fontWeight={300}
                >
                  {servicesData[1].description}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                backgroundColor: "rgba(245, 245, 245, 1)",
                padding: "15px",
                my: "20px",
                alignItems: "center",
                borderRadius: "10px 10px 100px 10px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Image src={servicesData[2].imageSrc} width={50} alt="Award" />
              </Box>

              <Box>
                <Typography variant="h6" component="h6" fontWeight={600}>
                  {servicesData[2].title}
                </Typography>
                <Typography
                  variant="body2"
                  color="primary.body"
                  fontWeight={300}
                >
                  {servicesData[2].description}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                backgroundColor: "rgba(245, 245, 245, 1)",
                padding: "15px",
                my: "20px",
                alignItems: "center",
                borderRadius: "10px 100px 10px 10px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Image src={servicesData[3].imageSrc} width={50} alt="Award" />
              </Box>

              <Box>
                <Typography variant="h6" component="h6" fontWeight={600}>
                  {servicesData[3].title}
                </Typography>
                <Typography
                  variant="body2"
                  color="primary.body"
                  fontWeight={300}
                >
                  {servicesData[3].description}
                </Typography>
              </Box>
            </Box>
          </Grid2>
          <Grid2
            size={{ xs: 12, sm: 6 }}
            sx={{
              display: "flex",
            }}
          >
            <Box
              sx={{
                margin: "0 auto",
                justifyContent: "center",
              }}
            >
              <Image src={choosingUsImg} width={400} alt="Why choosing us" />
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </Container>
  );
};

export default WhyUs;
