import {  Stack } from '@mui/material'
import React from 'react'
import { categories } from '../utils/Constants'


export default function Sidebar({selectedCategories,setselectedCategories}) {

    // const selectedCategories = 'New'

  return (
    <Stack
    direction="row"
    sx={{
    height:{xs:'auto',md:'95%'},
    flexDirection:{md:'column'}
    }}
    style={{overflow:'auto'}}
    >
    
        {categories.map((item) =>(
            <button key={item.name}
            className='category-btn'
            style={{backgroundColor: item.name === selectedCategories && '#fc1503',
                    color:'white'
                    }}
            onClick={()=> setselectedCategories(item.name)}
            >
                <span style={{color: item.name === selectedCategories ? 'white': 'red', marginRight:'15px'}}
                >
                    {item.icon}
                </span>
                <span style={{opacity: item.name === selectedCategories ? 1 : .8 }}
                >
                    {item.name}
                </span>
            </button>
        ))}

    </Stack>
  )
}
