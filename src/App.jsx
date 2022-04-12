import React, { useState, useEffect } from 'react';
import DisplayMusic from './components/DisplayMusic/DisplayMusic';
import AddSong from './components/AddSong/AddSong';
import axios from 'axios';
import FilterSongs from './components/FilterSongs';



function App() {

  const [songs, setSongs] = useState([])
  const [input, setInput] = useState('')
  let requestReload = true



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

  const searchInput = (event) => {
    setInput(event.target.value)

    useEffect(() => {
      if (requestReload) {
        getAllSongs();
        requestReload = !requestReload
      }
    }, [requestReload])
  

    return (
      <div>
        <FilterSongs searchInput={searchInput} input={input} />
        <AddSong createSong={createSong} />
        <DisplayMusic parentSongs={songs} input={input} />

      </div>
    );
  }
}

export default App;
