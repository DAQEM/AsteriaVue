<template>
  <div
    class="bg-background-800 rounded-xl p-4 grid grid-cols-[min-content,1fr,auto] grid-rows-[min-content,1fr,min-content] gap-x-3 gap-y-2"
  >
    <div class="w-32 h-32 rounded-md overflow-hidden row-span-3">
      <NuxtLink :to="url">
        <img :src="project.image_url" :alt="project.name" />
      </NuxtLink>
    </div>
    <NuxtLink :to="url">
      <h2>{{ project.name }}</h2>
    </NuxtLink>
    <p>{{ project.downloads }}</p>
    <div>
      <p class="line-clamp-1">
        {{ project.summary }}
      </p>
    </div>
    <p>Something</p>
    <div class="flex items-end gap-2 h-max">
      <div class="flex">
        <template v-for="(user, index) in project.users">
          <a
            :title="user.name"
            :href="'/user/' + user.name"
            :class="{
              '-ml-2': index > 0,
            }"
          >
            <ProfileImage :image="user.image" class="w-8 h-8 rounded-full" />
          </a>
        </template>
      </div>
      <div class="flex gap-2">
        <template v-for="categoryOrLoader in project.loaders">
          <span
            :title="categoryOrLoader"
            class="rounded-full m-1 flex text-background-100 fill-background-100"
          >
            <div
              v-if="categoryOrLoader === 'Quilt'"
              class="flex justify-center items-center mr-1"
            >
              <div v-html="quiltIcon" class="w-4 h-4" />
            </div>
            <div
              v-else-if="categoryOrLoader === 'Fabric'"
              class="flex justify-center items-center mr-1"
            >
              <Icon name="file-icons:fabric" class="w-4 h-4" />
            </div>
            <div
              v-else-if="categoryOrLoader === 'Forge'"
              class="flex justify-center items-center mr-1"
            >
              <Icon name="simple-icons:curseforge" class="w-4 h-4" />
            </div>
            <div
              v-else-if="categoryOrLoader === 'NeoForge'"
              class="flex justify-center items-center mr-1"
            >
              <Icon name="game-icons:squirrel" class="w-4 h-4" />
            </div>
            {{ categoryOrLoader }}
          </span>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import quiltIcon from "~/assets/images/icons/quilt_icon.svg?raw";
import ProfileImage from "./ProfileImage.vue";

const props = defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true,
  },
});

const url = "projects/" + props.project.type + "s/" + props.project.slug;
</script>

<style></style>
