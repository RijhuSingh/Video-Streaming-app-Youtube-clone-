import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import SearchCard from './SearchCard';

const SearchPage = () => {

  let [searchParams] = useSearchParams();
  const query = searchParams.get("search_query")
  // console.log(query)

  const [searchVideos,setSearchVideos] = useState([]);
  useEffect(()=>{
    const  getSearchResults = async()=>{
        const res =  await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=AIzaSyA7JvSI_GOHUZeXA551WRcH0UfLNwgb0hk`)
        const json = await res.json()
        console.log(json.items)
        setSearchVideos(json.items)
       
      }
   getSearchResults()
  },[query])

  return (!videos)?<div>searching</div>: (
    <div>
      {videos.map((video)=>{
        return  (video.id.kind==="youtube#video")? <Link to={'/watch?v='+video.id.videoId} key={ video.id.videoId}>  < SearchCard thumbnail={video.snippet.thumbnails.medium} title={video.snippet.title} channelTitle={video.snippet.channelTitle} desc={video.snippet.description} /> </Link>:""
      })} 
    </div>
  )
}

export default SearchPage