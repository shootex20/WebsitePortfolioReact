import React from 'react'
import { Carousel, Figure, ListGroup, Card, Button, Media } from 'react-bootstrap';
import project1 from './images/oursafety.png';
import project2 from './images/homenventory.png';
import project3 from './images/hnventory.png';


export const projects = () => {
  return (
    <div className="shrinkBoxes">
    <div className="justify-content-md-center">
      <div className="responsiveContainer">
        <Card>
          <ul className="list-unstyled">
            <Media as="li">
              <img
                width={400}
                height={200}
                className="mr-3"
                src={project1}
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5>OurSafetyApp</h5>
                <p>
                  OurSafetyApp is a safety management system, Companys can: Add equipment, remove Equipment, add employees, deactivate employees, edit employees, and add their own safety manuals. Admins can log in and add companys.
                  This was built using Java, Bootstrap, MySQL, Java servlets, and lastly Java JSTL. To login test it out: Company access - username: manager2 password: password | OurSafetyApp Admin: username: oursafetyapplication@gmail.com password: password
    <br />
                  <Button variant="outline-primary" href="http://chelseycoughlin.com:8080/OurSafetyApp/">View Live</Button>{' '}
                  <Button variant="outline-info" href="https://github.com/shootex20/OurSafetyApp_Maven">Source Code</Button>{' '}
                </p>
              </Media.Body>

            </Media>
            <br />
            <Media as="li">
              <img
                width={400}
                height={200}
                className="mr-3"
                src={project2}
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5>Home Nventory System</h5>
                <p>
                  HomeNventory system was a final project for our semester 3 at SAIT, the UI was designed using Bulma. This was built entirely with Java, JSTL, Servlets.
  <br />
  This was built using Java, Bootstrap, MySQL, Java servlets, and lastly Java JSTL. Basic user: username: anne password: password | Admin Login: username: admin password: password
  <br />
                  <Button variant="outline-primary" href="http://chelseycoughlin.com:8080/HomeNventory/">View Live</Button>{' '}
                  <Button variant="outline-info" href="https://github.com/shootex20/Semester3_Final_WebDev_Project">Source Code</Button>{' '}
                </p>
              </Media.Body>
            </Media>
            <br />
            <Media as="li">
              <img
                width={400}
                height={200}
                className={"mr-3"}
                src={project3}
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5>Ruby on Rails HomeNventory CRUD App</h5>
                <p>
                  This is the home inventory system in CRUD style, it was a small project used for our emerging trends. I made a small app which consisted of some basic bootstrap to keep it looking clean and simple.

                  This was built using Ruby on Rails, Bootstrap, and the devise gem. Deployed using Heroku and PostgresSQL, but uses SQLite 3 during development. You can create an account, add items, manage account, and sign out.
      <br />
                  <Button variant="outline-primary" href="https://railsinventory.herokuapp.com">View Live</Button>{' '}
                  <Button variant="outline-info" href="https://github.com/shootex20/Rails---Home-Nventory">Source Code</Button>{' '}
                </p>
              </Media.Body>
            </Media>
          </ul>
        </Card>
      </div>
      </div>
    </div>

  )
}

export default projects
