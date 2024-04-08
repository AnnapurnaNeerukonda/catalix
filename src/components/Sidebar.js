import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Link } from 'react-router-dom'
export default function Sidebar() {
    return (
        <div className='sidebar d-flex flex-column justify-content-between text-white p-4 vh-100'>
            <div>
                <div className='mb-3'>
                    <i className="bi bi-chevron-left"></i>
                </div>
                <Link to='/' className='d-flex align-items-center nav-link text-white'>
                <i className="bi bi-box me-2 fs-4"></i>
                    <span className='fs-1'>Catalix</span>
                </Link>
                <ul className='nav nav-pills flex-column p-0 m-0'>
                    <li className="nav-item p-1">
                        <Link to="/" className="nav-link text-white">
                            <i className='bi bi-house me-2 fs-5'></i>
                            <span>Home</span>
                        </Link>
                    </li >
                    <li className="nav-item p-1">
                        <Link to="/activities" className="nav-link text-white">
                            <i className='bi bi-stopwatch me-2 fs-5'></i>
                            <span>Activities</span>
                        </Link>
                    </li >
                    <li className="nav-item p-1">
                        <Link to="/analytics" className="nav-link text-white">
                            <i className='bi bi-bar-chart me-2 fs-5'></i>
                            <span>Analytics</span>
                        </Link>
                    </li >
                    <li className="nav-item p-1">
                        <Link to="/transformation" className="nav-link text-white">
                            <i className='bi bi-rocket me-2 fs-5'></i>
                            <span>Transformation</span>
                        </Link>
                    </li >
                    <li className="nav-item p-1">
                        <Link to="/library" className="nav-link text-white">
                            <i className='bi bi-stack me-2 fs-5'></i>
                            <span>Library</span>
                        </Link>
                    </li >

                </ul >
            </div>
            <div>
                <hr className='text-secondary text-white' />
                <ul className='nav nav-pills flex-column p-0 m-0'>
                    <li className="nav-item p-1">
                        <Link to="/settings" className="nav-link text-white">
                            <i className='bi bi-gear me-2 fs-5'></i>
                            <span>Settings</span>
                        </Link>
                    </li >
                    <li className="nav-item p-1">
                        <Link to="/logout" className="nav-link text-white">
                            <i className='bi bi-door-closed me-2 fs-5'></i>
                            <span>Logout</span>
                        </Link>
                    </li >
                </ul>
            </div>
        </div >
    )
}
