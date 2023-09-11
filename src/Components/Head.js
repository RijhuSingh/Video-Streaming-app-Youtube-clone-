import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { Navigate } from "react-router-dom";

const Head = () => {

  const dispatch = useDispatch();

  const [searchQuery,setSearchQuery]=useState("");
  const [suggestions,setSuggestions]=useState([]);
  const [showSuggestion,setShowSuggestion]=useState(false);
  const [keyword,setKeyword]=useState("");

  const searchCache=useSelector(store=>store.search);

  useEffect(()=>{
    //api is called everytime the searchQuery is updated or key is pressed
    //if the key is pressed within 200ms it will call api or else it will wait for next press
    //Debouncing
    const timer=setTimeout(()=>{
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery])
      }else{
        getSearchSuggestion();
      }
    }
    ,200)

    return ()=>{
      clearTimeout(timer);
    }

  } , [searchQuery])

  const getSearchSuggestion = async()=>{
    const data=await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json=await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);

    dispatch(cacheResults({
      [searchQuery]:json[1],
    }))
  }

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 shadow-lg">
      <div className="flex col-span-1 cursor-pointer">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-9"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          alt="Menu"
        />

        <img
          className="h-10"
          src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
          alt="Logo"
        />
      </div>

      <div className="col-span-10 text-center">
        <form >
          <input
            className="w-1/2 p-2 border border-gray-600 rounded-l-full px-5"
            type="text"
            value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
            onFocus={()=>setShowSuggestion(true)}
            onBlur={()=>setShowSuggestion(false)}
          />
          <button className="p-2 border border-gray-400 bg-gray-300 rounded-r-full">
            Search
          </button>
        </form>

       {showSuggestion && 
         <div className="absolute bg-white py-2 px-5 ml-64 w-[36rem] rounded-lg shadow-lg" >
         <ul>
           {
             suggestions.map((s)=>{
               return (<li key={s} className="text-left py-2 shadow-sm hover:bg-gray-100">{s}</li>)
             })
           }
         </ul>
       </div>
       }

      </div>

      <div className="col-span-1 text-center cursor-pointer">
        <img
          className="h-9"
          src="https://images.rawpixel.com/image_png_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
          alt="User"
        />
      </div>
    </div>
  );
};

export default Head;
