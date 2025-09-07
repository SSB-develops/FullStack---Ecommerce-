import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

import logo from '../assets/logo.png';
import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";

function Navbar(){
    const navigate = useNavigate();
    const {data:cart} = useCart();
    const count = cart?.reduce((sum:number,item:any)=> sum+item.quantity, 0) || 0;
    return (
        <>
        <AppBar position="static" sx={{ bgcolor: "white", color: "black" }} >
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>

                {/* logo */}
                <Box>
                    <img src={logo} alt="logo" style={{width:'50px', height:'50px'}}/>
                </Box>

                {/* navigation links */}
                <Box display="flex" gap={4}>
                    <Button onClick={()=>navigate("/")}>Home</Button>
                    <Button onClick={()=>navigate("/products")}>Products</Button>
                    <Button>About</Button>
                    <Button>Contact</Button>
                </Box>

                <Box display='flex' justifyContent='space-around' gap={2}
                >
                {/* Cart */}
                    <Box display="flex" alignItems="center"
                    onClick={()=>navigate("/cart")}
                    sx={{cursor:'pointer'}}
                    >
                        <Typography variant="body1" fontSize={20}>🛒</Typography>
                        <Typography variant="body1" sx={{ fontWeight: "bold", color:"red" }}>
                        {count}
                        </Typography>
                    </Box>
                </Box>
            </Toolbar>            
        </AppBar>
        </>
    )
}

export default Navbar;