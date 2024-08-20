export const getFeaturedProjects = async (): Promise<Project[] | null> => {
  const response = await useFetchProject("?isFeatured=true", {
    method: HttpMethod.GET,
  });

  if (!response.ok) {
    return null;
  }

  return (await response.json()).data as Project[];
};

export const getFilteredProjects = async (
  query?: string,
  page?: number,
  isFeatured?: boolean,
  categories?: string[],
  loaders?: string[],
  types?: string[],
  order: string = "relevance"
): Promise<Project[]> => {
  let url = "?";

  if (query) {
    url += `query=${query}`;
  }

  if (page) {
    url += `&page=${page}`;
  }

  if (isFeatured) {
    url += `&isFeatured=${isFeatured}`;
  }

  if (categories && categories.length > 0) {
    categories.forEach((c) => {
      url += `&categories=${c}`;
    });
  }

  if (loaders && loaders.length > 0) {
    loaders.forEach((l) => {
      url += `&loaders=${l}`;
    });
  }

  if (types && types.length > 0) {
    types.forEach((t) => {
      url += `&types=${t}`;
    });
  }

  if (order) {
    url += `&order=${order}`;
  }

  const response = await useFetchProject(url, {
    method: HttpMethod.GET,
  });

  if (!response.ok) {
    return [];
  }

  return (await response.json()).data as Project[];
};
