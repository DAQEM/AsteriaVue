import type { ComputedRef } from "vue";
import { computed } from "vue";

export const getPlayerCookie = (): ComputedRef<string | null | undefined> => {
  const cookie = useCookie("player");
  return computed(() => cookie.value ?? "true");
};

export const getAuthCookie = (): ComputedRef<string | null | undefined> => {
  const cookie = useCookie("hestia-auth-token");
  return computed(() => cookie.value ?? undefined);
};

export const setAuthCookie = (token: string) => {
  const cookie = useCookie("hestia-auth-token");
  cookie.value = token;
};
