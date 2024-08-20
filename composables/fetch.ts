export const useFetchAuthentication = (url: string, options: HttpOptions) => {
    return useFetchHestia("/api/v1/authentication" + url, options);
};

export const useFetchUser = (url: string, options: HttpOptions) => {
    return useFetchHestia("/api/v1/user" + url, options);
};

export const useFetchProject = (url: string, options: HttpOptions) => {
    return useFetchHestia("/api/v1/project" + url, options);
};

export const useFetchProjectCategory = (url: string, options: HttpOptions) => {
    return useFetchHestia("/api/v1/projectcategory" + url, options);
};

export const useFetchHestia = (url: string, options: HttpOptions) => {
    return useBaseFetch(getHestiaUrl() + url, options);
};

export const useBaseFetch = async (url: string, options: HttpOptions) => {
    const response = await fetch(url, {
        method: options.method ?? HttpMethod.GET,
        headers: {
            "Content-Type":
                options.headers?.["Content-Type"] ?? ContentType.JSON,
            Authorization:
                options.headers?.Authorization ??
                getAuthCookie().value ??
                "none",
        },
        body: options.body,
    });

    console.log(response);

    return response;
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
