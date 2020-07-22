import React from 'react'

import { API } from '../backend'
import '../styles.css'
import '../override.css'
import Base from './Base'

export default function Home() {

    console.log('API IS', API)

    return (
        
        <>
            <Base title='Arbor.' description='[ Planting is a Treemendous Experience ]'>
            </Base>
        </>
    )
}
