import React from 'react'
import { connect } from 'react-redux'
import { call_movie_api } from '../src/action/moviesaction'


class App extends React.Component{

  constructor(props)
  {
    super(props)
    this.state = {
      search: ''
  }
  }
  handleSearch = (search) => {
    console.log(this.props.movies,"props movies")
    if ( this.props.movies )
    {
     this.props.movies.filter(movie => (movie.title.toLowerCase().includes(search.toLowerCase() ))) }
  }
  handleChange = (e) => {
    const search = e.target.value
    this.setState(() => ({search })) 
    this.handleSearch(search)
}
componentDidMount()
{
 this.props.dispatch(call_movie_api())
}
  render()
  {
  return (
    <div className="App">
         <h1>Movie search</h1>
         <form>
           <input type="text" placeholder = "search by movie name " value ={this.state.search} onChange={ this.handleChange} />
         </form>
    </div>
  )
}
}

const mapStateToProps = (state) => {
  console.log(state.movies,"state in app")
  if (state.movies ){
    let movies = {}
    return (
      {...movies,...state.movies} )
 }
}  

export default connect(mapStateToProps)(App)