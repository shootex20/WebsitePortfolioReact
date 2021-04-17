import React from 'react'
import { Carousel, Figure, ListGroup, Card, Button, Media } from 'react-bootstrap';
import photos from './images/profile.jpg';

export const aboutme = () => {
    return (

        <div className="shrinkBoxes">
            <div className="justify-content-md-center">
                <div className="responsiveContainer">

                    <Card>
                        <ul className="list-unstyled">
                            <Media as="li">
                                <img
                                    width={280}
                                    height={350}
                                    className="mr-3"
                                    src={photos}
                                    alt="Generic placeholder"
                                />
                                <Media.Body>
                                    <h5>About me</h5>
                                    <p>I’m currently a 4th semester Information Technology – Software Development that attends Southern Alberta Institute of Technology.</p>
                                    <p>I’m consistently looking to expand my knowledge as a software developer by learning new or interesting programming languages.</p>
                                    <p>Current Languages: JavaScriptm Java, SQL (Oracle / MySQL), C#, Ruby, HTML5, CSS</p>
                                    <p>Current Frameworks: Maven, Git, Ubuntu, Tomcat. Some experience with AWS, Google Cloud, Heroku.</p>
                                    <p>Currently learning: Node.js, MongoDB, React.js, Express, GraphSQL.</p>
                                </Media.Body>
                            </Media>
                        </ul>
                    </Card>

                </div>
            </div>
        </div>
    )
}

export default aboutme
