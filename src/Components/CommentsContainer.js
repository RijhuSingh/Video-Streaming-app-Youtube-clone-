import React from 'react'


const commentData=[
    {
        name:'Rijhu',
        text:'lorem ipsum gribsh jhffbs jhjdqaa',
        replies:[
            {
                name:'Rijhu',
                text:'lorem ipsum gribsh jhffbs jhjdqaa',
                replies:[
                    {
                        name:'Rijhu',
                        text:'lorem ipsum gribsh jhffbs jhjdqaa',
                        replies:[
                
                        ]
                    },
        
                ]
            },

        ]
    },
    {
        name:'Rijhu',
        text:'lorem ipsum gribsh jhffbs jhjdqaa',
        replies:[

        ]
    },
    {
        name:'Rijhu',
        text:'lorem ipsum gribsh jhffbs jhjdqaa',
        replies:[

        ]
    },
    {
        name:'Rijhu',
        text:'lorem ipsum gribsh jhffbs jhjdqaa',
        replies:[

        ]
    },
]

const Comment=({data})=>{
    const {name,text,replies}=data;
    return(
        <div className='flex bg-gray-200 my-2 rounded-md px-2 py-2' >
            <img
            className="h-8 w-8 mr-2 rounded-full"
            src="https://images.rawpixel.com/image_png_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
            alt="User"
            />

            <div >
                <p>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )

}

const CommentsList=({comments})=>{
    return comments.map((comment , index)=> (
    <div key={index}>
         <Comment  data={comment} />
         <div className='ml-5 pl-5 border border-l-black' >
            <CommentsList comments={comment.replies} />
         </div>
     </div>
    ))
}


const CommentsContainer = () => {
  return (
    <div className='p-2 m-5 w-[1050px]'>
        <h1 className='text-2xl font-bold' >Comments:</h1>

        <CommentsList comments={commentData} />

        {/* <Comment data={commentData[0]} /> */}
    </div>
  )
}

export default CommentsContainer