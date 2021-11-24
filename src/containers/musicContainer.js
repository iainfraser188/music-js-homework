import React, { useEffect, useState } from 'react';
import SongList from '../components/SongList';


const MusicContainer = () =>{
    const [Songs,setSongs] = useState([]);

    useEffect(() =>{
        getMusic();
    },[]);


    const getMusic =()=>{
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
         .then(res => res.json())
         .then(SongData => setSongs(SongData))
        // console.log(SongData.feed.entry.title)

        
    }
    return(
        <>
          <h2>Top 20 List</h2>
          <SongList Songs={Songs}/>

        </>
    )
};

export default MusicContainer