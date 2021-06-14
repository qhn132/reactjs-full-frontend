import React from 'react'
import { useHistory } from 'react-router-dom'
import { isAuthenticated, signOut } from '../auth/index'

const HeaderAdmin = () => {
  const { user } = isAuthenticated()
  const history = useHistory()
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light py-3 px-lg-0">
        <a className="navbar-brand" href="/">
          <span className="font-weight-bold text-uppercase text-white">Boutique Shop</span>
        </a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a className="nav-link " id="pagesDropdown" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={() => {
                  signOut(() => {
                    history.push('/')
                  })
                }}>Logout</a>
              {/* <div className="dropdown-menu mt-3" aria-labelledby="pagesDropdown">
                <a className="dropdown-item border-0 transition-link" href="">Profile</a>
                <a className="dropdown-item border-0 transition-link" >Logout</a>
              </div> */}
            </li>
          </ul> 
        </div>
      </nav>

    </div>
  )
}

export default HeaderAdmin;
