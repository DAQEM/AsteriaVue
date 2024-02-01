export const getUser = async (username: string): Promise<User | null> => {
  const response = await useFetchUser("/" + username, {
    method: HttpMethod.GET,
  });

  if (!response.ok) {
    return null;
  }

  return (await response.json()) as User;
};

export const updateUser = async (name: string, bio: string): Promise<User | null> => {
  const response = await useFetchUser("/", {
    method: HttpMethod.PUT,
    body: JSON.stringify({
      name,
      bio,
    }),
  });

  if (!response.ok) {
    return null;
  }

  return (await response.json()) as User;
};
