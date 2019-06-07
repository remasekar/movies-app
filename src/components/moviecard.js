import React from 'react'

const MovieCardsLayout = (props) => {

    return (
        props.movies.map(movie => {
           return (
            <div className="card-deck">
            <div className="card">
                 <div className="card-body">
                 <h5 className="card-title">{movie.title}</h5>
                 <p className="card-text">{movie.description}</p>
                 <p className="card-text"><small className="text-muted">{movie.director}{movie.year} {movie.genre}</small></p>
                 </div>
            </div>
         </div>
           )
        }
    )
  )
}

export default MovieCardsLayout