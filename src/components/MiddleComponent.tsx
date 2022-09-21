import React from 'react';
import {Stack,Box,Typography,Card,CardContent,Grid, Button} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import ListAltIcon from '@mui/icons-material/ListAlt';



const MiddleComponent = () => {
  return (
    <Stack>
      <Box sx={{display:"flex",flexDirection:"column",alignItems:"start", fontFamily:"Lucida Console,Courier,monospace"}}>
      <Typography variant='h4'>Hello there,admin@example.com</Typography>
      <Typography variant='subtitle2'>Here is the some information we gathered about your store</Typography>
      </Box>
    <Grid container spacing={4} style={{marginTop:"30px",marginBottom:"30px"}}>
     <Box width="400px" style={{marginRight:"30px",marginLeft:"30px"}}>
      <Card style={{display:"flex",justifyContent:"space-around"}}>
            <CardContent>
             <Typography variant="h6">Sales</Typography>
             <Typography variant="body2">Today</Typography>
             <Typography variant="h6">PLN 0.00</Typography>
            </CardContent>
            <GraphicEqIcon fontSize="large"style={{color:"blue",margin:"30px"}} />
        </Card>
      </Box>
      <Box width="400px">
         <Card style={{display:"flex",justifyContent:"space-around"}}>
            <CardContent>
            <Typography variant="h6">Orders</Typography>
            <Typography variant="body2">Today</Typography>
            <Typography variant="h6">0</Typography>
            </CardContent>
            <ListAltIcon fontSize="large"style={{color:"blue",margin:"30px"}} />
            </Card>
         </Box>
         </Grid>
     <Stack style={{marginBottom:"40px"}}>
      <Card>
            <CardContent style={{display:"flex",justifyContent:"space-between"}}>
             <Typography style={{marginLeft:"20px"}} variant="body1">6 orders are ready to fulfill</Typography>
             <ArrowForwardIosIcon 
                          fontSize="small" 
                          style={{marginRight:"20px"}}/>
             </CardContent>
             </Card>
             <Card>
            <CardContent style={{display:"flex",justifyContent:"space-between"}}>
             <Typography style={{marginLeft:"20px"}} variant="body1">3 payaments to capture</Typography>
             <ArrowForwardIosIcon 
             fontSize="small" 
          style={{marginRight:"20px"}}/>
             </CardContent>
             </Card>
             <Card>
            <CardContent style={{display:"flex",justifyContent:"space-between"}}>
             <Typography style={{marginLeft:"20px"}} variant="body1">No products are out of stock</Typography>
             <ArrowForwardIosIcon
                          fontSize="small" 
                          style={{marginRight:"20px"}}/>
             </CardContent>
             </Card>
     </Stack>
     <Card style={{marginBottom:"40px",display:"flex",flexDirection:"column",alignItems:"start"}}> 
        <CardContent style={{marginLeft:"20px"}}>
        <Typography variant="h6">Top Products</Typography>
        <Typography variant="body2">No Products found</Typography>
        </CardContent>

     </Card>

    </Stack>
  )
}

export default MiddleComponent
