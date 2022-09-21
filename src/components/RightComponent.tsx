import React from 'react'
import {Stack,Box,Typography,Card,CardContent,Grid} from '@mui/material';
const RightComponent = () => {
  return (
      <Card style={{marginTop:"30px"}}>
        <CardContent>
          <Typography variant="h6">Activity</Typography>
          <Box style={{margin:"15px"}}>
            <Typography variant="subtitle2">Order #11639 was placed</Typography>
            <Typography variant="body1">a day ago</Typography>
          </Box>
          <Box style={{margin:"15px"}}>
            <Typography variant="subtitle2">Order #11638 was placed</Typography>
            <Typography variant="body1">2 days ago</Typography>          </Box>
          <Box style={{margin:"15px"}}>
            <Typography variant="subtitle2">Order #11637 was placed</Typography>
            <Typography variant="body1">2 days ago</Typography>          </Box>
          <Box style={{margin:"15px"}}>
            <Typography variant="subtitle2">Order #11636 was placed</Typography>
            <Typography variant="body1">2 days ago</Typography>          </Box>
          <Box style={{margin:"15px"}}>
            <Typography variant="subtitle2">Order #11635 was placed</Typography>
            <Typography variant="body1">2 days ago</Typography>          </Box>
          <Box style={{margin:"15px"}}>
            <Typography variant="subtitle2">Order #11634 was placed</Typography>
            <Typography variant="body1">2 days ago</Typography>          </Box>
          <Box style={{margin:"15px"}}>
            <Typography variant="subtitle2">Order #11633 was placed</Typography>
            <Typography variant="body1">2 days ago</Typography>          </Box>
          <Box style={{margin:"15px"}}>
            <Typography variant="subtitle2">Order #11632 was placed</Typography>
            <Typography variant="body1">2 days ago</Typography>          </Box>
        </CardContent>
      </Card>
  )
}

export default RightComponent
