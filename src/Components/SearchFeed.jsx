import { Box , Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

import Videos from './Videos'
import { fetchFromAPI } from '../utils/FetchFromAPI'
import { useParams } from 'react-router-dom'

export default function SearchFeed() {

  const { searchTerm } = useParams();

  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`search?part=snippet,id&q=${searchTerm}`)
    .then((data)=>{
      setVideos(data.items)
    })
  },[searchTerm]);

console.log(videos)
console.log("sdkf;aksldhga")

  return (

      <Box p={2} sx={{overflowy:'auto',height:'auto', flex: 2}}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}}>
          search results for:<span style={{color: "#f31503"}}> {searchTerm}</span> Video
        </Typography>

        <Videos videos={videos}/>

      </Box>
  )
}
