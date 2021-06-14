import React from 'react'
import { isAuthenticated } from '../auth';
import { Link, Route } from 'react-router-dom'
import Header from '../components/HeaderAdmin'

const UserDashboard = () => {
    const { user: { _id, name, email, role } } = isAuthenticated()

    const userLinks = () => {
        return (
            <>
                <div className="card">
                    <Route
                        render={() =>
                            isAuthenticated() && isAuthenticated().user.role === 1 ? (
                                <>
                                    <h4 className="card-header">AdminDashboard</h4>
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <Link className="nav-link" to="/admin/category">Category</Link>
                                        </li>
                                        <li className="list-group-item">
                                            <Link className="nav-link" to="/admin/product">Product</Link>
                                        </li>
                                        <li className="list-group-item">
                                            <Link className="nav-link" to={`/profile/update/${_id}`}>Update Profile</Link>
                                        </li>
                                    </ul>
                                </>
                            ) : (
                                <>
                                    <h4 className="card-header">UserDashboard</h4>
                                    <li className="list-group-item">
                                        <Link className="nav-link" to="/cart">My cart</Link>
                                    </li>
                                    <li className="list-group-item">
                                        <Link className="nav-link" to={`/profile/update/${_id}`}>Update Profile</Link>
                                    </li>
                                </>
                            )
                        }
                    />

                </div>
            </>
        )
    }
    const userInfo = () => {
        return (
            <div className="card mb-5">
                <h3 className="card-header">User Information</h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        {name}
                    </li>
                    <li className="list-group-item">
                        {email}
                    </li>
                    <li className="list-group-item">
                        {role === 1 ? 'Admin' : 'Register user'}
                    </li>
                </ul>
            </div>
        )
    }
    const purchaseHistory = () => {
        return (
            <div className="card mb-5">
                <h3 className="card-header">Purschase history</h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        Name
                    </li>
                    <li className="list-group-item">
                        Email
                    </li>
                    <li className="list-group-item">
                        Role
                    </li>
                </ul>
            </div>
        )
    }
    return (
        <div>

            <div className="row">
                <div className="col-3">
                    {userLinks()}
                </div>
                <div className="col-9">
                    {userInfo()}
                    {purchaseHistory()}
                </div>
            </div>

        </div>
    )
}

export default UserDashboard
