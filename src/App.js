import { Box, CssBaseline } from '@mui/material'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  {VideoDetail, ChannelDetail, SearchFeed,Feed, Navbar } from './Components'

export default function App() {
  return (
    <BrowserRouter>
      <CssBaseline/>
      <Box sx={{backgroundColor:'#000'}}>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Feed/>}/>
          <Route path='/channel/:id' element={<ChannelDetail/>}/>
          <Route path='/video/:id' element={<VideoDetail/>}/>
          <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
        </Routes>

      </Box>
    </BrowserRouter>
  )
}
