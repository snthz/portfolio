import React, { Component } from 'react'
import './banner.css'

export default class Banner extends Component {
  render() {
    return (
      <>
      <div className='banner-container'>
        <div className='banner-image'></div>
        <div className='banner-content'>
            <div className='banner-text'>
                <h1>Hola, soy Axl</h1>
                <span>Desarrollador Web</span>
                <button>About</button>
            </div>
            
        </div>
      </div>
        
      </>
    )
  }
}
