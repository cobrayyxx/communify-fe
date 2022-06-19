import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';

const CreateCommunity = () => {
  // Data structure
  // {
  //   "name": "string",
  //   "description": "string",
  //   "location": "string",
  //   "schedule": "string",
  //   "picture": "string",
  //   "contact": "string",
  //   "comments": []
  // }
  const [inputName, setInputName] = useState('')
  const [inputDesc, setInpuDesc] = useState('')
  const [inputLoc, setInputLoc] = useState('')
  const [inputSched, setInputSched] = useState('')
  const [inputContact, setInputContact] = useState('')
  const [inputImage, setInputImage] = useState('')


  const handleSubmit = () => {
    let data = 
      {
        "name": inputName,
        "description": inputDesc,
        "location": inputLoc,
        "schedule": inputSched,
        "picture": inputImage,
        "contact": inputContact,
      }
    console.log(data)
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{backgroundColor:'white', m:4, p: 4}}>
      <Typography variant="h5">
        Add your community
      </Typography>
    <TextField
      required
      label="Community Name"
      id="outlined-size-small"
      placeholder="Your name"
      value={inputName}
      onChange={(e)=>setInputName(e.target.value)}
      size="small"
      variant="standard"
      sx={{width:"100%"}}
    />
    <TextField
      required
      label="Location"
      id="outlined-size-small"
      placeholder="Your name"
      value={inputLoc}
      onChange={(e)=>setInputLoc(e.target.value)}
      size="small"
      variant="standard"
      sx={{width:"100%"}}
    />
    <TextField
      label="Image URL"
      id="outlined-size-small"
      placeholder="Your name"
      value={inputLoc}
      onChange={(e)=>setInputImage(e.target.value)}
      size="small"
      variant="standard"
      sx={{width:"100%"}}
    />
    <TextField 
      multiline
      required
      label="Description"
      id="outlined-size-normal" 
      placeholder="Write a review"
      value={inputDesc}
      onChange={(e)=>setInpuDesc(e.target.value)}
      size="small" 
      variant="standard"
      sx={{width:"100%"}}
    />
    <TextField 
      multiline
      label="Schedule"
      id="outlined-size-normal" 
      placeholder="Write a review"
      value={inputSched}
      onChange={(e)=>setInputSched(e.target.value)}
      size="small" 
      variant="standard"
      sx={{width:"100%"}}
    />
    <TextField 
      multiline
      required
      label="Contact"
      id="outlined-size-normal" 
      placeholder="Write a review"
      value={inputContact}
      onChange={(e)=>setInputContact(e.target.value)}
      size="small" 
      variant="standard"
      sx={{width:"100%"}}
    />
    <Button
      type="submit"
      variant="contained"
      endIcon={<SendIcon />} 
      sx={{mt:2}}>
        Send
    </Button>
  </Box>
  )
}

export default CreateCommunity