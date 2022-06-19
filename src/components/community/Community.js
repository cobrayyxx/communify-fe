import React, {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Box, Tab, Tabs } from '@mui/material';
import TabPanel from './TabPanel';
import { useLocation, useParams } from 'react-router-dom';
import Reviews from './Reviews';
import axios from 'axios';

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export default function Community() {
  let { id } = useParams()
  const {state} = useLocation()
  let stateData = state? state.communityData: {}
  const [value, setValue] = useState(0);
  const [communityData, setCommunityData] = useState(stateData)
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const fetchData = async () => {
    // let data = {
    //   id: 123,
    //   name: "Komunitas tinju",
    //   location: "belakang rumah saya",
    //   schedule: "abc",
    //   description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt mauris sit amet nisi tristique consequat. Proin ex massa, porttitor et euismod quis, ornare nec elit. Sed mauris tortor, vehicula eget erat non, posuere sagittis leo. Etiam ut leo semper, suscipit mauris vitae, tempor leo. Nam varius ipsum in erat luctus, elementum dignissim ipsum accumsan. Curabitur et mollis sapien. Mauris congue justo eget felis rhoncus vehicula. Aliquam gravida justo suscipit nulla tempor, sed pellentesque sem rutrum. Donec dictum lorem a quam sodales, et semper mauris vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam maximus sagittis nisi, ut auctor sapien. Mauris id libero euismod, mattis turpis non, laoreet quam. Nulla aliquam sagittis diam vel mattis. Morbi volutpat posuere elit, in fringilla lorem pretium at. In tempus pulvinar congue. Donec porta pellentesque tortor nec viverra.",
    //   picture:"https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
    //   username_creator: "kreasi"
    // }
    // setCommunityData(data)
    let res = await axios.get(
      `https://communify-be-api.herokuapp.com/api/v1/community/${id}`)
    let  res_community = res.data
    console.log(res_community)
    setCommunityData(res_community)
    
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Card sx={{ maxWidth: 600, margin: 'auto'}}>
      <CardHeader
        title={communityData.name}
        subheader={communityData.location}
      />
      {
        communityData.picture && (
          <CardMedia
            component="img"
            width={100}
            image={communityData.picture}
            alt={`Picture of ${communityData.name}`}
          />
        )
      }
      <CardContent>
        <Typography variant="body2">
          {communityData.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      </CardActions>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Reviews" {...a11yProps(0)} />
          <Tab label="Schedule" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Reviews commentsData={communityData? communityData.comments: []} setCommunityData={setCommunityData}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {communityData.schedule}
      </TabPanel>
    </Card>
  );
}