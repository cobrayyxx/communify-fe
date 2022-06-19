import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import placeholeder_image from '../../img/placeholder-image.png'

const HomeCard = ({communityData}) => {
  let navigate = useNavigate()

  const redirect = () => {
    navigate(
      `/community/${communityData.id}`,
      {state: {
        communityData: communityData
      }}

    )
  }
  return (
      <Card sx={{ width: "300px", margin: 'auto'}}>
        <CardHeader
          title={communityData.name}
          subheader={communityData.location}
        />
        <CardMedia
          component="img"
          width="100%"
          height={200}
          image={communityData.picture ? communityData.picture: placeholeder_image}
          alt={`Picture of ${communityData.name}`}
        />
        <CardActions>
          <Button size="small" onClick={redirect}>Learn More</Button>
        </CardActions>
      </Card>
  )
}

export default HomeCard