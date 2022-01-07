import { CircularProgress, Grid } from "@mui/material";

const Loading = (theme) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      style={{ backgroundColor: "#141414", height: "100vh" }}
    >
      <CircularProgress disableShrink size={100} style={{ color: "#fff" }} />
    </Grid>
  );
};

export { Loading };
