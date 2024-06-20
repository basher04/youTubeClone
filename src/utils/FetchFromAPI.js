import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com"

const options = {
    
    url: BASE_URL,
    params: {
        maxResults:'50'
    },
    headers: {
      // 'X-RapidAPI-Key': process.env.REACT_APP_REPID_API_KEY,
      'X-RapidAPI-Key': 'd21174d436msh0caf3bf49075fa5p1a0e0ajsnf0df0a180af6',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

    export const  fetchFromAPI = async (url) => {
        const {data} = await axios.get(`${BASE_URL}/${url}`,options)
        return data;
    }