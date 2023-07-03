import React, { Component } from 'react'
import images from '../images/NewsToday.png'
import { Link } from 'react-router-dom'



export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
        <img src={images} alt="" className='logos'/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        <Link className="nav-link active" to="/business">Business</Link>
        <Link className="nav-link active" to="/entertainment">Entertainment</Link>
        <Link className="nav-link active" to="/sports">Sports</Link>
        <Link className="nav-link active" to="/general">General</Link>
        <Link className="nav-link active" to="/health">Health</Link>
        <Link className="nav-link active" to="/science">Science</Link>
        <Link className="nav-link active" to="/technology">Technology</Link>

      </div>
    </div>
  </div>
</nav>
      </div>
    )
  }
}
