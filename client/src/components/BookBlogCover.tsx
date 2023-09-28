import React from 'react'

interface BookBlogCoverProps {
    title?:string,
    image?:string,

}

const BookBlogCover = (props: BookBlogCoverProps) => {
  return (
    <div className='w-[200px] h-[320px] border-2 border-red-500 m-4 text-center'>
        {props.title}
    </div>
  )
}

export default BookBlogCover