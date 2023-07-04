import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className='my-4'>

        <div className="card" >
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-primary" style={{left: "90%", zIndex: "1"}}>{source}</span>
          <img src={imageUrl ? imageUrl : "https://cdn.vox-cdn.com/thumbor/XaxJwnix82bPV_phc9XFYMoa6nY=/0x0:2560x1440/1200x628/filters:focal(1280x720:1281x721)/cdn.vox-cdn.com/uploads/chorus_asset/file/24705277/apple_vision_pro_screen_113.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By <strong className='text-primary'>{author ? author : "Unknown"}</strong><br/> Updated on {new Date(date).toUTCString()}</small></p>
            <a href={newsUrl} target='blank' className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}
