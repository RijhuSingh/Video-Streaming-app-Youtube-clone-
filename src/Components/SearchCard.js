import React from 'react'

const SearchCard = (props) => {

  const thumbnail = props.thumbnail.url
  const title = props.title
  // const channelName = props.channelTitle
  const desc = props.desc


  return (
    <div>
      <Image w={"340px"} borderRadius={"10px"}  h={"200px"} src={thumbnail}/>

      <Text fontSize={["15","22px"]} >{title}</Text>

      <Text display={["none","block"]} w={"70%"} h={"22px"} overflow={"hidden"}>{desc}</Text>
    </div>
  )
}

export default SearchCard