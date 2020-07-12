import React,{useEffect, useState} from 'react';
import Axios from 'axios';
import './favorite.css';

function FavoritePage() {

    const variables = { userFrom : localStorage.getItem('userId') }

    const [FavoritedMovies, setFavoritedMovies] = useState([]);

    useEffect(() => {
        Axios.post('/api/favorite/getFavoritedMovie',variables)
            .then(response => {
                if(response.data.success){
                    setFavoritedMovies(response.data.favorites);
                } else {
                    alert('Failed to get Favorited Video');
                }
            })
    },[])

    return (
        <div style={{width : '85%', margin : '3rem auto'}}>
            <h3>Favorite Movies By Me</h3>
            <hr/>

            <table>
                <thead>
                    <tr>
                        <th>Movie Title</th>
                        <th>Movie RunTime</th>
                        <th>Remove from favorites</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    )
}
export default FavoritePage;