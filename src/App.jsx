import React, { useState, useEffect } from 'react';
import DisplayMusic from './components/DisplayMusic/DisplayMusic';
import AddSong from './components/AddSong/AddSong';
import axios from 'axios';



function App() {

  const [songs, setSongs] = useState([])
  let requestReload = true

  useEffect(() => {
    if (requestReload) {
      getAllSongs();
      requestReload = !requestReload
    }
  }, [requestReload])
  

  async function getAllSongs() {
    let response = await axios.get('http://127.0.0.1:8000/api/music/');
    setSongs(response.data);
  }
  
  async function createSong(newSong) {

    console.log("New Song param: ", newSong)
    let response = await axios.post('http://127.0.0.1:8000/api/music/', newSong);
    if (response.status === 201) {
      requestReload = true
      window.location.reload();
    }
  }

  // async function deleteSong(ID) {
  //   let response = await axios.delete(`http://127.0.0.1:8000/api/musi/${ID}`);
  //   console.log(response)
  //   window.location.reload();
  // }


  return (
    <div>
      <AddSong createSong={createSong} />
      <DisplayMusic parentSongs={songs} />

    </div>
  );
}

export default App;
