import React from 'react'
import MenuEnlaces from './MenuEnlaces'
import '../estilosgenerales.css'
import './header.css'
import Login from './Login'
const Enca = () => {
  return (<>
    <div className='header oro100'>
        <div className='oro100'>Portal de eventos</div>
    <MenuEnlaces />
    <Login />
    </div>
    </>
  )
}

export default Enca