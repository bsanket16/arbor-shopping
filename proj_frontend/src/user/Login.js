import React, { useState } from 'react';
import Menu from '../core/Menu'
import { Link, Redirect } from 'react-router-dom'
import { login, authenticate, isAuthenticated} from '../auth/helper';

const Login = () => {

    const [ values, setValues ] = useState({
        email: 'sanket@gmail.com',
        password: 'sanket',
        error: '',
        loading: false,
        didRedirect: false
    })

    const { email, password, error, loading, didRedirect } = values

    const { user } = isAuthenticated()

    const handleChange = name => event => {
        setValues({ ...values, error:false, [name]:event.target.value })
    }

    const onSubmit = event => {     
        event.preventDefault()
        setValues({...values, error: false, loading: false})
        login({email, password})
        .then((data) => {
            if(data.error){
                setValues({...values, error:data.error, loading: false})
            }
            else{
                authenticate(data, () => {
                    setValues({...values,
                        email: '',
                        password: '',
                        error: '',
                        loading: true,
                        didRedirect: true})
                })
            }
        })
        .catch((err) => {
            console.log('Login Request Failed')
        })
    }

    const performRedirect = () => {
        if(didRedirect){
            if(user && user.role === 1) {
                return <Redirect to='/admin/dashboard' />
            }
            else{
                return <Redirect to='/user/dashboard' />
            }
        }
        if(isAuthenticated()){
            return <Redirect to='/' />
        }
    }

    const loadingMsg = () => {
        return (
            loading && (
                <div className="container alert alert-info">
                    Loading...
                </div>
            )
        )
    }

    const errorMsg = () => {
        return (
                <div className="container alert alert-danger" style={{display: error ? "" : "none"}}>
                    { error }
                </div>
        )
    }

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
                            <h1 className='display-4 mt-3 mb-5 text-dark text-center'>Login</h1>
                            
                                <div className="form-label-group shadow-sm rounded">
                                    <input value={ email } type="email" id="inputEmail" className="form-control" 
                                    placeholder='Email' required autoFocus onChange={ handleChange("email") } />
                                    <label htmlFor="inputEmail">Email Id</label>
                                </div>
                                
                                <div className="form-label-group shadow-sm rounded">
                                <input value={ password } type="password" id="inputPassword" className="form-control mt-1" 
                                placeholder='Password' required onChange={ handleChange("password") } />
                                <label htmlFor="inputPassword">Password</label>
                                </div>
                                
                                <button onClick={onSubmit} href='/' className="btn btn-lg btn-success mt-4 mb-2 btn-block shadow-sm rounded" type='submit'> Log In </button>
                                
                                {errorMsg()}
                                {loadingMsg()}  

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
        <>
            {signInForm()}
            {performRedirect()}
            {/* <p className="text-white text-center">{ JSON.stringify( values ) }</p> */}
        </>
    )
}

export default Login