import { Box, Button, Typography } from "@mui/material";
import Navbar from "../component/Navbar";
// import hero from "../assets/hero.jpg";
import image1 from "../assets/image1.jpg";
import { useNavigate } from "react-router-dom";

function Home(){
    const navigate = useNavigate();
    return(
        <>
        <Box 
        sx={{ height:'100vh', display:'flex', flexDirection:'column'}}
        >
            {/* appbar */}
            <Navbar/>
            <Box sx={{
          flex: 1, 
        //   height: "calc(100vh - 64px)", 
          display:'flex',
          alignItems:'center',
          justifyContent:'flex-start',
          backgroundImage:`url(${image1})`,
          backgroundSize:'cover',
          backgroundPosition:'center',
          backgroundRepeat:'no-repeat',
          color:'white',
          px: 4,
        }}>
                <Box sx={{maxWidth:'500px'}}>
                    <Typography variant="h3" sx={{fontWeight:'bold', mb:2}}>Welcome!!!!</Typography>
                    <Typography variant="h6" sx={{mb:3}}>Discover amazing products at the best prices</Typography>
                    <Button variant="contained" color="primary" size="large" sx={{borderRadius:4}}
                    onClick={()=>navigate("/products")}
                    >Shop Now</Button>
                </Box>
            </Box>
        </Box>
        
        </>
    )
}

export default Home;