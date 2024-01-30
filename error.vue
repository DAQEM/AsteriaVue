<template>
  <NuxtLayout>
    <div class="max-w-7xl mx-auto">
      <div
        class="grid justify-center items-center gap-6 md:gap-12 mt-6 md:mt-12 md:grid-cols-2"
      >
        <div>
          <h1
            class="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-600"
          >
            I think we're lost Steve!
          </h1>
          <p class="text-lg md:text-xl mt-2">
            We can't seem to find the page you're looking for.
          </p>
          <div class="mt-8 text-2xl">
            <p><strong>Error: </strong>{{ error.statusCode }}</p>
            <p>{{ error.message }}</p>
          </div>
          <div class="mt-8">
            <Button size="md" color="blue" href="/"> Go Home </Button>
          </div>
        </div>
        <img
          src="~/assets/images/minecraft_art/floating_island_artwork_2.png"
          class="max-w-md"
        />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
defineProps({
  error: {
    type: Object,
    default() {
      return {
        statusCode: 1000,
        message: "Unknown error",
      };
    },
  },
});
</script>

<style scoped></style>
