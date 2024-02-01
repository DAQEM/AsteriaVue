export { HttpMethod };

declare global {
  type User = {
    id: string;
    name: string;
    bio: string;
    email: string;
    image?: string;
    role: string;
    joined: number;
    last_active: number;
  };
}
