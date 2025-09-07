import { Box, Card,CardActions, CardContent, CardMedia, CircularProgress, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Navbar from "../component/Navbar";
import { useProduct } from "../hooks/useProduct";
import { useNavigate } from "react-router-dom";
import CartButtons from "../component/CartButtons";


function Products(){
    const navigate = useNavigate();
    const {data, isLoading, isError, error} = useProduct();

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
    if (isError) return <p>Error: {error.message}</p>;

    return(
        <>
         <Navbar/>     
         <Grid container spacing={3} padding={2}>
      {data?.map((item) => (
        <Grid
        size={3}
        item
        xs={12}
        sm={6}
        md={4}
        lg={3}
        key={item.id}
        >
        <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }} 
        onClick={()=>navigate(`/products/${item.id}`)}
        >
            <CardMedia
              component="img"
              height="200"
              image={item.image}
              alt={item.title}
              sx={{ objectFit: "contain", padding: 2 }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="body1" gutterBottom>
                {item.title.length > 30
                  ? item.title.substring(0, 20).concat("...")
                  : item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" textAlign="justify">
                {item.description.length > 80
                  ? item.description.substring(0, 80).concat(".....more")
                  : item.description}
              </Typography>
            </CardContent>
            <CardActions 
           
           
            >
               
                
                <Stack
    direction={{ xs: "column", sm: "row" }} // column on mobile, row on bigger screens
    spacing={2}
    sx={{ width: "100%", justifyContent: "space-between", alignItems: "center" }}
  >
    {/* Price */}
    <Typography variant="body2" color="primary" fontWeight="bold">
      ${item.price.toFixed(2)}
    </Typography>

    {/* Cart Buttons */}
    <Box onClick={(e) => e.stopPropagation()}>
      <CartButtons product={item} />
    </Box>
  </Stack>
            </CardActions>
        </Card>
        </Grid>
      ))}
    </Grid>
        
        </>
       
    )
}

export default Products;