import React, { useState, useEffect } from 'react';
import DisplayMusic from './components/DisplayMusic/DisplayMusic';



function App() {

const [songs, setSongs] = useState([{title: 'Clouds', artist: 'NF', album: 'Clouds (The Mixtape)', release_date: '2021-03-26', genre: 'rap', like: 1}])

  return (
    <div>
      <DisplayMusic parentSongs={songs} />

    </div>
  );
}

export default App;
