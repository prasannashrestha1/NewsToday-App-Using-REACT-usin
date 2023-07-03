import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'


export default class News extends Component {
  static defaultProps ={
    country: 'us',
    pageSize: 10,
    // category: general,
  }
  
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

    articles =  []

    constructor() {
        super();
        console.log('This is an constructor');
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1

        }
    }

    async componentDidMount() {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a3bec8bf6014470da25c6c6633d4bf16&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading: true})
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        articles: parsedData.articles, 
        totalResults: parsedData.totalResults,
        loading: false
      })
    }
    
    handlePrevClick = async() => {
      console.log('prev');
    

      
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a3bec8bf6014470da25c6c6633d4bf16&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true})
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);

      this.setState(
        {
         page: this.state.page - 1,
         articles: parsedData.articles,
         loading: false

        }
      )
    
    }

     handleNextClick = async () => {
      console.log('next');
      if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

      }
      else{
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a3bec8bf6014470da25c6c6633d4bf16&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true})
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);

      this.setState(
        {
         page: this.state.page + 1,
         articles: parsedData.articles,
         loading: false
        }
      
      )}
    }
  render() {
    return (
      <>
      <div className='container my-3'>
        
        <h2 style={{margin: '30px 0px'}}>NewsToday- Fresh International News</h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return  <div className="col-md-4" key = {element.url}>
            <NewsItem  title = {element.title?element.title.slice(0, 60): ""} description = {element.description?element.description.slice(0, 90): ""} imageUrl = {element.urlToImage}
            newsUrl = {element.url} />
            </div>
          })}
        </div>
        <div className='container d-flex justify-content-between'>
        <button disabled={this.state.page <=1} type="button" className="btn btn-light" onClick={this.handlePrevClick}>Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next</button>

        </div>
      </div>
      </>
    )
  }
}
