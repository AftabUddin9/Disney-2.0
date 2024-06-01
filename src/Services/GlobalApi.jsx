import axios from "axios";

const movieBaseUrl = "http://api.themoviedb.org/3"
const api_key = "8eb5006886c336e696cca48617d2c2d7"
//https://api.themoviedb.org/3/trending/all/day?api_key=8eb5006886c336e696cca48617d2c2d7
const getTrendingVideos = axios.get(movieBaseUrl + "/trending/all/day?api_key=" + api_key);

export default { getTrendingVideos }