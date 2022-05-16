export interface User {
  name: {
    first: string;
    last: string;
    title: string;
  };
  email: string;
  cell: string;
  phone: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}
