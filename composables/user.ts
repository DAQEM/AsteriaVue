export const getUser = async (username: string): Promise<User | null> => {
  const response = await useFetchUser("/" + username, {
    method: HttpMethod.GET,
  });

  if (!response.ok) {
    return null;
  }

  return (await response.json()) as User;
};
