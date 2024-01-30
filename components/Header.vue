<template>
  <nav class="sticky top-0 left-0 bg-secondary-900">
    <LoginModal :showModal="showModal" @closeModal="closeModal" />
    <div class="max-w-8xl mx-auto h-24 grid grid-cols-3-mid items-center px-4">
      <a href="/">
        <Brand class="h-12 md:h-16" />
      </a>

      <!-- Hamburger Menu Button -->
      <div class="lg:hidden flex justify-end mr-4">
        <button class="text-white focus:outline-none" @click="toggleMobileMenu">
          <Icon name="fa6-solid:bars" class="h-8 w-8" />
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-show="mobileMenuOpen"
        class="lg:hidden fixed inset-0 bg-secondary-900 z-30"
      >
        <button
          class="absolute top-8 right-8 text-white focus:outline-none"
          @click="toggleMobileMenu"
        >
          <Icon name="fa6-solid:x" class="h-8 w-8" />
        </button>
        <ul
          class="overflow-y-scroll max-h-[90vh] text-lg font-bold tracking-wide grid items-center gap-y-4 pt-24 px-6"
        >
          <li>
            <p>Menu</p>
          </li>
          <li class="bg-secondary-700 rounded-full p-2 text-center">
            <NuxtLink @click="closeMobileMenu" to="/projects"
              >Projects</NuxtLink
            >
          </li>
          <li class="bg-secondary-700 rounded-full p-2 text-center">
            <NuxtLink @click="closeMobileMenu" to="/blog">Blog</NuxtLink>
          </li>
          <li class="bg-secondary-700 rounded-full p-2 text-center">
            <NuxtLink @click="closeMobileMenu" to="/support">Support</NuxtLink>
          </li>
          <li class="bg-secondary-700 rounded-full p-2 text-center">
            <NuxtLink @click="closeMobileMenu" to="/servers">Servers</NuxtLink>
          </li>
          <li class="mt-4">
            <p>User</p>
          </li>
          <template v-if="user">
            <li class="bg-secondary-700 rounded-full p-2 text-center">
              <NuxtLink @click="closeMobileMenu" :to="'/user/' + user.username">
                Profile
              </NuxtLink>
            </li>
            <li class="bg-secondary-700 rounded-full p-2 text-center">
              <NuxtLink @click="closeMobileMenu" to="/account">
                Settings
              </NuxtLink>
            </li>
            <li class="bg-secondary-700 rounded-full p-2 text-center">
              <NuxtLink
                @click="closeMobileMenu"
                :to="getLogoutUrl(getAsteriaUrl() + route.fullPath)"
              >
                Log out
              </NuxtLink>
            </li>
          </template>
          <template v-else>
            <li class="bg-secondary-700 rounded-full p-2 text-center">
              <NuxtLink
                :color="player ? 'blue' : 'indigo'"
                class="!text-lg !w-full"
                @click="showModal = true"
              >
                Login
              </NuxtLink>
            </li>
          </template>
          <li class="mt-4">
            <Button
              :color="player ? 'blue' : 'indigo'"
              class="!text-lg !w-full"
              href="https://daqem.com/discord"
              newTab
            >
              <Icon name="fa6-brands:discord" class="mr-4" />
              Discord
            </Button>
          </li>
          <li>
            <Button
              :color="player ? 'blue' : 'indigo'"
              class="!text-lg !w-full"
              href="https://bisecthosting.com/DAQEM?r=daqem+com+header"
              newTab
            >
              <Icon name="fa6-solid:server" class="mr-4" />
              Rent Server
            </Button>
          </li>
        </ul>
        <div class="w-full absolute left-0 bottom-0 mb-24">
          <div class="grid grid-cols-2">
            <div class="flex justify-center"></div>
            <div class="flex justify-center"></div>
          </div>
        </div>
      </div>

      <!-- Desktop Menu -->
      <div class="hidden lg:flex max-w-4xl mx-auto">
        <ul class="text-lg font-bold tracking-wide flex gap-16">
          <li>
            <NuxtLink to="/projects">Projects</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/blog">Blog</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/support">Support</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/servers">Servers</NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Buttons -->
      <div class="hidden lg:flex gap-6 max-h-12">
        <div id="user-button">
          <div v-if="user">
            <Dropdown>
              <template #trigger>
                <Button
                  :color="player ? 'blue' : 'indigo'"
                  class="h-12 !p-[.25rem]"
                >
                  <img
                    :src="user.image"
                    class="rounded-full h-10 w-10"
                    alt="User Avatar"
                  />
                </Button>
              </template>
              <template #options>
                <div class="p-4 w-56">
                  <p class="text-white font-bold">
                    {{ user.username }}
                  </p>
                  <p class="text-white truncate">{{ user.email }}</p>
                </div>
                <hr class="border-secondary-700" />
                <div class="pb-2">
                  <NuxtLink
                    to="/account"
                    class="block px-4 py-2 text-white hover:bg-secondary-700"
                  >
                    <Icon name="fa6-solid:user" class="h-4 w-4 mr-2" />
                    Profile
                  </NuxtLink>
                  <NuxtLink
                    to="/account"
                    class="block px-4 py-2 text-white hover:bg-secondary-700"
                  >
                    <Icon name="fa6-solid:gear" class="h-4 w-4 mr-2" />
                    Settings
                  </NuxtLink>
                  <NuxtLink
                    :to="getLogoutUrl(getAsteriaUrl() + route.fullPath)"
                    class="block px-4 py-2 text-white hover:bg-secondary-700"
                  >
                    <Icon
                      name="fa6-solid:arrow-right-from-bracket"
                      class="h-4 w-4 mr-2"
                    />
                    Log out
                  </NuxtLink>
                </div>
              </template>
            </Dropdown>
          </div>
          <Button
            v-else
            :color="player ? 'blue' : 'indigo'"
            class="!p-[1rem]"
            @click="showModal = true"
          >
            <Icon name="fa6-solid:user" class="h-5 w-5" />
          </Button>
        </div>
        <Button
          :color="player ? 'blue' : 'indigo'"
          class="h-12 w-12 !p-[.65rem]"
          href="https://daqem.com/discord"
          newTab
        >
          <Icon name="fa6-brands:discord" class="h-full w-full" />
        </Button>
        <Button
          :color="player ? 'blue' : 'indigo'"
          class="h-12"
          href="https://bisecthosting.com/DAQEM?r=daqem+com+header"
          newTab
          >Rent Server</Button
        >
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Brand from "./Brand.vue";
import Button from "./Button.vue";
import Dropdown from "./Dropdown.vue";
import LoginModal from "./modal/LoginModal.vue";

defineProps({
  user: {
    type: Object as PropType<User | null>,
    default: null,
  },
});

const player = getPlayerCookie();
const route = useRoute();

const mobileMenuOpen = ref(false);
const showModal = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

const closeModal = () => {
  showModal.value = false;
};
</script>

<style scoped></style>
