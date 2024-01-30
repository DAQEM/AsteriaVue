<template>
  <Modal :showModal="showModal" @closeModal="closeModal">
    <div class="bg-secondary-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      <div class="sm:flex sm:items-start">
        <div class="w-full mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <div class="w-full flex justify-between">
            <h3 class="text-lg leading-6 font-medium" id="modal-title">
              Sign in with
            </h3>
            <div>
              <button @click="closeModal">
                <Icon name="fa6-solid:x" class="h-5 w-5 mr-2" />
              </button>
            </div>
          </div>

          <div class="mt-4 grid grid-cols-2 gap-4">
            <Button
              color="blue"
              size="md"
              class="mb-2 !w-full"
              :rounded="false"
              :href="getLoginUrl('discord', getAsteriaUrl())"
            >
              <Icon name="fa6-brands:discord" class="h-5 w-5 mr-2" />
              Discord
            </Button>
          </div>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script lang="ts" setup>
import Button from "../Button.vue";

defineProps({
  showModal: {
    type: Boolean,
    default() {
      return {
        value: false,
      };
    },
  },
});

const methods = defineEmits(["closeModal"]);

function closeModal() {
  methods("closeModal");
}
</script>

<style></style>
