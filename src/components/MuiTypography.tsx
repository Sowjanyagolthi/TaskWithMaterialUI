import React from 'react';
import { Typography,Grid,Stack,Box,Card,CardContent,Toolbar,ButtonGroup,Button} from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LeftComponent from './LeftComponent'
import MiddleComponent from './MiddleComponent'
import RightComponent from './RightComponent'
const MuiTypography = () => {
  return (
    <Stack style={{backgroundColor:"#f0f0f5"}}>
        <Toolbar sx={{display:"flex",justifyContent:"flex-end"}}>
         <BoltIcon sx={{margin:"5px"}}/>
         <ButtonGroup variant="contained"aria-label="split button" style={{backgroundColor:"white",color:"black",margin:"10px"}}>
          <Button style={{backgroundColor:"white",color:"black",borderColor:"white"}}>Channel-PLN</Button>
          <Button style={{backgroundColor:"white",color:"black"}}
          size="small"
          aria-label="select merge strategy"
          aria-haspopup="menu"
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
       <Box display="flex" >
        <Typography sx={{borderRadius:"100%",backgroundColor:"blue",color:"white"}}>AD</Typography>
        <Typography  sx={{marginLeft:"5px"}} variant="body2">admin@example.com</Typography>
       </Box>
        </Toolbar>
        <Grid container
         style={{display:"flex",justifyContent:"space-between",margin:"10px"}}>
            <Grid item>  <LeftComponent/></Grid>
            <Grid item> <MiddleComponent/></Grid>
            <Grid item> <RightComponent/></Grid>
        </Grid>
      </Stack>
      )
}
    
export default MuiTypography;
