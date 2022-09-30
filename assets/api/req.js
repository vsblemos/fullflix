import axios from "axios";

const api = axios.create({
    baseURL:"https://api.themoviedb.org/3/movie/popular?api_key=c664df24fdd651ca3bba98c0db5f5499"
})

export default api;

// const apiUrl ='https://api.themoviedb.org/3'
// const apiKey = "c664df24fdd651ca3bba98c0db5f5499"

// export function getPoularMovies(){
//     return axios.get(`${apiUrl}/movie/popular?api_key=${apiKey}`)
// }

// export function getMovieDetail(id){
//     return axios.get(`${apiUrl}/movie/${id}?api_key=${apiKey}`)

// }
