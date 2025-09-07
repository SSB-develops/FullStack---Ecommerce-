import { useParams } from "react-router-dom";
import Navbar from "../component/Navbar";
import { useProductById } from "../hooks/useProduct";
import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import CartButtons from "../component/CartButtons";

function ProductDetail(){
    const {id} = useParams<{id: string}>();
    const {data:product, isLoading, error} = useProductById(Number(id));

   if (isLoading) {
    return (
      <Box
        sx={{
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
    
  if (error) return <p>Error: {error.message}</p>;

    return(
        <>
        <Navbar/>

        <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={4} alignItems="flex-start">
        {/* Left Column - Image */}
        <Grid item xs={12} md={6} size={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <img
              src={product?.image}
              alt={product?.title}
              style={{
                maxWidth: "100%",
                maxHeight: "400px",
                objectFit: "contain",
              }}
            />
          </Box>
        </Grid>

        {/* Right Column - Info */}
        <Grid item xs={12} md={6} size={6} spacing={3}>
          <Typography variant="h4" gutterBottom>
            {product?.title}
          </Typography>
          <Typography variant="body1" textAlign="justify">
            {product?.description}
          </Typography>
          <Typography variant="body1" color="primary" gutterBottom marginTop={2}>
            ${product?.price.toFixed(2)}
          </Typography>
          <Box marginTop={4}>
          <CartButtons product={product!}/>

          </Box>

          {/* <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
            <Button variant="contained">Add</Button>
            <Button variant="outlined">Remove</Button>
          </Box> */}
         
        </Grid>
      </Grid>
    </Box>

        
        </>
    )
}

export default ProductDetail;