<template>
  <div class="max-w-8xl mx-auto mt-24">
    <div class="grid lg:grid-cols-[320px,1fr] gap-6">
      <div
        id="profile-info"
        class="bg-background-800 rounded-2xl relative h-min"
      >
        <div v-if="isOwner" class="absolute right-4 top-4">
          <Button
            v-if="!editing"
            @click="editing = true"
            class="bg-primary-500 hover:bg-primary-600"
            :rounded="false"
            color="gray"
          >
            Edit
          </Button>
        </div>

        <div class="flex items-center gap-2 -mt-16 ml-2">
          <ProfileImage :image="user.image" class="rounded-full w-24 h-24" />
          <div class="flex flex-col justify-center ml-2 mb-6">
            <h1 class="text-xl md:text-4xl font-bold">{{ user.name }}</h1>
          </div>
        </div>

        <div v-if="!editing" class="flex flex-col justify-center p-4 gap-4">
          <div>
            <Role :role="user.role" />
            <p>
              {{ user.bio }}
            </p>
          </div>
          <hr />
          <div>
            <h3 class="text-lg font-semibold">
              Joined:
              <span class="font-normal">{{
                new Date(user.joined * 1000).toLocaleDateString()
              }}</span>
            </h3>
            <h3 class="text-lg font-semibold">
              <!-- Last Active: xxx ago  -->
              Last Active:
              <span class="font-normal">{{
                getTimeAgo(user.last_active)
              }}</span>
            </h3>
          </div>
        </div>
        <div v-else class="flex flex-col justify-center p-4 gap-4">
          <div>
            <Input
              v-model="user.name"
              name="username"
              label="Username"
              size="lg"
            />
          </div>
          <div>
            <TextArea v-model="user.bio" name="bio" label="Bio" />
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <Button
                @click="editing = false"
                :disabled="saveButtonLoading"
                class="bg-primary-500 hover:bg-primary-600 !w-full"
                :rounded="false"
                color="gray"
              >
                Cancel
              </Button>
            </div>
            <div>
              <Button
                id="save-button"
                @click="submit"
                :loading="saveButtonLoading"
                class="bg-primary-500 hover:bg-primary-600 !w-full"
                :rounded="false"
                color="blue"
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-background-800 rounded-2xl">
        <div id="selector">
          <div
            class="bg-background-700 rounded-xl m-4 py-4 px-8 font-semibold text-lg"
          >
            <div class="flex gap-4">
              <div
                @click="selectTab('activity')"
                :class="{
                  'text-gray-300': tab !== 'activity',
                  'border-b-4 border-blue-600': tab === 'activity',
                }"
              >
                Activity
              </div>
              <div
                @click="selectTab('projects')"
                :class="{
                  'text-gray-300': tab !== 'projects',
                  'border-b-4 border-blue-600': tab === 'projects',
                }"
              >
                Projects
              </div>
            </div>
          </div>
        </div>
        <div class="m-4">
          <div id="activity" v-if="tab === 'activity'">
            <div class="flex flex-col gap-4">
              <div class="bg-background-700 rounded-xl py-4 px-8">
                <h1>Comment on Jobs+</h1>
                <div class="mt-2 grid grid-cols-[max-content,1fr] gap-4">
                  <img
                    :src="user.image"
                    alt="Profile"
                    class="h-12 w-12 rounded-full"
                  />
                  <div class="grid grid-rows-[max-content,max-content]">
                    <h2 class="font-semibold">{{ user.name }}</h2>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Laborum eveniet ipsa fuga voluptates eos sapiente
                      cupiditate, aperiam neque officiis ipsum nisi, qui
                      doloribus! Eveniet magni saepe alias, quia enim maxime
                      perspiciatis assumenda quod ea?
                    </p>
                  </div>
                </div>
              </div>

              <div class="bg-background-700 rounded-xl py-4 px-8">
                <h1>Comment on Jobs+</h1>
                <div class="mt-2 grid grid-cols-[max-content,1fr] gap-4">
                  <img
                    :src="user.image"
                    alt="Profile"
                    class="h-12 w-12 rounded-full"
                  />
                  <div class="grid grid-rows-[max-content,max-content]">
                    <h2 class="font-semibold">{{ user.name }}</h2>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Et totam aliquam quo!
                    </p>
                  </div>
                </div>
              </div>

              <div class="bg-background-700 rounded-xl py-4 px-8">
                <h1>Comment on Jobs+</h1>
                <div class="mt-2 grid grid-cols-[max-content,1fr] gap-4">
                  <img
                    :src="user.image"
                    alt="Profile"
                    class="h-12 w-12 rounded-full"
                  />
                  <div class="grid grid-rows-[max-content,max-content]">
                    <h2 class="font-semibold">{{ user.name }}</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iusto doloribus nemo laborum quas similique voluptas
                      temporibus, quae iure, eveniet enim suscipit aperiam quod.
                      Aliquid minima consequuntur, sunt molestiae, rem animi
                      quam, impedit pariatur eius optio esse ratione quibusdam
                      consequatur accusamus eveniet officiis illum omnis odio!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="projects" v-else-if="tab === 'projects'">
            <div>My Projects</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import ProfileImage from "~/components/ProfileImage.vue";

const route = useRoute();
const router = useRouter();

const name: string = route.params.name as string;

const user: User | null = await getUser(name);

if (!user) {
  throw createError({
    fatal: true,
    statusCode: 404,
    message: "User not found",
  });
}

const auth = await getAuth();
const isOwner = auth.value.user?.name === user?.name;
const editing = ref(false);
const saveButtonLoading = ref(false);
const tab = ref(route.query.tab ?? "activity");

async function submit() {
  const username = document.querySelector<HTMLInputElement>(
    "#profile-info input[name=username]"
  )?.value;
  const bio = document.querySelector<HTMLTextAreaElement>(
    "#profile-info textarea[name=bio]"
  )?.value;

  if (!username || !bio) {
    return;
  }

  saveButtonLoading.value = true;

  await new Promise((resolve) => setTimeout(resolve, 250));

  const user: User | null = await updateUser(username, bio);

  if (!user) {
    window.location.reload();
  } else {
    const authCookie = getAuthCookie();
    if (authCookie.value) {
      await refreshToken(authCookie.value);
    }
    window.location.href = `/user/${user.name}`;
  }
}

function selectTab(newTab: string) {
  router.push(`/user/${name}?tab=${newTab}`);
  tab.value = newTab;
}

function getTimeAgo(time: number): string {
  const now = Date.now();
  const diff = now - time * 1000;
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    return "just now";
  }
}
</script>

<style></style>
