import React from 'react'
import { Carousel, Figure, ListGroup, Card, Button, Media } from 'react-bootstrap';
import photos from './images/profile.jpg';

export const aboutme = () => {
    return (

        <div classname="container-fluid justify-content-md-center">
            
        <div className="shrinkBoxes">
            <div className="justify-content-md-center">

                <div className="card justify-content-md-center">

            <img src={photos} className="img-fluid centerImage2" width={280} height={350}/>

        <div class="textCenter">
        <div className="shrinkBoxes">
            <h5>About me</h5>
                                    <p>Graduated from Southern Alberta Institute of Technology majoring in Software Development. GPA of 3.56, and strong problem solving skills.</p>
                                    <p>I’m consistently looking to expand my knowledge as a software developer by learning new or interesting programming languages. I am very fluent with Algorithms and data structures.</p>
                                    <p>Current Languages: Java, SQL (Oracle / MySQL), C#, Ruby, HTML5, CSS, JSP's</p>
                                    <p>Familiar Languages: Javascript, React.js</p>
                                    <p>Current Frameworks: Maven, Git, Ubuntu, Tomcat. Some experience with AWS, Google Cloud, Heroku.</p>
                                    <p>Currently learning: Node.js, MongoDB,  Express, GraphSQL.</p>

                                    </div>
                                    </div>
                                    </div>

            </div>
        </div>
        </div>
    )
}

export default aboutme
