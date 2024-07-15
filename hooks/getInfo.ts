import { YouTubeVideoItem } from "./getVideos";

export const getInfo = async ({videoId}: {videoId: string}) : Promise<YouTubeVideoItem[]> => {
    const api = process.env.YOUTUBE_API;
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${api}`
    console.log(url)
    try{
        const response = await fetch(url);
        
      // if(!response.ok) throw new Error(`Network response was not ok: ${response.status} - ${response.statusText}`)
      
      const res = await response.json();
      const data: YouTubeVideoItem[] = res.items
      
      return data
    } catch (error) {
    throw error;
  }
}
