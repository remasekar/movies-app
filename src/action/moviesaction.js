import axios from 'axios'

export const filterwithkey = (values) => {
    return {
        type: 'FILTER_MOVIES',
        payload: values
    }
}

export const call_movie_filter_api =(param)=>
{
    return(dispatch) => {
        axios.get(`https://moviesearch2019.herokuapp.com/search?${param}`)
        .then(response =>
        {
            console.log(response.data,"response")
            const filterResults = response.data
            dispatch(filterwithkey(filterResults))
        })
    }
}
export const loadMovies = (values) => {
    return {
        type: 'LOAD_MOVIES',
        payload: values 
    }

}
export const call_movie_api = () =>
{
    return(dispatch) => {
        axios.get(`https://moviesearch2019.herokuapp.com/movies`)
        .then(response =>{
            console.log(response.data,"response")
            const loadResults = response.data
            dispatch(loadMovies(loadResults))
        })

    }
}
