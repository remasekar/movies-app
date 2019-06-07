import React from 'react'

const MovieTable = (props) => {

    return(
        <div>
           < table border = "1" >
               <thead>
                   <tr>
                       <th>Movie Title</th>
                       <th>Director </th>
                       <th>Year</th>
                       <th> Genre </th>
                   </tr>
               </thead> 
               <tbody>
                   {props.movies.map( movie => {
                       return (
                        <tr key={movie.id}>
                       <td>{movie.title}</td>
                       <td> {movie.director}</td>
                       <td>{movie.year}</td>
                       <td>{movie.genre}</td>
                       </tr>
                       )
                   }) }
               </tbody>  
           </table>
        </div>
    )
}

export default MovieTable