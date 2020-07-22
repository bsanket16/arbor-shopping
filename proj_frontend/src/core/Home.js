import React from 'react'

import { API } from '../backend'
import '../styles.css'
import '../override.css'
import Base from './Base'

export default function Home() {

    console.log('API IS', API)

    return (
        
        <>
            <img src="/logo.png" alt="" className='logo mb-4' width='75' height='75'/>

            <Base title='Arbor.' description='[ Planting is a Treemendous Experience ]'>
            </Base>
        </>
    )
}
