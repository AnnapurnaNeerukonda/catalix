import React from 'react'
import { InputGroup, FormControl } from 'react-bootstrap';
import { BiSearch, BiX } from 'react-icons/bi'; // Add this import
import './Activities.css'

export default function Analytics() {
  return (
    <div className='p-3'>
      <div className='d-flex '>
        <div className='col-5 mx-auto'>
          <InputGroup>
            <InputGroup.Text><BiSearch /></InputGroup.Text>
            <FormControl placeholder="Search..." />
            <InputGroup.Text><BiX /></InputGroup.Text>
          </InputGroup>
        </div>
        <div className='col-5'>
          <i className="bi bi-bell me-5 fs-5"></i>
          <i className="bi bi-chat-left-dots me-5 fs-5"></i>
          <i className='bi bi-gear me-5 fs-5'></i>
        </div>
      </div>
      <div className='d-flex justify-content-around parent'>
        <p className='content'>Approve Content</p>
        <i className="bi bi-arrow-right"></i>
        <i className="bi bi-clock"></i>
        <i className="bi bi-arrow-right"></i>

        <p className='content'>Create Content</p>
        <i className="bi bi-arrow-right"></i>
        <i className="bi bi-clock"></i>
        <i className="bi bi-arrow-right"></i>

        <p className='content'>Approve Content</p>
        <i className="bi bi-arrow-right"></i>
        <i className="bi bi-clock"></i>
        <i className="bi bi-arrow-right"></i>

        <p className='content'>Run Sample Test </p>
        <i className="bi bi-arrow-right"></i>
        <i className="bi bi-clock"></i>
        <i className="bi bi-arrow-right"></i>

        <p className='content'>Launch Full Campaign</p>

        <p>+</p>

      </div>
      <hr  className='analytics my-3'/>
      <p>Active Time</p>
      <div className='d-flex justify-content-between active align-content-center'>
     
        <p>1 Day</p>
        <p>2 Days</p>
        <p>4 Hours</p>
        <p>4 Hours</p>
        <p>1 Day</p>
      </div>
      <hr className='analytics'/>
      <p>Wait Time</p>
      <div className='wait-time d-flex justify-content-evenly'>
        <p>2 weeks (wait for availability)</p>
        <p>1 week (wait for approval authority)</p>
        <p>2 weeks (wait for IT support)</p>
        <p>1 week (wait for test response)</p>
      </div>
      <div className='mt-3 d-flex justify-content-evenly'>
        <p>Flow time = 47 Days</p>
        <p>Total Active time = 5 Days  </p>
        <p>Flow Efficiency = 11%</p>
      </div>
      <button className='btn'>Save</button>
    </div>
  )
}