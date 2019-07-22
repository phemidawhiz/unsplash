import api from "../../api";

const actions = {
  //Service to fetch image
  async fetchUnsplashPhotos({ rootState }, { client_id }) {
    const unsplashPhotosResponse = await api.getPhotos(
      rootState.$baseURI,
      { client_id }
    );
    return unsplashPhotosResponse;
  }
};

export default {
  namespaced: true,
  actions
};
