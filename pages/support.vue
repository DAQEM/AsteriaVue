<template>
  <div class="max-w-7xl mx-auto mt-8 md:mt-16">
    <div class="flex flex-col gap-8">
      <h1 class="text-4xl font-bold">Support</h1>
      <section>
        <h2 class="text-2xl font-semibold">About Me</h2>
        <p class="font-body">
          Hi there, I'm Kevin, but you probably know me as DAQEM. I'm a
          passionate IT student at Fontys University of Applied Sciences in The
          Netherlands. When I'm not buried in textbooks, I'm busy crafting
          exciting experiences in the world of Minecraft through my mods and
          modpacks and writing blogs to help people like you with their
          questions.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold">My Mission</h2>
        <p class="font-body">
          My mission is simple: to spread joy and creativity through the
          Minecraft community. I believe that every player should have the
          chance to explore new dimensions, enjoy new features, and dive into
          unique adventures. By creating mods and modpacks, I'm dedicated to
          enriching the Minecraft experience for players far and wide.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold">Why Support Me</h2>
        <p class="font-body">
          I'm reaching out to you, the incredible Minecraft community, to ask
          for your support. Your contributions will help me continue developing
          these mods and modpacks, ensuring they remain top-notch and
          up-to-date. By becoming a member of my support community, you'll not
          only be aiding the growth of my projects but also gaining access to
          some fantastic benefits:
        </p>
        <ul class="list-disc pl-8 font-body flex flex-col gap-3">
          <li>
            <strong class="font-semibold text-lg"
              >Exclusive Channel Discord Access:</strong
            >
            Join a thriving community of fellow supporters, interact directly
            with me, and share your thoughts, ideas, and suggestions.
          </li>
          <li>
            <strong class="font-semibold text-lg"
              >Collaborative Decision-Making:</strong
            >
            Influence the direction of my projects by participating in
            discussions and polls that shape the future of the mods and
            modpacks.
          </li>
          <li>
            <strong class="font-semibold text-lg">Early Access:</strong> Be the
            first to experience the latest creations I'm working on, enjoying a
            sneak peek before anyone else.
          </li>
          <li>
            <strong class="font-semibold text-lg"
              >Behind-the-Scenes Insights:</strong
            >
            Get a glimpse into my creative process and journey as I bring new
            content to life.
          </li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-semibold">How You Can Help</h2>
        <p class="font-body">
          Your support means the world to me and the entire Minecraft community.
          By becoming a member, you're not only contributing to the growth of
          these projects but also becoming an integral part of a passionate
          group of gamers who share a common love for exploration and
          creativity.
        </p>
        <div>
          <div class="flex flex-wrap gap-4 mt-6">
            <Button
              href="https://github.com/sponsors/DAQEM"
              :color="player ? 'blue' : 'indigo'"
              target="_blank"
              rel="noopener noreferrer"
              class="flex gap-2 items-center bg-brandLight hover:brightness-95 py-2 px-4 rounded-full"
            >
              <Icon name="simple-icons:github" class="w-6 h-6" />
              <div class="hover:text-brandDark">
                <p class="text-xl">GitHub Donation</p>
              </div>
            </Button>
            <Button
              href="https://ko-fi.com/daqem"
              :color="player ? 'blue' : 'indigo'"
              target="_blank"
              rel="noopener noreferrer"
              class="flex gap-2 items-center bg-brandLight hover:brightness-95 py-2 px-4 rounded-full"
            >
              <Icon name="simple-icons:kofi" class="w-6 h-6" />
              <div class="hover:text-brandDark">
                <p class="text-xl">Kofi Donation</p>
              </div>
            </Button>
            <Button
              href="https://paypal.me/kevinvdheijden1"
              :color="player ? 'blue' : 'indigo'"
              target="_blank"
              rel="noopener noreferrer"
              class="flex gap-2 items-center bg-brandLight hover:brightness-95 py-2 px-4 rounded-full"
            >
              <Icon name="simple-icons:paypal" class="w-6 h-6" />
              <div class="hover:text-brandDark">
                <p class="text-xl">Paypal Donation</p>
              </div>
            </Button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from "~/components/Button.vue";

const player = useCookie("player");
</script>

<style></style>
