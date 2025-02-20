import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid2,
  Typography,
} from "@mui/material";
import Image from "next/image";

const TopRatedDoctors = async () => {
  const res = await fetch("http://localhost:5000/api/v1/doctor?page=1&limit=3");
  const { data: doctors } = await res.json();
  return (
    <Box
      sx={{
        my: "30px",
        py: "10px",
        backgroundColor: "rgba(20, 20, 20, 0.1)",
        // clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0 75%)",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography variant="h4" component="h1" fontWeight={700}>
          Our Top Rated Doctors
        </Typography>
        <Typography variant="h4" component="h1" fontSize={18} fontWeight={400}>
          Access to expert physicians and surgeons, advanced technologies
        </Typography>
        <Typography variant="h4" component="h1" fontSize={18} fontWeight={400}>
          and top-quality surgery facilities right here.
        </Typography>
      </Box>
      <Container
        sx={{
          margin: "30px auto",
        }}
      >
        <Grid2 container spacing={2}>
          {doctors.map((doctor: any) => (
            <Grid2 key={doctor.id}>
              <Card
                sx={{
                  maxWidth: 345,
                  "& img": {
                    maxHeight: 250,
                  },
                }}
              >
                <Box>
                  <Image
                    src={doctor.profilePhoto}
                    width={500}
                    height={30}
                    alt={doctor.name}
                  />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {doctor.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {doctor.qualification}, {doctor.designation}
                  </Typography>
                  <Typography mt={2}>
                    <LocationOnIcon /> {doctor.address}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    justifyContent: "space-between",
                    px: 2,
                    paddingBottom: "20px",
                  }}
                >
                  <Button>Book Now</Button>
                  <Button variant="outlined">View Profile</Button>
                </CardActions>
              </Card>
            </Grid2>
          ))}
        </Grid2>
        <Box sx={{
              textAlign: "center",
              mt: "20px",
            }}>
          <Button
            variant="outlined"
            
          >
            {" "}
            View All
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TopRatedDoctors;
