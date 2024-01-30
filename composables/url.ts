export const getHestiaUrl = (): string => {
  const hestiaUrl = useRuntimeConfig().hestiaUrl;
  return hestiaUrl ?? "http://localhost:5000";
};

export const getAsteriaUrl = (): string => {
  const asteriaUrl = useRuntimeConfig().asteriaUrl;
  return asteriaUrl ?? "http://localhost:3000";
};
