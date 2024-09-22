import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
        {/* Navbar */}
        <nav class="navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-between ">
            <div class="container-fluid">
                <button className="btn navbar-brand">Contact SMS App</button>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">

                        {/* Navigate Contact Lsit */}
                        <li className="ms-3 nav-item">
                            <Link to='/' style={{textDecoration:"none",color:"black"}}>Contacts</Link>
                        </li>

                        {/* Navigate to Messages */}
                        <li className="nav-item ms-3">
                            <Link to='/Messages' style={{textDecoration:"none",color:"black"}}>Messages Sent</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </>
  )
}

export default Navbar