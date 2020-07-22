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
                    <Link to='/' className='text-white'>
                        Arbor.
                    </Link>
                </span>

                <ul className="nav bg-dark">
                    <li className="nav-item">
                        <Link style={currentTab(history, '/')} className='nav-link' to='/'>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link style={currentTab(history, '/a')}  className='nav-link' to='/'>
                            Pricing    
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link style={currentTab(history, '/b')}  className='nav-link' to='/'>
                            Blog    
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link style={currentTab(history, '/user/dashboard')}  className='nav-link' to='/user/dashboard'>
                            Dashboard
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link style={currentTab(history, '/c')}  className='nav-link' to='/'>
                            Contact
                        </Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link style={currentTab(history, '/admin/dashboard')}  className='nav-link' to='/admin/dashboard'>
                            A. Dashboard
                        </Link>
                    </li> */}

                    {/* {!isAuthenticated() && (
                        <>
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
                        </>
                    )}                 */}

                    {isAuthenticated() && (
                        <li className="nav-item">
                            <span className='nav-link' onClick={() => {
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