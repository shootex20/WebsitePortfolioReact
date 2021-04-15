import React from 'react'
import { Col, Row, Container, Image, Card, Button } from 'react-bootstrap';
import photos from './images/profile.jpg';

export const aboutme = () => {
    return (
        <div class="headerContainer">

        <Card style={{ width: '20rem'}}>
        <Card.Img variant="top" src={photos} />
        <div class="translucentBack">
        <Card.Body>
            <Card.Title>About me</Card.Title>
            <Card.Text>
            I’m currently a 4th semester Information Technology – Software Development that attends Southern Alberta Institute of Technology.
            <br/>
            I’m consistently looking to expand my knowledge as a software developer by learning new or interesting programming languages.
            <br/>
            Current Languages: JavaScriptm Java, SQL (Oracle / MySQL), C#, Ruby, HTML5, CSS
            <br/>
            Current Frameworks: Maven, Git, Ubuntu, Tomcat. Some experience with AWS, Google Cloud, Heroku.
            <br/>
            Currently learning: Node.js, MongoDB, React.js, Express, GraphSQL.
            </Card.Text>
        </Card.Body>
        </div>
        </Card>
         
        </div>
    )
}

export default aboutme
