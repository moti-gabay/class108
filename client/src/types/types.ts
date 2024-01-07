export interface Category {
  _id: string;
  name: string;
}
export interface Link {
  category: string;
  name: string;
  url: string;
  _id: string;
}

export type User = {
  name: string;
  password: string;
  id: number;
  role?: string;
};

export interface ApiRequestParams {
  url: string;
  method: string;
  bodyData?: object;
}

// Define the type for the response
export interface ApiResponse<T = any> {
  data: T;
  // Add other properties as needed
}