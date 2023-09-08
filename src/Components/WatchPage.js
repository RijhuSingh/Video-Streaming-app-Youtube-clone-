import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {
    const dispatch=useDispatch();

    const [searchParam]=useSearchParams();
    console.log(searchParam.get('v'))

    useEffect(()=>{
        dispatch(closeMenu());
    } , []);

  return (
    <div>
        <div className='px-5' >
            <iframe src={'https://www.youtube.com/embed/' + searchParam.get('v')} title='youtube-video-player' width='1200' height='550' allowFullScreen allow='accelerometer; autoplay; clipboard-write' frameborder="0"></iframe>
        </div>
        <CommentsContainer />
    </div>
  )
}

export default WatchPage