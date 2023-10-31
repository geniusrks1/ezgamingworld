import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaShoppingCart } from 'react-icons/fa';
import { BsFillClipboard2CheckFill } from "react-icons/bs";


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#e3f2fd' }}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 me-auto mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/"><FaHome style={{ verticalAlign: 'initial' }} /> Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/orders"><BsFillClipboard2CheckFill style={{ verticalAlign: 'initial' }} /> My Orders</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/cart'><FaShoppingCart style={{ verticalAlign: 'initial' }} /> Cart</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search by Name" />
                    </form>
                    <button type="button" className="btn btn-sm btn-outline-success">Sign In</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
