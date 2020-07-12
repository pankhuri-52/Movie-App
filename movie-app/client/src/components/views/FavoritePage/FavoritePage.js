import React from 'react';
import './favorite.css';

function FavoritePage() {
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