import React from 'react'
import {Stack,Box,Typography,Button} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import AppsIcon from '@mui/icons-material/Apps';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import DiscountIcon from '@mui/icons-material/Discount';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import WifiTetheringIcon from '@mui/icons-material/WifiTethering';
import SettingsIcon from '@mui/icons-material/Settings';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Crop169Icon from '@mui/icons-material/Crop169';




const LeftComponent = () => {
  return (
    <Stack>
        <Box style={{display:"flex",justifyContent:"flex-start"}}>
        <Typography variant="body1">S</Typography>
        <Crop169Icon />
        </Box>
       <Box sx={{display:"flex",padding:"5px",width:"200px",fontFamily: "Verdana, Arial, sans-serif",marginBottom:"20px",marginTop:"20px"}}>
            <HomeIcon style={{color:"#cccccc",marginRight:"10px"}}/>
            <Typography variant="body1">Home</Typography>
       </Box>
       <Box sx={{display:"flex",padding:"5px",width:"200px",fontFamily: "Verdana, Arial, sans-serif",color:"gray",marginBottom:"20px"}}>
            <BusinessCenterIcon style={{color:"#cccccc",marginRight:"10px"}}/>
            <Typography variant="body1">Catalog</Typography>
       </Box>
       <Box sx={{display:"flex",padding:"5px",width:"200px",fontFamily: "Verdana, Arial, sans-serif",color:"gray",marginBottom:"20px"}}>
            <ShoppingCartIcon style={{color:"#cccccc",marginRight:"10px"}}/>
            <Typography variant="body1">Orders</Typography>
       </Box>
       <Box sx={{display:"flex",padding:"5px",width:"200px",fontFamily: "Verdana, Arial, sans-serif",color:"gray",marginBottom:"20px"}}>
            <PersonIcon style={{color:"#cccccc",marginRight:"10px"}}/>
            <Typography variant="body1">Customers</Typography>
       </Box>
       <Box sx={{display:"flex",padding:"5px",width:"200px",fontFamily: "Verdana, Arial, sans-serif",color:"gray",marginBottom:"20px"}}>
            <DiscountIcon style={{color:"#cccccc",marginRight:"10px"}}/>
            <Typography variant="body1">Discounts</Typography>
       </Box>
       <Box sx={{display:"flex",padding:"5px",width:"200px",fontFamily: "Verdana, Arial, sans-serif",color:"gray",marginBottom:"20px"}}>
            <AutoStoriesIcon style={{color:"#cccccc",marginRight:"10px"}}/>
            <Typography variant="body1">Pages</Typography>
       </Box>
       <Box sx={{display:"flex",padding:"5px",width:"200px",fontFamily: "Verdana, Arial, sans-serif",color:"gray",marginBottom:"20px"}}>
            <AppsIcon style={{color:"#cccccc",marginRight:"10px"}}/>
            <Typography variant="body1">Apps</Typography>
       </Box>
       <Box sx={{display:"flex",padding:"5px",width:"200px",fontFamily: "Verdana, Arial, sans-serif",color:"gray",marginBottom:"20px"}}>
            <WifiTetheringIcon style={{color:"#cccccc",marginRight:"10px"}}/>
            <Typography variant="body1">Translations</Typography>
       </Box>
       <Box sx={{display:"flex",padding:"5px",width:"200px",fontFamily: "Verdana, Arial, sans-serif",color:"gray",marginBottom:"20px"}}>
            <SettingsIcon style={{color:"#cccccc",marginRight:"10px"}}/>
            <Typography variant="body1">Configuration</Typography>
       </Box>
       <ChevronRightIcon
       style={{display:"flex",justifyContent:"flex-start",color:"blue"}}
        fontSize="large"
       />
    </Stack>
  )
}

export default LeftComponent
