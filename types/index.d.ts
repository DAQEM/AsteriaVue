export { HttpMethod };

declare global {
  type User = {
    id: number;
    name: string;
    bio: string;
    email: string;
    image?: string;
    role: string;
    joined: number;
    last_active: number;
  };

  type Project = {
    id: number;
    name: string;
    summary: string;
    description: string;
    slug: string;
    image_url: string;
    banner_url: string;
    downloads: number;
    git_hub_url: string;
    curse_forge_id: string;
    curse_forge_url: string;
    modrinth_id: string;
    modrinth_url: string;
    type: string;
    categories: string[];
    loaders: string[];
    users: User[];
  };

  type ProjectCategory = {
    id: number;
    name: string;
    slug: string;
    meta_title: string;
    content: string;
  };
}
