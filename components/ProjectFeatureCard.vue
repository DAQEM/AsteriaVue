<template>
  <div class="grid gap-8 lg:grid-cols-[3fr,2fr]">
    <div>
      <img :src="project.banner_url" alt="" class="rounded-xl aspect-[2/1]" />
    </div>
    <div class="grid grid-rows-[max-content,1fr,max-content] gap-4 text-start">
      <NuxtLink :to="url">
        <h1>
          {{ project.name }}
        </h1>
      </NuxtLink>
      <p class="mr-12 line-clamp-[7]">
        {{ project.summary }}
      </p>
      <Button href="/projects"> Explore Project </Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true,
  },
});

const url = "projects/" + props.project.type + "s/" + props.project.slug;
</script>

<style></style>
