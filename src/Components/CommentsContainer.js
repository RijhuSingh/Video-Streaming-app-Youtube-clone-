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
        <div className='flex' >
            <img
            className="h-8 w-8 mr-2"
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

const CommentsContainer = () => {
  return (
    <div className='p-2 m-5'>
        <h1 className='text-2xl font-bold' >Comments:</h1>

        <Comment data={commentData[0]} />
    </div>
  )
}

export default CommentsContainer