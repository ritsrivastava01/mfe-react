import React from 'react'
import ReactDom from 'react-dom'
import App from './App'

const mount=(el)=>{
    ReactDom.render(
        <App></App>,
        el
    )
}

if(process.env.NODE_ENV==='development'){
    const el= document.querySelector('#_marking-dev-root');
    el && mount(el);
}
export {mount};