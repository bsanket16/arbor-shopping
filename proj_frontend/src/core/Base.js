import React from 'react'
import Menu from './Menu'
import { FadeTransform } from 'react-animation-components'

const Base = ({
    title= '',
    description= '',
    className= 'bg-dark text-white p-4',
    children
}) => (
    <>
        <Menu />

        <>
        <FadeTransform
                in
                transformProps={{
                    exitTransform: 'translateY(20px)',
                    duration: 550
                }}
                fadeProps={{
                    enterOpacity: 1,
                    exitOpacity:0.1
                }}>

                    <img src="/logo.png" alt="" className='logo mb-4' width='75' height='75'/>

        </FadeTransform>

            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'translateY(4px)',
                    duration: 1000
                }}
                fadeProps={{
                    enterOpacity: 1,
                }} >

                     {/* <div className='jumbotron bg-dark text-white text-center'> */}
                    <h1 className='display-4 text-white text-center mb-3'>{ title }</h1>
                    <p className='lead text-white text-center'>{ description }</p>
                    {/* </div> */}
                    <div className={className}> {children} </div>
            </FadeTransform>

        </>

        {/* <footer className='footer bg-dark mt-auto py-3'>
            <p className="mt-5 mb-3 text-center text-muted">&copy;Arbor.</p>
        </footer> */}
    </>
)

export default Base