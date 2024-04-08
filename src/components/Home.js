import React from 'react';
import './Home.css';
import { Carousel, Card, InputGroup, FormControl, Button } from 'react-bootstrap';
import { BiSearch, BiX } from 'react-icons/bi'; // Add this import

export default function Home() {
  return (
    <div className='container'>
      <div className='row'>
      <div className='col-9 mx-auto '>
            <InputGroup>
              <InputGroup.Text><BiSearch /></InputGroup.Text>
              <FormControl placeholder="Search..." />   
              <InputGroup.Text><BiX /></InputGroup.Text>
            </InputGroup>
          </div>
        <div className='col-md-7'>
          <h3>Set-up catalix for Success</h3>
          <p>Get Catalix up to date or start your transformation by following the guide below</p>
          <Carousel className="custom-carousel">
            <Carousel.Item>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                <button className="btn btn-primary">Button</button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="btn btn-primary">Button</button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                <button className="btn btn-primary">Button</button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className='col-md-5'>
          <div className='d-flex justify-content-end'>
            <i className="bi bi-bell me-2 fs-5"></i>
            <i className="bi bi-chat-left-dots me-2 fs-5"></i>
          </div>
          <h3>Get ready to transform</h3>
          <p>Here's a video to get started. As your transformation progresses, you'll get fresh tips and insights here</p>
          <iframe width="350" height="200" src="https://www.youtube.com/embed/8qwnFEFmDNY" title="How to be change ready | Neil Walker | TEDxWarsawWomen" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
}
