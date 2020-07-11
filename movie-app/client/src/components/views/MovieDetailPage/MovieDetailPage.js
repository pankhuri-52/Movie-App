import React, { useEffect, useState } from 'react';
import {API_URL, API_KEY, IMAGE_URL} from '../../Config'; 
import MainImage from '../LandingPage/Sections/MainImage';
import { Descriptions, Button } from 'antd';

function MovieDetailPage(props) {

    const [Movie, setMovie] = useState([]);

    useEffect(() => {

        const movieId = props.match.params.movieId;

        fetch(`${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                setMovie(response);
            })

    },[])

    return (
        <div>
            {/* Main Image */}
            {
                Movie &&
                <MainImage image={`${IMAGE_URL}/w1280${Movie.backdrop_path && Movie.backdrop_path}`} 
                title={Movie.original_title} 
                text={Movie.overview} />
            }

            {/* Body */}
            <div style={{width : '85%', margin : '1rem auto'}}>
                <div style={{display:'flex' , justifyContent:'flex-end'}}>
                    <Button>Add to Favorite</Button>
                </div>

                {/* MovieInfo Table */}
                <Descriptions title="Movie Info" bordered>
                    <Descriptions.Item label="Title">{Movie.original_title}</Descriptions.Item>
                    <Descriptions.Item label="release_date">{Movie.release_date}</Descriptions.Item>
                    <Descriptions.Item label="revenue">{Movie.revenue}</Descriptions.Item>
                    <Descriptions.Item label="runtime">{Movie.runtime}</Descriptions.Item>
                    <Descriptions.Item label="vote_average" span={2}>{Movie.vote_average}</Descriptions.Item>
                    <Descriptions.Item label="vote_count">{Movie.vote_count}</Descriptions.Item>
                    <Descriptions.Item label="status">{Movie.status}</Descriptions.Item>
                    <Descriptions.Item label="popularity">{Movie.popularity}</Descriptions.Item>
                </Descriptions>

                {/* Toggle Button */}
                <div style={{display:'flex' , justifyContent:'center', padding: '10px'}}>
                    <Button>Toggle Actor View</Button>
                </div>

            </div>

        </div>
    )
}
export default MovieDetailPage;