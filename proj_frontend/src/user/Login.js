import React from 'react';
import Menu from '../core/Menu'

const Login = () => {

    const signInForm = () => {
        return (
            <>
                <Menu />

                <div className="container">

                    <div className="card mt-5">
                        <div className="card-body m-0 p-0">
                        <div className="row no-gutters">
                        <div className="col-4 offset-2 my-auto">
                            <form className="form-signin" autoComplete='off'>
                            <h1 className='display-4 mb-5 text-dark text-center'>Login</h1>
                            
                                <div className="form-label-group">
                                    <input type="email" id="inputEmail" className="form-control" placeholder='Email' required autoFocus/>
                                    <label htmlFor="inputEmail">Email</label>
                                </div>
                                
                                <div className="form-label-group">
                                <input type="password" id="inputPassword" className="form-control mt-1" placeholder='Password' required/>
                                <label htmlFor="inputPassword">Password</label>
                                </div>

                                <div className="checkbox mb-2 mt-3 text-left text-muted">
                                    <label>
                                        <input type="checkbox"/> Keep me logged in
                                    </label>
                                </div>

                                
                                <button href='/' className="btn btn-lg btn-success btn-block" type='submit'> Log In </button>
                                
                            </form>
                        </div>

                        <div className="col-4 ml-auto">
                            <div className="not-signed-up"></div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </>
        )
    }

    return(
        signInForm()
    )
}

export default Login