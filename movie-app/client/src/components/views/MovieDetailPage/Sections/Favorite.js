import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Favorite(props) {

    const [FavoriteNumber, setFavoriteNumber] = useState(0);

    useEffect(() => {

        const variable = {
            userFrom : props.userFrom ,
            movieId : props.movieId,
            movieTitle : props.movieInfo.original_title,
            movieImage : props.movieInfo.backdrop_path,
            movieRunTime : props.movieInfo.runtime
        }

        axios.post('/api/favorite/favoriteNumber',variable)
            .then(response => {
                if(response.data.success){
                   setFavoriteNumber(response.data.favoriteNumber);
                } else {
                    alert('Failed to get FavoriteNumber');
                }
            })

    },[])

    return (
        <div>
            <button>Add to Favorite</button>
        </div>
    )
}
export default Favorite;