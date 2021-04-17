import React from 'react'
import GitHubButton from 'react-github-btn'
import { Navbar, Nav, Form, FormControl, Button, Card } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';


export const footer = () => {


    return (
        <div className="navBarIn">
        <Navbar fixed="bottom" className="justify-content-center" >
        
        <SocialIcon url="https://www.linkedin.com/in/chelseycoughlin/" /> <SocialIcon fgColor="White" url="https://github.com/shootex20"/>
 
        </Navbar>
  
        </div>
    )
}

export default footer
