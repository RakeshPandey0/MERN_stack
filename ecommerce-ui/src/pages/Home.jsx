import Grid from "@mui/material/Grid2";
import ProductCard from "../components/ProductCard";
import { Typography } from "@mui/material";
import { ProductSkeleton } from "../components/ProductSkeleton";
import {useLatestProducts, useFeaturedProducts} from "../hooks/useProducts";

export default function Home() {
  const { latestProducts, isLoadingLatest } = useLatestProducts();
  const { featuredProducts, isLoadingFeatured } = useFeaturedProducts()
  
  return (
    <>
      <img src="/Banner.jpg" width="100%" style={{marginTop:"2px"}}/>

      <Typography variant="h4" textAlign={"center"} marginY={2}>
        Featured Products
      </Typography>
      <Grid container spacing={2}>
        {isLoadingFeatured ? (
          <>
            <ProductSkeleton />
          </>
        ) : (
          featuredProducts.map((product) => (
            <Grid key={product._id} size={{ md: 3, sm: 6 }}>
              <ProductCard product={product} />
            </Grid>
          ))

        )}
      </Grid>

      <Typography variant="h4" textAlign={"center"} marginY={2}>
        Latest Products
      </Typography>
      <Grid container spacing={2}>
        {isLoadingLatest ? (
          <>
            <ProductSkeleton />
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
