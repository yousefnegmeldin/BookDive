import React from 'react'
import BookBlogCover from './BookBlogCover'

const Featured = () => {
  return (
    <div className='border-2 border-sky-500 w-[1000px] h-[500px] flex items-center flex-col'>
        <p className='text-3xl mt-5'>Title</p>
        <div className='flex'>
            <BookBlogCover />
        </div>
    </div>
  )
}

export default Featured