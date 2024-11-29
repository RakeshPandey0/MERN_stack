import { Typography } from "@mui/material";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import Grid from "@mui/material/Grid2";
export default function SignIn() {
  return (
    <>
      <NavBar />
      <img src="/Banner.jpg" width={"100%"} />
      <Typography variant="h4" textAlign={"center"} marginY={"2px"}>
        Featured Products
      </Typography>

      <Grid container spacing={3}>
        <Grid size={4}>
          <ProductCard productName={"MSI LAPTOP"}/>
        </Grid>
        <Grid size={4}>
          <ProductCard />
        </Grid>
        <Grid size={4}>
          <ProductCard />
        </Grid>

        <Grid size={4}>
          <ProductCard />
        </Grid>
        <Grid size={4}>
          <ProductCard />
        </Grid>
        <Grid size={4}>
          <ProductCard />
        </Grid>
      </Grid>

      <Typography variant="h4" textAlign={"center"} marginY={"4px"}>
        Latest Products
      </Typography>

      <Grid container spacing={3}>
        <Grid size={4}>
          <ProductCard />
        </Grid>
        <Grid size={4}>
          <ProductCard />
        </Grid>
        <Grid size={4}>
          <ProductCard />
        </Grid>

        <Grid size={4}>
          <ProductCard />
        </Grid>
        <Grid size={4}>
          <ProductCard />
        </Grid>
        <Grid size={4}>
          <ProductCard />
        </Grid>
      </Grid>
    </>
  );
}
