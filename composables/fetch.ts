export const useFetchAuthentication = (url: string, options: HttpOptions) => {
  return useFetchHestia("/api/v1/authentication" + url, options);
};

export const useFetchUser = (url: string, options: HttpOptions) => {
  return useFetchHestia("/api/v1/user" + url, options);
};

export const useFetchHestia = (url: string, options: HttpOptions) => {
  return useBaseFetch(getHestiaUrl() + url, options);
};

export const useBaseFetch = (url: string, options: HttpOptions) => {
  console.log("Fetching:", url, options);
  return fetch(url, {
    method: options.method ?? HttpMethod.GET,
    headers: {
      "Content-Type": options.headers?.["Content-Type"] ?? ContentType.JSON,
      Authorization:
        options.headers?.Authorization ?? getAuthCookie().value ?? "none",
    },
    body: options.body,
  });
};

export enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export enum ContentType {
  JSON = "application/json",
}

export type HttpOptions = {
  method: HttpMethod;
  headers?: {
    "Content-Type"?: ContentType;
    Authorization?: string | null | undefined;
  };
  body?: string;
};
