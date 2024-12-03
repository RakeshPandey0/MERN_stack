import Skeleton from "@mui/material/Skeleton";

export default function ProductSkeleton(){
    return(
        <>
            <Grid size={{ md: 3 }}>
              <Skeleton variant="rectangular" width={200} height={200} />
            </Grid>
            <Grid size={{ md: 3 }}>
              <Skeleton variant="rectangular" width={200} height={200} />
            </Grid>
            <Grid size={{ md: 3 }}>
              <Skeleton variant="rectangular" width={200} height={200} />
            </Grid>
            <Grid size={{ md: 3 }}>
              <Skeleton variant="rectangular" width={200} height={200} />
            </Grid>
          </>
    )
}