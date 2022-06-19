import { Fab, Grid, Stack } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import HomeCard from './HomeCard';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [communities, setCommunities] = useState([])
  let navigate = useNavigate()

  const handleCreate = () => navigate('/community/create')
  const fetchData = async () => {
    let res = await axios.get(
      "https://communify-be-api.herokuapp.com/api/v1/community")
    
   let  res_community = res.data
    console.log(res_community)
    setCommunities(res_community)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const fab_style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  };

  return (
    <>
      <Fab onClick={handleCreate} style={fab_style} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Grid 
        container 
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
          {communities.map((val, idx) => (
            <Grid item lg={3} sm={6} xs={12}>
                <HomeCard communityData={val}/>
            </Grid>
          ))}
      </Grid>

    </>
  );
}

export default Home;
