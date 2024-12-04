import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid2";
export default function ProductSkeleton(){
    return(
        <>
            <Grid size={{ md: 3 }}>
              <Skeleton variant="rectangular" height={200} />
            </Grid>
            <Grid size={{ md: 3 }}>
              <Skeleton variant="rectangular" height={200} />
            </Grid>
            <Grid size={{ md: 3 }}>
              <Skeleton variant="rectangular" height={200} />
            </Grid>
            <Grid size={{ md: 3 }}>
              <Skeleton variant="rectangular" height={200} />
            </Grid>
          </>
    )
}