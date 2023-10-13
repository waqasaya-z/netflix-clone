import React from 'react'

interface Props{
    URL: string
}

interface Params{
    searchParams: string
}

interface YouTubeVideoItem {
  id: {
    videoId: string
  },
  snippet: {
    thumbnails: {
      high: {
        url: string;
      };
    };
    title: string;
  };
}

export const getData = async ({URL}: Props) : Promise<YouTubeVideoItem[]> => {
    const url = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=[YOUR_API_KEY]'
    const api = process.env.YOUTUBE_API;
    const domainURL = 'https://youtube.googleapis.com/youtube/v3'
    try{
        const response = await fetch(`${domainURL}/${URL}&key=${api}`);
        
      if(!response.ok) throw new Error(`Network response was not ok: ${response.status} - ${response.statusText}`)
      
      const res = await response.json();
      const data: YouTubeVideoItem[] = res.items
      
      return data
    } catch (error) {
    console.error('Error in getVideos:', error);
    throw error;
  }
}

export const getVideos = ({searchParams}: Params): Promise<YouTubeVideoItem[]> => {
    const trailerVideos = `search?part=snippet&q=${searchParams}%20trailer`
   const data = getData({URL: trailerVideos})
   return data;
}

export const getPopularVideos = async (): Promise<YouTubeVideoItem[]> => {
    const popularVideos = 'videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US'
   const data = getData({URL: popularVideos})
   return data;
}