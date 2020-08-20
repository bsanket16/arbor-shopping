import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { logout, isAuthenticated } from '../auth/helper/index'

const currentTab = (history, path) => {
    if(history.location.pathname === path){
        return { color : '#A9A9A9' }
    }
    else{
        return { color : '#A9A9A9' }
    }
}

const Menu = ({ history }) => (
    <>
        <nav className="navbar navbar-light fixed-top bg-white shadow-sm">
            <div className="container-fluid">
                <span className="navbar-brand">
                    <Link to='/' className='text-dark'>
                        Arbor.
                    </Link>
                </span>

                <ul className="nav">

                    <li className="nav-item">
                        <Link style={currentTab(history, '/')} className='nav-link' to='/'>
                            <i className="las la-seedling la-lg"></i>    
                        </Link>
                    </li>

                    {!isAuthenticated() && (
                        <>
                            <li className="nav-item">
                                <Link style={currentTab(history, '/user/dashboard')}  className='nav-link' to='/user/dashboard'>
                                    <i className="las la-user la-lg"></i>   
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link style={currentTab(history, '/login')}  className='nav-link' to='/login'>
                                    <i className="las la-sign-in-alt la-lg"></i>  
                                </Link>
                            </li>
                        </>
                    )}

                    {isAuthenticated() && isAuthenticated().user.role === 0 && (
                        <>

                            <li className="nav-item">
                                <Link style={currentTab(history, '/')}  className='nav-link' to='/'>
                                    <i className="las la-shopping-bag la-lg"></i>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link style={currentTab(history, '/user/dashboard')}  className='nav-link' to='/user/dashboard'>
                                    <i className="las la-user la-lg"></i>   
                                </Link>
                            </li>

                            <li className="nav-item">
                                <span className='nav-link' style={{color:'#A9A9A9', cursor:'pointer'}} onClick={() => {
                                    logout(() => {
                                        history.push('/')
                                    })
                                }}> 
                                    <i className="las la-sign-out-alt la-lg"></i> 
                                </span>
                            </li>
                        </>
                    )}

                    {isAuthenticated() && isAuthenticated().user.role === 1 && (
                        <>
                            <li className="nav-item">
                                <Link style={currentTab(history, '/')} className='nav-link' to='/'>
                                    <i className="las la-comment-alt la-lg"></i>    
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link style={currentTab(history, '/admin/dashboard')}  className='nav-link' to='/admin/dashboard'>
                                    <i className="las la-user la-lg"></i>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <span className='nav-link' style={{color:'#A9A9A9', cursor:'pointer'}} onClick={() => {
                                    logout(() => {
                                        history.push('/')
                                    })
                                }}> 
                                    <i className="las la-sign-out-alt la-lg"></i> 
                                </span>
                            </li>
                        </>
                    )}

                </ul> 

            </div>
        </nav>

    </>
)

export default withRouter(Menu)