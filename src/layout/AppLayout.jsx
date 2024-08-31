import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';
import netflixLogo from '../assets/netflix-logo.png';
import './AppLayout.style.css';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div>
      <Navbar
        expand='lg'
        className='bg-body-tertiary'
        bg='dark'
        data-bs-theme='dark'
      >
        <Container fluid>
          <Navbar.Brand href='#'>
            <img
              src={netflixLogo}
              alt='netflix logo'
              className='netflix-logo'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to='/' style={{ color: 'white' }}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to='/movies' style={{ color: 'white' }}>
                Movies
              </Nav.Link>
            </Nav>
            <Form className='d-flex'>
              <Form.Control
                type='search'
                placeholder='Search'
                className='me-2'
                aria-label='Search'
              />
              <Button variant='outline-success' className='search-btn'>
                <FaSearch className='search-icon' />
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default AppLayout;
