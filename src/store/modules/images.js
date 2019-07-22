import api from "../../api";

const actions = {
  //Service to fetch image
  async fetchUnsplashPhotos({ rootState }, { bearerToken, client_id }) {
    const unsplashPhotosResponse = await api.getPhotos(
      rootState.$appConfig,
      { bearerToken, client_id }
    );
    console.log(unsplashPhotosResponse);
    return unsplashPhotosResponse;
  }
};

export default {
  namespaced: true,
  actions
};
