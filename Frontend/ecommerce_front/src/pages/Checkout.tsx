import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Checkout(){
    const navigate = useNavigate();
    return (
        <>

        <Box p={3} textAlign="center" marginTop={20}>
            <Typography variant="h4" gutterBottom>
                 ✅ Thank You for Your Purchase!
            </Typography>
            <Typography variant="body1">
                Your Order has been placed successfully. 🎉
            </Typography>
            <Button variant="outlined" color="primary" size="large" sx={{borderRadius:4, marginTop:"20px"}}
                    onClick={()=>navigate("/products")}
                    >Continue Shopping</Button>
        </Box>
         
        </>
    )
}

export default Checkout;