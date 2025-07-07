import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const colorOptions = [
  { key: "yellow", color: "#E6CA97", label: "Yellow Gold" },
  { key: "white", color: "#D9D9D9", label: "White Gold" },
  { key: "rose", color: "#F1A4A9", label: "Rose Gold" }
];

const ProductCard = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState("yellow");

  return (
    <Box sx={{ mx: 3 }}>
        <Box
            component="img"
            src={product.images[selectedColor]}
            alt={product.name}
            sx={{
            height: 220,
            width: 220,
            borderRadius: 4,
            objectFit: "cover",
            mb: 2
            }}
        />

        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <Typography variant="body1" fontFamily={"Avenir-Book"} fontSize={14} fontWeight="bold" sx={{ my: 0.5 }}>
                {product.name}
            </Typography>

            <Typography variant="body2" fontFamily={"Montserrat-Regular"} fontSize={15}>
                ${product.price} USD
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                {colorOptions.map(option => (
                <IconButton
                    key={option.key}
                    onClick={() => setSelectedColor(option.key)}
                    sx={{
                    backgroundColor: option.color,
                    width: 20,
                    height: 20,
                    mx: 0.5,
                    border: selectedColor === option.key ? "2px solid black" : "none"
                    }}
                />
                ))}
            </Box>

            <Typography variant="caption" fontFamily={"Avenir-Book"} fontSize={12} fontWeight="bold">
                {colorOptions.find(c => c.key === selectedColor)?.label}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                {[...Array(5)].map((_, i) => (
                <StarIcon
                key={i}
                fontSize="small"
                sx={{
                    color: i < Math.round(product.popularityScoreDisplay) ? "#E6CA97" : "#C0C0C0"
                }}
            />
            
                ))}
                <Typography variant="body2" sx={{ ml: 1 }} fontFamily={"Avenir-Book"} fontWeight="bold" fontSize={14}>
                {product.popularityScoreDisplay}/5
                </Typography>
            </Box>
        </Box>
    </Box>
  );
};

export default ProductCard;
