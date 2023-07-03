import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <>
        <h1 className='text-center'><img src={loading} alt='loading' className='text-center'/>
        </h1>
        </> 
      
    )
  }
}

export default Spinner
