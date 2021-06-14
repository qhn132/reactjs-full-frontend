import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom'
import { signOut, isAuthenticated } from '../auth/index'

const HeaderWeb = () => {
    const history = useHistory();
    const { pathname } = useLocation();
    const [isLogged, setLogged] = useState(false);
    const { user } = isAuthenticated();
    useEffect(() => {
        isAuthenticated() && setLogged(true)
    }, [pathname, isLogged])

    return (
        <div className="container px-0 px-lg-3 mb-2 ">
            <nav className="navbar navbar-expand-lg navbar-light py-3 px-lg-0">
                <a className="navbar-brand" href="/">
                    <span className="font-weight-bold text-uppercase text-white">Boutique</span>
                </a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link " to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/products">Product</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>

                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/cart">
                                <i className="fas fa-dolly-flatbed mr-1 text-gray" />Cart
                                <small className="text-gray">(0)</small>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fas fa-user-alt mr-1 text-gray" /></a>
                        </li>

                        {pathname !== "/signin" && isLogged ? (
                            
                                <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" id="pagesDropdown" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{user.name}</a>
                                    <div className="dropdown-menu mt-3" aria-labelledby="pagesDropdown">
                                        <a className="dropdown-item border-0 transition-link" href="/admin/dashboard">Dashboard</a>
                                        <a className="dropdown-item border-0 transition-link" href="/" style={{ cursor: "pointer" }}
                                            onClick={() =>
                                                signOut(() => {
                                                    history.push("/");
                                                })
                                            }>Logout</a>
                                    </div>
                                </li>
                            
                        ) : (
                            <>
                                <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" id="pagesDropdown" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">User</a>
                                    <div className="dropdown-menu mt-3" aria-labelledby="pagesDropdown">
                                        <a className="dropdown-item border-0 transition-link" href="/signin">Login</a>
                                        <a className="dropdown-item border-0 transition-link" href="/signup">Register</a>

                                    </div>
                                </li>
                            </>
                        )
                        }
                    </ul>
                </div>
            </nav>
        </div>

    )
}

export default HeaderWeb
