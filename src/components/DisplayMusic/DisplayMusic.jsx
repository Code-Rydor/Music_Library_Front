const DisplayMusic = (props) => {
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
            {props.parentSongs.map((song) => {
                return (
                <tr>
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
}
 
export default DisplayMusic;