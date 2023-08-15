import axios from "axios";
import config from "config";

// missing the url for the server to work with on this project
// the url should be in "config.json" file
// axios.defaults.baseURL = config.apiUrl

const httpService = {
  get: axios.get,
  post: axios.post,
  patch: axios.patch,
  delete: axios.delete,
  put: axios.put,
};

export default httpService;
