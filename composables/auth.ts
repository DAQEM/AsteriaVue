import { getHestiaUrl } from "./url";

export const getAuth = async () => {
  const auth: Ref<{ user: User | null }> = useState("auth", () => ({
    user: null,
  }));

  if (!auth.value.user && getAuthCookie()) {
    auth.value = await initAuth();
  }

  return auth;
};

export const initAuth = async () => {
  const auth: { user: User | null } = {
    user: null,
  };

  auth.user = await getMe();

  return auth;
};

export const getBaseAuthenticationUrl = (): string => {
  return getHestiaUrl() + "/api/v1/authentication";
};

export const getLoginUrl = (provider: string, returnUrl: string): string => {
  return `${getBaseAuthenticationUrl()}/login/${provider}?returnUrl=${returnUrl}`;
};

export const getLogoutUrl = (returnUrl: string): string => {
  return `${getBaseAuthenticationUrl()}/logout?returnUrl=${returnUrl}`;
}

export const getMe = async (): Promise<User | null> => {
  const cookie = getAuthCookie().value;
  const response = await useFetchAuthentication("/me", {
    method: HttpMethod.GET,   
    headers: {
      Authorization: cookie,
    },
  });

  if (!response.ok) {
    return null;
  }

  const data = await response.json();

  return data;
};
