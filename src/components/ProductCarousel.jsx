import { useEffect, useState, useRef } from "react";
import ProductCard from "./ProductCard";
import { getAllProducts } from "../apis/product";
import { Box, IconButton, useTheme, useMediaQuery } from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";

const ProductCarousel = () => {
  const [products, setProducts] = useState([]);
  const scrollContainerRef = useRef(null);

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.between("sm", "md"));

  useEffect(() => {
    getAllProducts()
      .then((res) => setProducts(res))
      .catch((err) => console.error(err));
  }, []);

  const scroll = (scrollOffset) => {
    scrollContainerRef.current.scrollBy({ left: scrollOffset, behavior: "smooth" });
  };

  const scrollOffset = isSmall ? 150 : isMedium ? 250 : 300;

  return (
    <Box sx={{ position: "relative" }}>
      <IconButton
        onClick={() => scroll(-scrollOffset)}
        sx={{
          position: "absolute",
          top: "40%",
          left: { xs: -10, sm: -20, md: -40 },
          zIndex: 1,
        }}
      >
        <ArrowBackIosNew />
      </IconButton>

      <IconButton
        onClick={() => scroll(scrollOffset)}
        sx={{
          position: "absolute",
          top: "40%",
          right: { xs: -10, sm: -20, md: -40 },
          zIndex: 1,
        }}
      >
        <ArrowForwardIos />
      </IconButton>

      <Box
        ref={scrollContainerRef}
        sx={{
          display: "flex",
          overflowX: "auto",
          scrollBehavior: "smooth",
          paddingBottom: 2,
          px: { xs: 1, sm: 2, md: 3 },
          "&::-webkit-scrollbar": { height: 8 },
          "&::-webkit-scrollbar-thumb": { backgroundColor: "#ccc", borderRadius: 4 },
        }}
      >
        {products.map((product, index) => (
          <Box key={index} sx={{ flex: "0 0 auto", px: { xs: 1, sm: 2, md: 3 } }}>
            <ProductCard product={product} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ProductCarousel;
