import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";


export const NavbarImport = () => {
  return (
    <>
      <div >

        <Nav fill variant="tabs" defaultActiveKey="home" fixed="top" className="justify-content-center navbar fixed-top navbar-expand-sm navbarColor ">
          <Nav.Item>
            <Link smooth={true} to="home"><Nav.Link eventKey="home">Home</Nav.Link> </Link>
          </Nav.Item>
          <Nav.Item>
            <Link smooth={true} to="aboutme"><Nav.Link eventKey="aboutme">About me</Nav.Link></Link>
          </Nav.Item>
          <Nav.Item>
            <Link smooth={true} to="projects"><Nav.Link eventKey="projects">Projects</Nav.Link> </Link>
          </Nav.Item>
          <Nav.Item>
            <Link smooth={true} to="resume"> <Nav.Link eventKey="resume">Resume</Nav.Link></Link>
          </Nav.Item>
        </Nav>

      </div>
    </>
  )
}

export default NavbarImport

