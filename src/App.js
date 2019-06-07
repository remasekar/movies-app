import React from 'react'
import { connect } from 'react-redux'
import { call_movie_api } from '../src/action/moviesaction'
import MovieTable from '../src/components/movietable'


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
componentWillMount()
{
 this.props.dispatch(call_movie_api())
}
  render()
  {
  return (
  <div className="container">
    <div className="row">
         <div className="col-md-10 offset-2">
          <h1>Movie Search App</h1>
          <div className = "row mb-4">
            <div className = "col-md-1">
             <form>
              <input type="text" placeholder = "search by movie name " value ={this.state.search} onChange={ this.handleChange} />
               <br/>
           </form>
           </div>
           </div>
           <div className="row mb-4">
             <div className="col-md-2">
               <span>
                  <h2>Genre </h2>
                  <form>
                  
                  </form>
               </span>
               <h2>Year</h2>
             </div>
             <div className="col-md-10 ">
               <span>
               { (this.props.movies.length !== 0 && 
                 this.state.filteredMovies == 0 ) &&
                <div>
                  <h2>List - {this.props.movies.length }</h2>
                  <MovieTable movies={this.props.movies} />
                </div>
               }
               {this.state.filteredMovies !== 0 && 
                  <div>
                  <h2>List - {this.state.filteredMovies.length}  </h2> 
                  <MovieTable movies={this.state.filteredMovies}/>
                  </div>
                }
                </span>
              </div>
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