import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { Link, useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/FetchFromAPI'
import { CheckCircle } from '@mui/icons-material'
import { Videos } from '.'

export default function VideoDetail() {

  
  const {id} = useParams()
  const [videoDetail, setVideoDetail] = useState('')
  const [relatedVideo, setRelatedVideo] = useState('')

  
  console.log(videoDetail)


  useEffect(()=>{
    fetchFromAPI(`videos?id=${id}&part=contentDetails,snippet,statistics`)
    .then((data)=> setVideoDetail(data?.items[0]));

    fetchFromAPI(`search?id=${id}&part=id,snippet&type=video&relatedToVideoId=${id}`)
    .then((data)=> setRelatedVideo(data?.items));
  },[id])


  if(!videoDetail?.snippet) return 'loding...'

  const { snippet: {title,channelId,channelTitle},statistics: { viewCount, likeCount }  } = videoDetail

  return (
    <Box minHeight="95vh">
          <Stack direction={{xs:"column", md:'row'}}>
            <Box flex={1}>
              <Box sx={{width:'100%',position:'sticky' , top:'86px'}}>
                <ReactPlayer  url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls />
                <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>
                  {title}
                </Typography>
                <Stack direction="row" justifyContent="space-between" py={1} px={2} sx={{color:'#fff'}}>
                  <Link to={`/channel/${channelId}`}>
                    <Typography variant={{sm:'subtitel',md:'h6'}} color="#fff">
                      {channelTitle}
                      <CheckCircle sx={{fontSize:'12px',color:'gray',ml:'5px'}}/>
                    </Typography>
                  </Link>
                  <Stack direction='row' gap='20px' alignItems='center'>
                    <Typography variant='body1' sx={{opacity:0.7}}>
                      {parseInt(viewCount).toLocaleString()} views
                    </Typography>
                    <Typography variant='body1' sx={{opacity:0.7}}>
                      {parseInt(likeCount).toLocaleString()} likes
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Box>
            <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center">
              <Videos videos={relatedVideo} direction="column"/>
            </Box> 
          </Stack>


    </Box>
  )
}
