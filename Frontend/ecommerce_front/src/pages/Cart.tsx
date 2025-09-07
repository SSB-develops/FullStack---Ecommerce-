import { Box, Typography, Table, TableHead, TableRow, TableCell, TableBody, Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import { useCart, useIncreaseCartItem, useDecreaseCartItem, useRemoveFromCart } from "../hooks/useCart";

function Cart(){
    const navigate = useNavigate();
  const { data: cart = [] } = useCart();
  const incMutation = useIncreaseCartItem();
  const decMutation = useDecreaseCartItem();
  const removeMutation = useRemoveFromCart();

  // Calculate total
  const total = cart.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0);

  return (
    <Box p={3} minHeight="100vh" display="flex" flexDirection="column">
      <Typography variant="h5" gutterBottom>
        Shopping Cart
      </Typography>

      {cart.length === 0 ? (
        <Typography variant="body1">Your cart is empty.</Typography>
      ) : (
        <>
        <Box flexGrow={1} overflow="auto">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Image</strong></TableCell>
                <TableCell><strong>Title</strong></TableCell>
                <TableCell><strong>Quantity</strong></TableCell>
                <TableCell align="right"><strong>Price</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((item: any) => (
                <TableRow key={item.productId}>
                  <TableCell>
                    <img
                      src={item.image}
                      alt={item.title}
                      width={60}
                      height={60}
                      style={{ objectFit: "contain" }}
                    />
                  </TableCell>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Button
                        size="small"
                        variant="outlined"
                        onClick={() => decMutation.mutate(item.productId)}
                      >
                        -
                      </Button>
                      <Typography>{item.quantity}</Typography>
                      <Button
                        size="small"
                        variant="outlined"
                        onClick={() => incMutation.mutate(item.productId)}
                      >
                        +
                      </Button>
                      <Button
                        size="small"
                        color="error"
                        variant="outlined"
                        onClick={() => removeMutation.mutate(item.productId)}
                      >
                        ×
                      </Button>
                    </Stack>
                  </TableCell>
                  <TableCell align="right">₹{(item.price * item.quantity).toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>

          {/* Footer with total & checkout */}
          <Box position="sticky"
            bottom={0}
            left={0}
            right={0}
            bgcolor="white"
            py={2}
            mt={2}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderTop="1px solid #ddd">
            <Typography variant="h6">Total: ${total.toFixed(2)}</Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/checkout")}
            >
              Checkout
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}

export default Cart;