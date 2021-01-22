import {React, useState, useEffect} from 'react'
import {Select} from 'react-select'
import axios from 'axios'
import {Form, Container, ListGroup, Button, Row, Col} from 'react-bootstrap'

const Search = () => {

    const SearchApiUrl = 'http://localhost:3000/videos?query='

    const [searchTerm, setSearchTerm] = useState('')
    const [submittedSearchTerm, setSubmittedSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [errorMessage, setErrorMessage] = useState(null)
    
    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        setSubmittedSearchTerm(searchTerm)
    }

    const addToLibraryHandler = (event, video) => {
        event.preventDefault()
        addVideo(video)
    }

    useEffect(() => {
        axios.get(SearchApiUrl + submittedSearchTerm)
        .then((response) => {
            const results = response.data
            setSearchResults(results);
        })
        .catch((error) => {
            setErrorMessage(error.message);
            console.log(error.message);
        });
    }, [submittedSearchTerm]);

    
    const addVideo = ((video) => { 

        const url = new URL('http://localhost:3000/videos?')

        const params = new URLSearchParams(url.search);
        
        //Add params
        params.set('title', video.title);
        params.set('overview', video.overview);
        params.set('release_date', video.release_date);
        params.set('image_url', video.image_url);
        params.set('external_id', video.external_id);
        params.set('inventory', video.inventory);

        const PostURL = url + params.toString();
        
        axios.post(PostURL)
        .then((response) => {
            setErrorMessage('Video successfully added')
        })
        .catch((error) => {
            setErrorMessage('Video not successfully added');
        });
    })

    function ListSearchResults() {
        const listItems = searchResults.map((video) =>
        <Row>
            <Col sm={4} lg={2}>
                <img src={video.image_url} />
            </Col>
            <Col sm={8} m={6} lg={8} className="video-details">
                <h4><strong>{video.title}</strong></h4>
                <p>Released: {video.release_date}</p>
                <p>{video.overview}</p>
                <Button onClick={(event) => addToLibraryHandler(event, video)} type="submit">Add to Your Library</Button>
            </Col>
        </Row>
        );
    return (
    <ListGroup>{listItems}</ListGroup>
    )}

    return(
        <div>
            <br/>
            <Container>
            <h3>Search</h3>
                <Form className="search" onSubmit={onSubmitHandler}>
                    <Form.Label>Search The Movie Database</Form.Label>
                    <Row>
                        <Col xs="9">
                            <Form.Control
                            type="text"
                            placeholder="Search TMDB"
                            value={searchTerm}
                            onChange={handleChange}
                            />
                        </Col>
                        <Col xs="auto">
                            <Button type="submit">Submit</Button>
                        </Col>
                    </Row>
                </Form>
        <ListSearchResults />
        </Container>

        </div>
    )

}

export default Search;