import React from 'react'
import Menu from './Menu'

const Base = ({
    title= 'My Title',
    description= 'My description',
    className= 'bg-dark text-white p-4',
    children
}) => (
    <>
        <Menu />

        <img src="logo.png" alt="" className='logo' width='150' height='150'/>


        <div className='container-fluid'>
            <div className='jumbotron bg-dark text-white text-center'>
                <h1 className='display-4'>{ title }</h1>
                <p className='lead'>{ description }</p>
            </div>
            <div className={className}> {children} </div>
        </div>

        <footer className='footer bg-dark mt-auto py-3'>
            <p className="mt-5 mb-3 text-center text-muted">&copy;Arbor.</p>
        </footer>
    </>
)

export default Base