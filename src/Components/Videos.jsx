import { Box, Stack } from '@mui/material'
import React from 'react'

import{ChannelCard , VideoCard} from './'
import Loading from './Loading'


export default function Videos({ videos ,direction }) {

  if(!videos?.length) return <Loading/>

  
  return (
    <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='start' gap={2} >
      {videos.map((items,index) => (
        <Box key={index}>
          {items.id.videoId && <VideoCard video={items}/>}
          {items.id.channelId && <ChannelCard channel={items}/>}
        </Box>
      ))}
    </Stack>
  )
}
