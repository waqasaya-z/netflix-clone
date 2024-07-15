import React from 'react'

const VideoPage = ({ params }: { params: { id: string } }) => {

  const embedUrl = `https://www.youtube.com/embed/${params.id}`
  
  return (
    <div className='h-screen'>

    <div className='flex justify-center items-center mr-20 pt-20'>
       <iframe
      width={1200}
      height={500}
      src={embedUrl}
      allowFullScreen
      rel='0'
      />
    </div>
      </div>
  )
}

export default VideoPage
