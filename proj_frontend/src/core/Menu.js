import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { logout, isAuthenticated } from '../auth/helper/index'

const currentTab = (history, path) => {
    if(history.location.pathname === path){
        return { color : '#2ecc72' }
    }
    else{
        return { color : '#e3e3e3' }
    }
}

const Menu = ({ history }) => (
    <>
        <nav className="navbar navbar-dark fixed-top bg-dark text-white">
            <div className="container">
                <span className="navbar-brand">
                        Arbor.
                </span>

                <ul className="nav bg-dark">
                    <li className="nav-item">
                        <Link style={currentTab(history, '/')} className='nav-link' to='/'>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link style={currentTab(history, '/cart')}  className='nav-link' to='/cart'>
                            Cart
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link style={currentTab(history, '/user/dashboard')}  className='nav-link' to='/user/dashboard'>
                            Dashboard
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link style={currentTab(history, '/admin/dashboard')}  className='nav-link' to='/admin/dashboard'>
                            Admin
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link style={currentTab(history, '/signup')}  className='nav-link' to='/signup'>
                            Signup
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link style={currentTab(history, '/login')}  className='nav-link' to='/login'>
                            Login
                        </Link>
                    </li>                    

                    {isAuthenticated() && (
                        <li className="nav-item">
                            <span className='nav-link text-warning' onClick={() => {
                                logout(() => {
                                    history.push('/')
                                })
                            }}> 
                                Logout
                            </span>
                        </li>
                    )}

                </ul> 

            </div>
        </nav>

    </>
)

export default withRouter(Menu)