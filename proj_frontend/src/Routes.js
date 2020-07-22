import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import Home from './core/Home'
import Signup from './user/Signup'
import Login from './user/Login'

import AdminRoutes from './auth/helper/AdminRoutes'
import PrivateRoutes from './auth/helper/PrivateRoutes'

import UserDashBoard from './user/UserDashBoard'
import AdminDashBoard from './user/AdminDashBoard'


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={ Home } />
                <Route path='/signup' exact component={ Signup } />
                <Route path='/login' exact component={ Login } />
                <PrivateRoutes path='/user/dashboard' exact component={ UserDashBoard } />
                <AdminRoutes path='/admin/dashboard' exact component={ AdminDashBoard } />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes