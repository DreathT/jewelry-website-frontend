import { Container, Typography } from "@mui/material";
import ProductCarousel from "../components/ProductCarousel";

const Home = () => {
  return (
    <Container sx={{ mt: 4 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ fontFamily: "Avenir-Book"}}>
            Product List
        </Typography>
        <ProductCarousel />
    </Container>
  )
}

export default Home
