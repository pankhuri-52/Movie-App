import React from 'react';
import {Col} from 'antd';

function GridCard(props) {

    if(props.actor) {
        return (
            <Col lg={6} md={8} xs={24}>
            <div style={{position : "relative", padding:'5px'}}>
                    <img style={{ width : '100%', height: '320px'}} alt="img" src={props.image} />
            </div>
          </Col>
        )
    } else {
        return (
            <Col lg={6} md={8} xs={24}>
                <div style={{position : "relative", padding:'5px'}}>
                    <a href={`/movie/${props.movieId}`}> 
                        <img style={{ width : '100%', height: '320px'}} alt="img" src={props.image} />
                    </a>
                </div>
            </Col>
        )
    }
}
export default GridCard;