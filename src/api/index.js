/**
 * backend service apis
 */
import axios from "axios";

export default {
  // get photos
  getPhotos(baseURL, { client_id }) {
    return axios.get(`${baseURL}photos/?client_id=${client_id}`);
  },
};
