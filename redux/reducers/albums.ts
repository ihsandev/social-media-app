import { IActionAlbums, IDataAlbums, IListPhotos } from "../../utils/dataTypes";

export const GET_ALBUMS = "GET_ALBUMS";
const SET_ALBUMS = "SET_ALBUMS";

export const getAlbums = () => ({
  type: GET_ALBUMS
});

export const setAlbums = (albums: IDataAlbums) => ({
  type: SET_ALBUMS,
  albums
});

export const GET_PHOTOS = "GET_PHOTOS";
const SET_PHOTOS = "SET_PHOTOS";

export const getPhotos = () => ({
  type: GET_PHOTOS
});

export const setPhotos = (photos: IListPhotos) => ({
  type: SET_PHOTOS,
  photos
});

const initialState = {
  albums: {},
  photos: []
};

const rootReducer = (state = initialState, action: IActionAlbums) => {
  switch (action.type) {
    case SET_ALBUMS:
      const { albums } = action;
      return { ...state, albums };
    case SET_PHOTOS:
      const { photos } = action;
      return { ...state, photos };
    default:
      return state;
  }
};

export default rootReducer;
