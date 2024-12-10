import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Grid from "@mui/material/Grid2";
import ProductCard from "../components/ProductCard";
import { Typography } from "@mui/material";
import { ProductsSkeleton } from "../components/ProductsSkeleton";

const getLatestProduct = async () => {
  const res = await axios.get("http://localhost:3000/api/product/latest");
  return res.data.data;
};

export default function Home() {
  const { data: latestProducts, isLoading } = useQuery({
    queryKey: ["latest-products"],
    queryFn: getLatestProduct,
  });
  console.log(latestProducts);
  return (
    <>
      <img src="/banner.jpg" width="100%" />
      {/* <Typography variant="h4" textAlign={"center"} marginY={2}>
        Featured Product
      </Typography>
      <Grid container spacing={2}>
        <Grid size={{ md: 4 }}>
          <ProductCard />
        </Grid>
        <Grid size={{ md: 4 }}>
          <ProductCard />
        </Grid>
        <Grid size={{ md: 4 }}>
          <ProductCard />
        </Grid>
      </Grid> */}

      <Typography variant="h4" textAlign={"center"} marginY={2}>
        Latest Product
      </Typography>
      <Grid container spacing={2}>
        {isLoading ? (
          <>
            <ProductsSkeleton />
          </>
        ) : (
          latestProducts.map((product) => (
            <Grid key={product._id} size={{ md: 3, sm: 6 }}>
              <ProductCard product={product} />
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
}
