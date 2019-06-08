import React from 'react'
import { connect } from 'react-redux'
import { call_movie_api,call_movie_filter_api } from '../src/action/moviesaction'
import MovieCardsLayout from '../src/components/moviecard'

class App extends React.Component{

  constructor(props)
  {
    super(props)
    this.state = {
      search: '',
      filteredMovies: []
  }
  }
  handleSearch = (search) => {
    console.log(search,"props movies")
      this.setState(()=> ({
        filteredMovies : this.props.movies.filter(movie => (movie.title.toLowerCase().includes(search.toLowerCase() ))) 
      }))
  }
  handleChange = (e) => {
    const search = e.target.value
    this.setState(() => ({search })) 
    this.handleSearch(search)
}
handleGenre=(e) => {
  const param = e.target.value
  this.props.dispatch(call_movie_filter_api(`filter={"genre":"${param}"}`))
}
handleYear=(e) => {
  const yearParam = e.target.value
  this.props.dispatch(call_movie_filter_api(`key=${yearParam}`))
}
handleClear=(e) => {
  this.props.dispatch(call_movie_api())
}
componentDidMount()
{
 this.props.dispatch(call_movie_api())
}
  render()
  {
  return (
  <div className="container">
    <div className="row">
         <div className="col-md-11 offset-2">
          <h1>Movie Search App</h1> 
          </div>
          <div className = "row mb-4">
            <div className="col-md-2">
                <span>
                <input type="checkbox" className="custom-control-input" id="clearall" value="clear" onChange={this.handleClear}></input>
                <label className="custom-control-label" htmlFor="clearall">Clear All</label>
                </span>
            </div>
            <div className = "col-md-10">
                  <span>
                  <form>
                    <input type="text" placeholder = "search by movie name " value ={this.state.search} onChange={ this.handleChange} />
                    <br/>
                  </form>
                 </span>
           </div>
           </div>
           <div className="row mb-4">
             <div className="col-md-2">
               <span>
                  <h2>Genre </h2>
                  <div className="custom control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="customCheck1" value="Drama" onChange={this.handleGenre}></input>
                  <label className="custom-control-label" htmlFor="customCheck1">Drama</label>
                  </div>
                  <div className="custom control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="customCheck2" value="Romance" onChange={this.handleGenre}></input>
                  <label className="custom-control-label" htmlFor="customCheck2">Romance</label>
                  </div>
                  <div className="custom control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="customCheck3" value="Comedy" onChange={this.handleGenre}></input>
                  <label className="custom-control-label" htmlFor="customCheck3">Comedy</label>
                  </div>
                  <div className="custom control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="customCheck4" value="Sci-fi" onChange={this.handleGenre}></input>
                  <label className="custom-control-label" htmlFor="customCheck4">Sci-fi</label>
                  </div>
                  <div className="custom control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="customCheck5" value="Fantasy" onChange={this.handleGenre}></input>
                  <label className="custom-control-label" htmlFor="customCheck5">Fantasy</label>
                  </div>
                  <div className="custom control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="customCheck6" value="Action" onChange={this.handleGenre}></input>
                  <label className="custom-control-label" htmlFor="customCheck6">Action</label>
                  </div>
                  <div className="custom control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="customCheck7" value="Thriller" onChange={this.handleGenre}></input>
                  <label className="custom-control-label" htmlFor="customCheck7">Thriller</label>
                  </div>                      
               </span>
               <h2>Year</h2>
               <div className="custom control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="customCheck8" value="2019" onChange={this.handleYear}></input>
                  <label className="custom-control-label" htmlFor="customCheck8">2019</label>
                  </div>
                  <div className="custom control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="customCheck9" value="2018" onChange={this.handleYear}></input>
                  <label className="custom-control-label" htmlFor="customCheck9">2018</label>
                  </div>
                  <div className="custom control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="customCheck10" value="2017" onChange={this.handleYear}></input>
                  <label className="custom-control-label" htmlFor="customCheck10">2017</label>
                  </div> 
              </div>
             <div className="col-md-10 ">
               <span>
               {this.state.filteredMovies.length == 0 ? 
               <div>
                 <h2>Total Results - {this.props.movies.length}  </h2> 
                  <MovieCardsLayout movies={this.props.movies} />
               </div> :
                  <div>
                  <h2>Total Results - {this.state.filteredMovies.length}  </h2> 
                  <MovieCardsLayout movies={this.state.filteredMovies} />
                  </div>
                }
                </span>
              </div>
           </div>
    </div>
  </div>
  )
}
}

const mapStateToProps = (state) => {
  console.log(state.movies,"state in app")
  if (state.movies ){
    return (
    { 
      movies: state.movies
    }
     )
 }
}  

export default connect(mapStateToProps)(App)