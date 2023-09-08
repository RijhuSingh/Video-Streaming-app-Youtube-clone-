import React from 'react'

const VideoCard = ({info}) => {
    console.log(info);

    const { snippet , statistics }=info;
    const { channelTitle , title , thumbnails }=snippet;

  return (
    <div className='p-2 m-2 w-72 shadow-lg mx-5' >
        <img className='rounded-lg' src={thumbnails.medium.url} alt="Thumbnail" />

        <ul>
            <li className='py-2 text-center overflow-hidden'>{title}</li>
            <li className='py-2 text-center'>{channelTitle}</li>
            <li className='text-center' >{statistics.viewCount} Views </li>
        </ul>

    </div>
  )
}

export default VideoCard