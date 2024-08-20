export const getCategories = async (): Promise<ProjectCategory[]> => {
  const response = await useFetchProjectCategory("/", {
    method: HttpMethod.GET,
  });

  if (!response.ok) {
    return [];
  }

  return (await response.json()) as ProjectCategory[];
};
