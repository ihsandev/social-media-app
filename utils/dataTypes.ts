// USERS 
export interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    Ing: string;
  }
}

export interface IUserType {
    id: number;
    name: string;
    username: string;
    email: string;
    address: IAddress;
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    }
}

export interface IActionUser { 
  type?: string; user?: IUserType[]; 
}

//POSTS
export interface IListPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface IActionPost { 
  type?: string; 
  posts?: IListPosts[];
  start?: number;
  post?: IListPosts;
  id?: number;
  comment?: IComment[]
  newPost?: IListPosts;
}

export interface IPostData {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface IListAlbums {
  userId: number;
  id: number;
  title: string;
}

export interface IDataAlbums {
  total_data: number;
  data: IListAlbums[]
}

export interface IActionAlbums {
  type?: string; 
  albums?: IListAlbums[];
  photos?: IListPhotos[]
}

export interface IListPhotos {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}