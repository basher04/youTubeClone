import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Videos from './Videos'
import { fetchFromAPI } from '../utils/FetchFromAPI'


export default function Feed() {

  const [selectedCategories, setselectedCategories] = useState('New')
  const [videos, setVideos] = useState([])


  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategories}`)
    .then((data)=>{
      setVideos(data.items)
    }).catch((err)=> err)
  },[selectedCategories]);

  console.log(videos)

  
  return (
    <Stack sx={{flexDirection:{xs:'column',md:'row'}}}>
      <Box sx={{height:'auto',borderRight:'1px solid #3d3d3d',px:{xs:0,md:2}}}>
        <Sidebar selectedCategories={selectedCategories} setselectedCategories={setselectedCategories}/> 
        <Typography className='copyright' variant='bodiy2'sx={{color: '#fff',mt:1.5}}>
          Copyright 2022 JSM Media
        </Typography>
      </Box>

      <Box p={2} sx={{overflowy:'auto',height:'auto', flex: 2}}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}}>
          {selectedCategories}<span style={{color: "#f31503"}}> Video</span>
        </Typography>

        <Videos videos={videos}/>

      </Box>
    </Stack>
  )
}
