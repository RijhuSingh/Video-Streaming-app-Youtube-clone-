import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomNames, makeRandomMessages } from '../utils/helper';

const LiveChat = () => {

  const [livemsg , setLiveMsg]=useState('');

  const dispatch=useDispatch();

  const chatMessages=useSelector(store=>store.chat.message)

    useEffect(()=>{

        const i=setInterval(()=>{

          dispatch(addMessage({
            name:generateRandomNames(),
            message:makeRandomMessages(15),
          }))
            
        },25000)

        return()=>{clearInterval(i)}
    } , [])

  return (
    <>
      <div className='p-3 border border-black w-full ml-2 h-[550px] bg-slate-100 rounded-lg overflow-y-scroll flex-col-reverse' >

        {
          chatMessages.map((c,i)=><ChatMessage key={i} name={c.name} message={c.message} />)
        }
          {/* <ChatMessage name="Rijhu kumar" message='Hello' /> */}
        
      </div>

        <form className='border p-1 ml-2 w-full border-black rounded-lg' onSubmit={(e)=>{
          e.preventDefault();
          dispatch(addMessage({
            name:'Rijhu kumar',
            message:livemsg,
          }))
          setLiveMsg('');
        }} >
          <input className='w-2/3 pl-2 rounded-lg border' placeholder='type here..' type="text" value={livemsg} onChange={(e)=>setLiveMsg(e.target.value)} />
          <button className='ml-3 p-1 rounded-lg bg-green-100' onClick={(e)=>{
          e.preventDefault();
          dispatch(addMessage({
            name:'Rijhu kumar',
            message:livemsg,
          }))
          setLiveMsg('');
        }} >Send</button>
        </form>

    </>
  )
}

export default LiveChat