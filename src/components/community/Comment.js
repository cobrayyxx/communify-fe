import { Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Comment = ({commentData}) => {
  return (
    <>
      {commentData && (
        <>
          <Box key={commentData.id} component="span">
            <Typography variant="h6">{commentData.name}</Typography>
            <Typography  variant="body2">{commentData.content}</Typography>
          </Box>
        </>
      )
      }
    </>
  )
}

export default Comment