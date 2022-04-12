import React from 'react';


const FilterSongs = ({ searchInput, input }) => {

    
//     let results = filterSongs.filter(function (el) {
//         if (el.includes(`${filterInput}`)) {
//             return true;
//         }
        
//     })
//    return results


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

//<input type='text' value={title} onChange={(event) => setTitle(event.target.value)} />