export { HttpMethod };

declare global {
  type User = {
    id: string;
    username: string;
    email: string;
    image: string;
  };
}
