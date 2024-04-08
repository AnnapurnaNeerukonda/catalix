import React from 'react';
import './Home.css';
import { Carousel, Card, InputGroup, FormControl, Button } from 'react-bootstrap';
import { BiSearch, BiX } from 'react-icons/bi';

export default function Home() {
  return (
    <div className='container'>
      <div className='row'>
      <div className='col-md-6 mt-5 m-md-0'>
          <div className='col-9 mx-auto mb-4'>
            <InputGroup>
              <InputGroup.Text><BiSearch /></InputGroup.Text>
              <FormControl placeholder="Search by profile,setting,..." />   
              <InputGroup.Text><BiX /></InputGroup.Text>
            </InputGroup>
          </div>
          <h3>Set-up catalix for Success</h3>
          <p>Get Catalix up to date or start your transformation by following the guide below</p>
          <div className='cards'>
            <Carousel className='custom-carousel' indicators={false}>
              <Carousel.Item>
                <Card className='card'>
                  <Card.Body>
                    <Card.Title>1/6</Card.Title>
                    <Card.Text>
                      <p className='description'> Build Your development value stream map</p>
                      <button className='btn'>Start Building</button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
              <Carousel.Item>
                <Card className='card'>
                  <Card.Body>
                    <Card.Title>2/6</Card.Title>
                    <Card.Text>
                      <p className='description'> Build Your development value stream map</p>
                      <button className='btn'>Start Building</button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
              <Carousel.Item>
                <Card className='card'>
                  <Card.Body>
                    <Card.Title>3/6</Card.Title>
                    <Card.Text>
                      <p className='description'> Build Your development value stream map</p>
                      <button className='btn'>Start Building</button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
              <Carousel.Item>
                <Card className='card'>
                  <Card.Body>
                    <Card.Title>4/6</Card.Title>
                    <Card.Text>
                      <p className='description'> Build Your development value stream map</p>
                      <button className='btn'>Start Building</button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
              <Carousel.Item>
                <Card className='card'>
                  <Card.Body>
                    <Card.Title>5/6</Card.Title>
                    <Card.Text>
                      <p className='description'> Build Your development value stream map</p>
                      <button className='btn'>Start Building</button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
              <Carousel.Item>
                <Card className='card'>
                  <Card.Body>
                    <Card.Title>6/6</Card.Title>
                    <Card.Text>
                      <p className='description'> Build Your development value stream map</p>
                      <button className='btn'>Start Building</button>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer><h3 className='textCenter'>......</h3></Card.Footer>
                </Card>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div className='col-md-5'>
          <div className='d-flex justify-content-end'>
            <i className="bi bi-bell me-2 fs-5"></i>
            <i className="bi bi-chat-left-dots me-2 fs-5"></i>
          </div>
          <h3 className='mb-4 mt-4'>Get ready to transform</h3>
         
          <p>Here's a video to get started. As your transformation progresses, you'll get fresh tips and insights here</p>
          <iframe width="400" height="250" src="https://www.youtube.com/embed/8qwnFEFmDNY" title="How to be change ready | Neil Walker | TEDxWarsawWomen" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
}
