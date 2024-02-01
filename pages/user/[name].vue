<template>
  <div class="max-w-8xl mx-auto mt-24">
    <div class="grid lg:grid-cols-[320px,1fr,1fr] gap-6">
      <div id="profile-info" class="bg-background-800 rounded-2xl relative">
        <div v-if="isOwner" class="absolute right-4 top-4">
          <Button
            v-if="!editing"
            @click="editing = true"
            class="bg-primary-500 hover:bg-primary-600"
            :rounded="false"
            color="gray"
            size="sm"
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
            <Input :value="user.name" name="username" />
          </div>
          <div>
            <TextArea :value="user.bio" name="bio" :resizable="false" />
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <Button
                @click="editing = false"
                :disabled="saveButtonLoading"
                class="bg-primary-500 hover:bg-primary-600 !w-full"
                :rounded="false"
                color="gray"
                size="sm"
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
                size="sm"
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div id="activity"></div>
      <div id="projects"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import ProfileImage from "~/components/ProfileImage.vue";

const route = useRoute();
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
