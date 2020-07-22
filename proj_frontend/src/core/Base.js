import React from 'react'
import Menu from './Menu'

const Base = ({
    title= '',
    description= '',
    className= 'bg-dark text-white p-4',
    children
}) => (
    <>
        <Menu />

        <>
            {/* <div className='jumbotron bg-dark text-white text-center'> */}
                <h1 className='display-4 text-white text-center mb-3'>{ title }</h1>
                <p className='lead text-white text-center'>{ description }</p>
            {/* </div> */}
            <div className={className}> {children} </div>
        </>

        {/* <footer className='footer bg-dark mt-auto py-3'>
            <p className="mt-5 mb-3 text-center text-muted">&copy;Arbor.</p>
        </footer> */}
    </>
)

export default Base