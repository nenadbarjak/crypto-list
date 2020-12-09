import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'

const Header = ({ loggedIn, login }) => {
    return (
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Navbar.Brand>Crypto List</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    {
                        loggedIn && <Nav.Link href="#features">Profile</Nav.Link>
                    }                    
                </Nav>
                {
                    !loggedIn && 
                    <Button 
                        variant="primary"
                        onClick={login}
                    >
                        Login
                    </Button>
                }
                
            </Navbar.Collapse>
        </Navbar>
    )
}
 
export default Header;