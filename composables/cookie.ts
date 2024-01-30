import type { ComputedRef } from "vue";
import { computed } from "vue";

export const getPlayerCookie = (): ComputedRef<string | null | undefined> => {
  const cookie = useCookie("player");
  return computed(() => cookie.value ?? "true");
};

export const getAuthCookie = (): ComputedRef<string | null | undefined> => {
  const cookie = useCookie(".AspNetCore.Cookies");
  return computed(() => cookie.value ?? undefined);
};
