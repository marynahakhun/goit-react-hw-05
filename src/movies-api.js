import axios from "axios";
axios.defaults.baseURL = 'https://api.themoviedb.org'
axios.defaults.headers.common['Authorization'] =       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzA4YWVlZThjNjgxNWU4MWI0NzA0YmJlODExY2VkMyIsInN1YiI6IjY2M2EzYTRmNTQ1MDhkMDEyNWQzZDYwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PpeTnacJLevX5cCgmhhJNJvZ7LBE8EIHo6EMapOtGDI'

const options = {
  params: {
    include_adult: false,
    language: 'en-US',
    page: 1,
  },

  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzA4YWVlZThjNjgxNWU4MWI0NzA0YmJlODExY2VkMyIsInN1YiI6IjY2M2EzYTRmNTQ1MDhkMDEyNWQzZDYwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PpeTnacJLevX5cCgmhhJNJvZ7LBE8EIHo6EMapOtGDI',
  },
};
export const getMovies = async () => {
    const response = await axios.get("/3/trending/movie/week", options)
    console.log(response.data.results)
    return response.data.results
}
export const getMovieById = async(movieId)=>{
    const resp = await axios.get(`/3/movie/${movieId}?language=en-US`);
    return resp.data
}
export const getMovieCredits = async(movieId)=>{
    const resp = await axios.get(`/3/movie/${movieId}/credits?language=en-US`);
    return resp.data
}

export const getMovieReview = async(movieId) =>{
    const resp = await axios.get(`/3/movie/${movieId}/reviews?language=en-US&page=1`);
    return resp.data
}
export const getMoviesByQuery = async(query) =>{
    const resp = await axios.get(`/3/search/movie?include_adult=false&language=en-US&`,
    {params: {
        query,
    }}
    );
    return resp.data
}