<template>
    <div class="relative z-0">
        <Header :user="user" />
        <div class="px-4 min-h-[50vh]">
            <slot />
        </div>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";

const test = ref(1);
const { data: auth } = await useAsyncData("auth", () => getAuth(), {
  watch: [test],
});

console.log('data: ', auth.value);
console.log('test: ', test.value);

const user = auth.value?.value?.user ?? null;
</script>

<style></style>
