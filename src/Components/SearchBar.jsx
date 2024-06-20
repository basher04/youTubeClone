import { Search } from '@mui/icons-material'
import { IconButton, Paper } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SearchBar() {

  const [searchTerm, setSearchTerm] = useState('')

  const navigate = useNavigate();

  const onhandelSubmit = (e) =>{

    if(searchTerm){
      
      e.preventDefault()

      navigate(`/search/${searchTerm}`)
      
      setSearchTerm('')
    }
  }

  
  return (
    <Paper
    component='form'
    sx={{
        borderRadius:'20',
        border:'1px solid #e3e3e3',
        boxShadow: 'none' ,
        pl:2,
        mr:{sm:5}}}
        onSubmit={onhandelSubmit}
    >
        <input className='search-bar'
                placeholder='Search...' 
                value={searchTerm}
                onChange={(e)=> setSearchTerm(e.target.value)}
        />
        <IconButton type='submit'
        sx={{color:'red',p:'10px'}}
        >
            <Search/>
        </IconButton>
    </Paper>
  )
}
