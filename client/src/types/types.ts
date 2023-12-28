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
