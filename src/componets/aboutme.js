import React from 'react'
import { Carousel, Figure, ListGroup, Card, Button, Media } from 'react-bootstrap';
import photos from './images/profile.jpg';

export const aboutme = () => {
    return (

        <div classname="container-fluid">
            
        <div className="shrinkBoxes">
            <div className="justify-content-md-center">

                <div className="card">

            <img src={photos} className="img-fluid"/>

            <h5>About me</h5>
                                    <p>I’m currently a 4th semester Information Technology – Software Development that attends Southern Alberta Institute of Technology.</p>
                                    <p>I’m consistently looking to expand my knowledge as a software developer by learning new or interesting programming languages.</p>
                                    <p>Current Languages: Java, SQL (Oracle / MySQL), C#, Ruby, HTML5, CSS, JSP's</p>
                                    <p>Familiar Languages: Javascript, React.js</p>
                                    <p>Current Frameworks: Maven, Git, Ubuntu, Tomcat. Some experience with AWS, Google Cloud, Heroku.</p>
                                    <p>Currently learning: Node.js, MongoDB,  Express, GraphSQL.</p>

                                    </div>

            </div>
        </div>
        </div>
    )
}

export default aboutme
