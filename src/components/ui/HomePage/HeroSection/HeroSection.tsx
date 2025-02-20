import assets from "@/assets";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";

const HeroSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        direction: "row",
        my: 16,
      }}
    >
      <Box
        sx={{
          flex: 1,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "700px",
            top: "-90px",
            left: "-120px",
          }}
        >
          <Image src={assets.svgs.grid} alt="grid" />
        </Box>
        <Typography variant="h3" fontWeight={600}>
          Healthier Hearts
        </Typography>
        <Typography variant="h3" fontWeight={600}>
          Comes from
        </Typography>
        <Typography variant="h3" fontWeight={600} color="primary.main">
          Preventive Care
        </Typography>
        <Typography
          variant="h6"
          component="p"
          fontWeight={400}
          sx={{
            marginTop: "20px",
          }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
          corporis architecto nihil odit sapiente distinctio hic sit ea
          quibusdam a.
        </Typography>
        <Typography
          sx={{
            marginTop: "20px",
          }}
        >
          <Button>Make Appointment</Button>
          <Button
            variant="outlined"
            sx={{
              marginLeft: "20px",
            }}
          >
            Contact Us
          </Button>
        </Typography>
      </Box>
      <Box
        sx={{
          p: 1,
          flex: 1,
          display: "flex",
          justifyContent: "center",
          position: "relative",
          mt: 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "200px",
            top: "-30px",
          }}
        >
          <Image src={assets.svgs.arrow} alt="arrow" width={100} />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Box mt={4}>
            <Image src={assets.images.doctor1} alt="Doctor1" width={240} />
          </Box>
          <Box>
            <Image src={assets.images.doctor2} alt="Doctor2" width={240} />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top:'220px',
              left:'150px'
            }}
          >
            <Image src={assets.images.doctor3} alt="Doctor3" width={240} />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top:'300px',
              left:'380px',
              zIndex:-1
            }}
          >
            <Image src={assets.images.stethoscope} alt="Doctor3" width={240} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
