import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import { demoVideoUrl,demoVideoTitle,demoChannelUrl } from '../utils/Constants'
import { CheckCircle } from '@mui/icons-material'

export default function VideoCard({video}) {
  console.log(video)
  return (
    <Card  sx={{width:{xs:'100%',sm:'358px' ,md:'300px'},boxShadow: 'none',borderRadius: 0}}>
        <Link to={video.id.videoId?`/video/${video.id.videoId}`: demoVideoUrl}>
          <CardMedia
              image={video?.snippet?.thumbnails?.high?.url}
              alt={video?.snippet?.title}
              sx={{height: 180 ,width: {xs:'100%',sm:'358px',md:'300'}}}
            />
          </Link>  
            <CardContent sx={{backgroundColor:" #1e1e1e", height: '106px',
            }}>
              <Link to={video.id.videoId?`/video/${video?.id?.videoId}`: demoVideoUrl}>
                <Typography variant='subtitle1' fontWeight='bold' color='#fff'>
                  {video?.snippet?.title.slice(0,60) || demoVideoTitle}
                </Typography>
              </Link>
              <Link to={video.id.channelId?`/video/${video?.snippet?.channelId}`: demoChannelUrl}>
                <Typography variant='subtitle2' fontWeight='bold' color='gray'>
                  {video?.snippet?.channelTitle || demoVideoTitle}
                  <CheckCircle sx={{fontSize: 12, color:'gray' ,ml:'5px'}}/>
                </Typography>
              </Link>
            </CardContent>
    </Card>
    
  )
}
