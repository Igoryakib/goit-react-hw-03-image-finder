import axios from "axios";
axios.defaults.baseURL = "https://pixabay.com/api/";

const getImageApi = (query, page) => {
  return axios
    .get(`?q=${query}&page=${page}&key=22109359-3adbb821e95063555b380e03c&image_type=photo&orientation=horizontal&per_page=12`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export default getImageApi;
