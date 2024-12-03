import Grid from "@mui/material/Grid2";
import ProductCard from "../components/ProductCard";
import { Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductSkeleton from "./ProductSkeleton";

const getFeaturedProduct = async () => {
  const res = await axios.get("http://localhost:3000/api/product/featured");
  return res.data.data;
};

export default function FeaturedProducts() {
  const { data: featuredproducts, isLoading } = useQuery({
    queryKey: ["featured-products"],
    queryFn: getFeaturedProduct,
  });
  console.log(featuredproducts);
  return (
    <>
      <Typography variant="h4" textAlign={"center"} marginY={2}>
        Featured Product
      </Typography>
      <Grid container spacing={2}>
        {isLoading ? (
          <ProductSkeleton />
        ) : (
          featuredproducts?.map((product) => (
            <Grid key={product._id} size={{ md: 3 }}>
              <ProductCard product={product} />
            </Grid>
          ))
        )}
        {}
      </Grid>
    </>
  );
}