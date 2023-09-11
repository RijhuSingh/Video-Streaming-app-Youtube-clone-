import React, { useEffect , useState  } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { Link, useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { YOUTUBE_VIDEO_API, YOUTUBE_VIDEO_BYID } from "../utils/constants";
import { BiLike } from 'react-icons/bi'
import { BiDislike } from 'react-icons/bi'
import { PiShareFatLight } from 'react-icons/pi'
import { LiaDownloadSolid } from 'react-icons/lia'
import ShimmerWatchPage from "./ShimmerWatchPage";

const WatchPage = () => {

  const dispatch = useDispatch();


  const [searchParam] = useSearchParams();
  

  const videoDetails = YOUTUBE_VIDEO_BYID + searchParam.get("v");

  const [videoInfo, setVideoInfo] = useState([]);
  const [subscribe,setSubscribe]=useState("Subscribe")

  useEffect(() => {
    const getVideoInfo = async () => {
      const data = await fetch(videoDetails);
      const json = await data.json();
      console.log(json.items);
      setVideoInfo(json.items);
    };
    getVideoInfo();
  }, []);

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const [suggestionVideo, setSuggestionVideo] = useState([]);

  useEffect(() => {
    const getSubscriber = async () => {
      const data = await fetch(YOUTUBE_VIDEO_API);
      const json = await data.json();
      console.log(json);
      setSuggestionVideo(json.items);
    };
    getSubscriber();
  }, []);

  return videoInfo?.length===0 ? <ShimmerWatchPage /> : (
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

          <div>
            {
              videoInfo.map((video)=>{
                return(
                  <>
                    <div key={video.id} >
                      <h1 className="font-bold text-xl m-2 p-1" >{video?.snippet?.title}</h1>

                      <div className="flex justify-between" >
                        <div className="flex " >
                          <div className="p-2 m-2 border border-gray-200 w-[200px] rounded-lg flex " > 
                            <img className="w-[60px] rounded-full" src={video?.snippet?.thumbnails?.default?.url} alt="img" /> 
                            <h1 className="m-2" > {video?.snippet?.channelTitle}</h1>
                          </div>

                           <div className="p-2 mt-3 ml-14 border border-gray-200 rounded-full" >
                            <button className="mt-2" onClick={()=>{
                              setSubscribe("Subscribed")
                            }} > {subscribe} </button>
                          </div>
                        </div>

                        <div className="flex" >
                          <button className="flex rounded-full border border-gray-200 items-center mr-6 px-2 shadow-md" >
                            <div className="flex items-center m-2" >
                              <BiLike  /> <h1 className="ml-2" >{video?.statistics?.likeCount}</h1> 
                            </div>

                            <div>
                              <BiDislike />
                            </div>
                          </button>

                          <button className="flex items-center mr-6 border border-gray-200 px-2 rounded-full shadow-md" >
                            <PiShareFatLight /> 
                            <h1>Share</h1>
                          </button>

                          <button className="flex items-center border border-gray-200 px-2 rounded-full shadow-md" >
                            <LiaDownloadSolid />
                            <h1>Download</h1>
                          </button>

                        </div>

                

                      </div>

                        <p className="font-bold">
                             {video?.statistics?.viewCount} Views 😎{" "}
                             {video?.snippet?.publishedAt} 
                      </p>

                    </div>
                  
                  
                  </>
                )
              })
            }
          </div>
          <CommentsContainer />

          
        </div>

        <div className="w-full overflow-hidden" >
          <div >
            <LiveChat />
          </div>

          <div>
          {suggestionVideo.map((info) => {
            return (
              <>
                <Link to={"?v=" + info.id} key={info.id}>
                  <div className="p-2 w-[28rem] flex hover:bg-gray-200 rounded-md">
                    <img
                      className="rounded-xl"
                      src={info?.snippet?.thumbnails?.default?.url}
                      alt="thumails"
                    />
                    <ul className="ml-2">
                      <li className="font-bold text-sm text-gray w-[28rem] text-ellipsis overflow-hidden "> 
                        {info?.snippet?.title}
                      </li>
                      <li className="text-sm">{info?.snippet?.channelTitle}</li>
                      <li className="text-sm">
                        {info?.statistics?.viewCount} Views
                      </li>
                    </ul>
                  </div>
                </Link>
              </>
            );
          })}
          </div>
        </div>

       
      </div>
    </div>

  );
};

export default WatchPage;
