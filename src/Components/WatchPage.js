import React, { useEffect  } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import VideoInfo from './VideoInfo';

const WatchPage = () => {

  const dispatch = useDispatch();

  //videoInfo

  const [searchParam] = useSearchParams();
  // const videoId = searchParam.get("v");
  // console.log(videoId);

  // const [info,setInfo]=useState([])

    // useEffect(()=>{
    //     getVideoInfo();
    // } , [])

    // const getVideoInfo=async ()=>{
    //     const data = await fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyA7JvSI_GOHUZeXA551WRcH0UfLNwgb0hk');
    //     const json=await data.json();
    //     setInfo(json.items)
    // }

  // console.log(searchParam.get('v'))

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="w-full">
      <div className="px-5 w-full flex">
        <div className="flex flex-col">
          <div>
            <iframe
              src={"https://www.youtube.com/embed/" + searchParam.get("v")}
              title="youtube-video-player"
              width="1100"
              height="550"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write"
              frameBorder="0"
            ></iframe>
          </div>

          {/* <div className="w-[1100px] rounded-lg shadow-lg p-2 mt-3">
            {info.map((info) => {
              return (
                <div key={info.id} >
                  <h1 >{videoId && info?.snippet?.title}</h1>
                  {
                    (videoId===info.id) ?console.log("hello") : console.log("no")
                  }
                </div>
              );
            })}
          </div> */}
        </div>

        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
      <VideoInfo />
    </div>

  );
};

export default WatchPage;
