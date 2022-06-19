import { Box, Button, Divider, Stack, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import Comment from './Comment'

const Reviews = ({commentsData}) => {
  const [inputName, setInputName] = useState('')
  const [inputComment, setInputComment] = useState('')

  const handleSubmit = () => {
    console.log(inputName, inputComment)
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
            value={inputName}
            onChange={(e)=>setInputName(e.target.value)}
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
            value={inputComment}
            onChange={(e)=>setInputComment(e.target.value)}
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