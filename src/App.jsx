import React, { useState, useEffect } from 'react';
import DisplayMusic from './components/DisplayMusic/DisplayMusic';
import AddSong from './components/AddSong/AddSong';
import axios from 'axios';



function App() {

  const [songs, setSongs] = useState([{title: 'Clouds', artist: 'NF', album: 'Clouds (The Mixtape)', release_date: '2021-03-26', genre: 'rap', like: 1}])

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs() {
    let response = await axios.get('http://127.0.0.1:8000/api/music/');
    setSongs(response.data);
  }

  function addNewSong(song) {
    let tempSong = [...songs, song];
    setSongs(tempSong);
  }
  
  return (
    <div>
      <DisplayMusic parentSongs={songs} />
      <AddSong addNewSongProperties={addNewSong} />

    </div>
  );
}

export default App;
