import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'


const SelectedVideo = (props) => {
    
    const video = props.video
    
    return(
        video &&(
        <div>
            <Container>
            <Row>
                <Col sm={4} lg={2}>
                    <img src={video.image_url} />
                </Col>
                <Col sm={8} m={6} lg={8} className="video-details">
                    <h4><strong>{video.title}</strong></h4>
                    <p>Released: {video.release_date}</p>
                    <p>{video.overview}</p>
                </Col>
        </Row>
            </Container>
        </div>
        ))
    }

    export default SelectedVideo;