const DisplayMusic = ({ parentSongs }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Genre</th>
          <th>Release Date</th>
          <th>Like</th>
        </tr>
      </thead>
      <tbody>
        {parentSongs.map((song, index) => {
          return (
            <tr key={index}>
              <td>{song.title}</td>
              <td>{song.artist}</td>
              <td>{song.album}</td>
              <td>{song.genre}</td>
              <td>{song.release_date}</td>
              <td>{song.like}</td>
              {/* <td><button onClick = {() => </td> */}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DisplayMusic;
