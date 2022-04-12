const DisplayMusic = ({ parentSongs, input }) => {
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
        {parentSongs
          .filter(function (el) {
            if (el.title.includes(`${input}`) || el.artist.includes(`${input}`) || el.album.includes(`${input}`) || el.genre.includes(`${input}`) || el.release_date.includes(`${input}`)) {
              return true;
            }
          })
          .map((song, index) => {
            return (
              <tr key={index}>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{song.album}</td>
                <td>{song.genre}</td>
                <td>{song.release_date}</td>
                <td>{song.like}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default DisplayMusic;
