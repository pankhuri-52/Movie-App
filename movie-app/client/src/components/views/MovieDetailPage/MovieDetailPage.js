import React, { useEffect } from 'react';
import {API_URL, API_KEY} from '../../Config'; 

function MovieDetailPage(props) {

    useEffect(() => {

        const movieId = props.match.params.movieId;

        fetch(`${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`)
            .then(response => response.json())
            .then(response => {
                console.log(response);
            })

    },[])

    return (
        <div>

        </div>
    )
}
export default MovieDetailPage;