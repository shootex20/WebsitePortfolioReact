import React from 'react'
import photos from './images/profile.jpg';

export const aboutme = () => {
    return (
        <div className="container-fluid justify-content-md-center" id="aboutme">
            <div className="shrinkBoxes">
                <div className="justify-content-md-center">
                    <div className="card justify-content-md-center">
                        <img src={photos} className="img-fluid centerImage2" width={280} height={350} />
                        <div className="textCenter">
                            <div className="shrinkBoxes">
                                <h5>About me</h5>
                                <p>I love to learn and I love to challenge myself, I've been programming since I was 13 creating small game scripts like health bars, attack animations, eventually I ended up creating an entire server system and building my own PC.</p>
                                <p>Graduated from Southern Alberta Institute of Technology majoring in Software Development. GPA of 3.56, and strong problem solving skills.</p>
                                <p>Programming Languages: Java, JavaScript/HTML/CSS, SQL, Bash, C#, React.js, TypeScript.js</p>
                                <p>Frameworks: Express.js, Node.js, .Net framework </p>
                                <p>Tools: Azure, Git, Azure DevOps, CI/CD, Maven, Tomcat</p>
                                <p>I have experience in DevOps as well, mostly in Azure and setting up new apps from scratch and tinkering with build pipelines on deploying apps.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default aboutme
