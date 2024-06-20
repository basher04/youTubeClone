import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/FetchFromAPI'
import { Box } from '@mui/material'
import ChannelCard from './ChannelCard'
import { Videos } from './'

export default function ChannelDetail() {

  const {id} = useParams()

  console.log(id)

  const [channelDetail, setChannelDetail] = useState(null)
  const [videoDetail, setVideoDetail] = useState('')

  console.log(channelDetail)
  console.log(videoDetail)


  useEffect(()=>{
    (async ()=>{

    let channelData = await fetchFromAPI(`channels?part=snippet,statistics&id=${id}`)
    setChannelDetail(channelData?.items[0]);

    let videoData = await fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    setVideoDetail(videoData?.items);

    })()
  },[id])



  return (
    <Box minHeight='95vh'> 
          <div style={{height:'300px',background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',zIndex: 10,}} />
          <ChannelCard marginTop="-93px" channelDetail={channelDetail} />

          <Box p={2} display="flex"/>
          <Box sx={{ mr: { sm: '100px' } }}>
            <Videos videos={videoDetail} />
            
          </Box>
    </Box>
  )
}








