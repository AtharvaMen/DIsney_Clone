import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key="9ce024557226bffbd11e4d199ea0e6c5"
const getTrendingVideos = () => {
    return axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key);
};

export default {
    getTrendingVideos
}