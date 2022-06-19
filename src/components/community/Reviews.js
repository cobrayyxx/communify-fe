import { Box, Button, Divider, Stack, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import Comment from './Comment'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Reviews = ({commentsData, setCommunityData}) => {
  let { id } = useParams()
  const [inputContent, setInputContent] = useState('')
  const [inputCreator, setInputCreator] = useState('')

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    let data = 
    {
      "content": inputContent,
      "community_id": id,
      "creator": inputCreator,
    }
    try{
      let newData = await axios.post(`https://communify-be-api.herokuapp.com/api/v1/comment`, data)
      newData = newData.data
      commentsData.push(newData)
      setCommunityData((prevCommunityData) => ({...prevCommunityData, comments:commentsData}))
    } catch(err) {
      console.log(err)
      setOpen(true)
    }

  }

  return (
    <>
      <Stack 
        spacing={2}
        divider={<Divider orientation="horizontal" flexItem />}
      >
        <Box component="form" onSubmit={handleSubmit} >
          <TextField
            required
            label="Name"
            id="outlined-size-small"
            placeholder="Your name"
            value={inputCreator}
            onChange={(e)=>setInputCreator(e.target.value)}
            size="small"
            variant="standard"
            sx={{width:"100%"}}
          />
          <TextField 
            multiline
            required
            label="Review"
            id="outlined-size-normal" 
            placeholder="Write a review"
            value={inputContent}
            onChange={(e)=>setInputContent(e.target.value)}
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
        {commentsData && commentsData.map((val, idx)=> (
          <Comment key={val.id} commentData={val}/>
        ))}
      </Stack>
    </>
  )
}

export default Reviews