import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'


const SelectedVideo = (props) => {
    
    const video = props.video
    
    return(
        video &&(
        <div>
            <Container>
                <Row>
                    <Col md={2}>
                        <img src={video.image_url} />
                    </Col>
                    <Col md={4}>
                        <h4>{video.title}</h4>
                        <p>Released: {video.release_date}</p>
                        <p>{video.overview}</p>
                    </Col>
                </Row>
            </Container>
        </div>
        ))
    }

    export default SelectedVideo;