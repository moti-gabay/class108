const API_URL = 'http://localhost:3003/';

export const TOKEN_KEY = "token";
//links
export const LINK_LIST_ROUTE = API_URL + "links/linksList";
export const LINK_INFO_ROUTE = API_URL + "links/linkInfo/";

export const ADD_LINK_ROUTE = API_URL + "links/addLink";
export const DELETE_LINK_ROUTE = API_URL + "links/"
export const EDIT_LINK_ROUTE = API_URL + "links/";

//category
export const CATEGORY_LIST_ROUTE = API_URL + "category/categoryList";
export const ADD_CATEGORY_ROUTE = API_URL + "category/addCategory";
export const DELETE_CATEGORY_ROUTE = API_URL + "category/"
export const EDIT_CATEGORY_ROUTE = API_URL + "links/";

export const LOGIN_REQ = API_URL + "users/login"
export const CHECK_TOKEN_ADMIN = API_URL + "users/checkAdminToken"