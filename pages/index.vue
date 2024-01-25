<template>
  <div class="absolute top-0 right-0 -z-10">
    <SvgCorner
      class="lg:w-[48rem] md:w-[32rem] sm:block hidden"
      :class="player ? 'fill-blue-800' : 'fill-indigo-800'"
    />
  </div>
  <div class="mt-8 mb-16 md:mt-16 md:mb-32">
    <div class="max-w-7xl mx-auto">
      <div class="grid md:grid-cols-2 md:gap-24 lg:gap-48">
        <div>
          <div class="h-16 mb-4 flex items-center gap-3">
            <p class="text-xl font-semibold">I'm a</p>
            <Switch
              :checked="player"
              @input="handlePlayerSwitch"
              text1="Player"
              text2="Developer"
              class="font-semibold h-min"
            />
          </div>

          <div v-for="(tab, index) in tabs" :key="index">
            <div v-if="(index === 0 && player) || (index === 1 && !player)">
              <h1
                class="text-4xl md:text-6xl font-bold bg-gradient-to-r text-transparent bg-clip-text"
                :class="tab.titleClasses"
              >
                {{ tab.title }}
              </h1>
              <p class="text-lg md:text-2xl mt-8">{{ tab.subtitle }}</p>
              <div class="text-lg md:text-xl">
                <h2 class="font-bold mt-8">Featured Projects</h2>
                <ul v-for="(project, index) in tab.featured" :key="index">
                  <li>
                    <div class="flex items-center gap-3">
                      <Icon :name="project.icon" :class="project.color" />
                      <a :href="project.link">{{ project.title }}</a>
                    </div>
                  </li>
                </ul>
              </div>
              <Button
                size="md"
                class="mt-8"
                :color="player ? 'blue' : 'indigo'"
              >
                Explore Projects
              </Button>
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <Transition name="fade" mode="out-in">
            <img
              src="~/assets/images/minecraft_art/floating_island_artwork_1.png"
              alt=""
              class="w-[32rem]"
              v-if="player"
            />
            <img
              src="~/assets/images/minecraft_art/floating_island_artwork_2.png"
              alt=""
              class="w-[32rem]"
              v-else
            />
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Transition } from "vue";
import SvgCorner from "~/components/svg/SvgCorner.vue";
import Switch from "~/components/Switch.vue";

const playerCookie = useCookie("player", {
  default() {
    return true;
  },
  path: "/",
  maxAge: 60 * 60 * 24 * 7,
});

const player = ref(playerCookie.value);

const tabs = [
  {
    title: "Dive into a World of Wonder!",
    titleClasses: "from-blue-500 to-blue-600",
    subtitle:
      "Embark on epic adventures with our amazing modpacks. Experience gaming like never before, filled with wonder and excitement.",
    featured: [
      {
        icon: "fa6-solid:heart-pulse",
        color: "text-blue-600",
        title: "Afterlife",
        link: "/projects/modpacks/afterlife",
      },
      {
        icon: "fa6-solid:hammer",
        color: "text-blue-600",
        title: "Jobs+ Remastered",
        link: "/projects/mods/jobsplus-remastered",
      },
      {
        icon: "fa6-solid:heart",
        color: "text-blue-600",
        title: "X-Life Series",
        link: "/projects/categories/x-life",
      },
    ],
  },
  {
    title: "Your Vision, Our Mission!",
    titleClasses: "from-indigo-500 to-indigo-600",
    subtitle:
      "We're dedicated to bringing your creative ideas to life. We've built a lot of useful libraries and tools to help you get started.",
    featured: [
      {
        icon: "fa6-solid:archway",
        color: "text-indigo-600",
        title: "Arc Library",
        link: "/projects/mods/arc",
      },
      {
        icon: "fa6-solid:panorama",
        color: "text-indigo-600",
        title: "UI Library",
        link: "/projects/mods/ui",
      },
      {
        icon: "fa6-solid:ban",
        color: "text-indigo-600",
        title: "Item Restrictions",
        link: "/projects/mods/item-restrictions",
      },
    ],
  },
];

function handlePlayerSwitch() {
  player.value = !player.value;
  playerCookie.value = player.value;
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
