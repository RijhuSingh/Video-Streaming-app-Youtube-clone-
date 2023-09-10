import React from 'react'

const SearchCard = ({data}) => {

  if (!data || !data.snippet) {
    return <div>Error: Invalid data</div>;
  }


  // console.log(data?.snippet);

const {title , description , channelTitle , thumbnails , publishedAt} = data.snippet

const dateTimeString = publishedAt;
const publishedDate = dateTimeString.split('T')[0];

  // const {id , snippet} =data;
  

  // const {videoId} = id;
  // const {title , description , channelTitle , thumbnails} = snippet;

  // console.log(id , snippet)

  return (
    <div className='bg-slate-100 p-2  my-2 h-[226] mr-4 rounded-2xl flex '>
     
         <img className='w-1/3 h-[230px] rounded-xl ' alt='Thumbnail' src={thumbnails.medium.url}></img>
    
      <div className=' ml-4 w-2/3 rounded-xl flex flex-col justify-around'>
          <h1 className='text-2xl '>{title}</h1>
          <p>Publised at: {publishedDate}</p>
          <p className='text-1xl font-semibold'>Channel Name: {channelTitle}</p>
          <p className='text-1xl'>Description: {description}</p>


      </div>
    </div>
  )
}

export default SearchCard