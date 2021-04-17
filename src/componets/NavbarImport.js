import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';


export const NavbarImport = () => {
    return (
      <>
      <div className="navBarIn">
  <Navbar fixed="top" className="justify-content-center navbar fixed-top navbar-expand-sm" variant="dark">
    <Navbar.Brand href="/home">Home</Navbar.Brand>
    <Navbar.Brand href="/aboutme">About me</Navbar.Brand>
    <Navbar.Brand href="/projects">Projects</Navbar.Brand>
    <Navbar.Brand href="https://drive.google.com/file/d/1obthN9sq16jpwg8XaESW7y6sy-PSvU1H/view?usp=sharing">Resume</Navbar.Brand>
  </Navbar>
  </div>
  </>
    )
}

export default NavbarImport

