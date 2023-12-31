import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { TOKEN_KEY } from "../constants/url";

// Define the type for the function's parameters
interface ApiRequestParams {
  url: string;
  method: string;
  bodyData?: object;
}

// Define the type for the response
interface ApiResponse<T = any> {
  data: T;
  // Add other properties as needed
}

// Define the function with TypeScript
export const apiRequest = async <T,>({
  url,
  method,
  bodyData,
}: ApiRequestParams): Promise<ApiResponse<T>> => {
  const config: AxiosRequestConfig = {
    url,
    method,
    data: JSON.stringify(bodyData),
    headers: {
      "Content-Type": "application/json",
      "x-api-key": localStorage.getItem(TOKEN_KEY) || "",
    },
  };

  try {
    const response: AxiosResponse<T> = await axios(config);
    return { data: response.data };
  } catch (error) {
    // You might want to handle different types of errors here
    throw error;
  }
};
