const API_KEY='AIzaSyA7JvSI_GOHUZeXA551WRcH0UfLNwgb0hk'

export const LIVE_CHAT_COUNT=9;


export const YOUTUBE_VIDEO_API='https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=' + API_KEY

// export const YOUTUBE_SEARCH_API='http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='
export const YOUTUBE_SEARCH_API='https://corsproxy.io/?https://clients1.google.com/complete/search?client=firefox&ds=yt&q=http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='

export const SEARCH_RESULTS_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${API_KEY}&q=`; 

