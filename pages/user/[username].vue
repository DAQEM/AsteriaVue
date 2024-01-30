<template>
  <div></div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";

const route = useRoute();
const username: string = route.params.username as string;

const user: User | null = await getUser(username);

if (!user) {
  throw createError({
    fatal: true,
    statusCode: 404,
    message: "User not found",
  });
}
</script>

<style></style>
