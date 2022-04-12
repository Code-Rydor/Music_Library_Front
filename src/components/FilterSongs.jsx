import React from 'react';

const FilterSongs = ({ searchInput, input }) => {

    return ( 
        <div>
            <form>
                <input type='text' value={input} onChange={(event) => searchInput(event)}/>
                <button type='submit'>Search</button>
            </form>
        </div>
     );
}
 
export default FilterSongs;