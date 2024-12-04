import Grid from "@mui/material/Grid2";
import ProductCard from "../components/ProductCard";
import { Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductSkeleton from "./ProductSkeleton";

const getLatestProduct = async () => {
  const res = await axios.get("http://localhost:3000/api/product/latest");
  return res.data.data;
};


export default function LatestProducts() {
    const { data: latestProducts, isLoading } = useQuery({
      queryKey: ["latest-products"],
      queryFn: getLatestProduct,
    });
    console.log(latestProducts);
    return(
        <>
        <Typography variant="h4" textAlign={"center"} marginY={2}>
        Latest Product
      </Typography>
      <Grid container spacing={2}>
        {isLoading ? (
          <ProductSkeleton />
        ) : (
          latestProducts?.map((product) => (
            <Grid key={product._id} size={{ md: 3 }}>
              <ProductCard product={product} />
            </Grid>
          ))
        )}
      </Grid>
        </>
    )
}