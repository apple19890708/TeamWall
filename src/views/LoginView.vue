<script setup>
import { onMounted, ref } from 'vue';
import { RouterView, useRouter } from 'vue-router';
import { apiUser, token } from '../utils/apiUser';
import { useUserStore } from '@/stores';
import PageLoading from '../components/PageLoading.vue';
const userStore = useUserStore();
const router = useRouter();

const isLoading = ref(true);

onMounted(() => {
  if (userStore.name) {
    return router.replace({ name: 'posts' });
  }
  if (!token()) {
    isLoading.value = false;
    return;
  }
  apiUser
    .check()
    .then((res) => {
      userStore.updateUser(res.data.data);
      router.replace({ name: 'posts' });
    })
    .catch(() => {
      isLoading.value = false;
      return;
    });
});
</script>
<template>
  <PageLoading v-if="isLoading"></PageLoading>
  <div
    v-else
    class="box-border flex h-screen w-full items-center justify-center"
  >
    <div
      class="mx-2 flex items-center border-2 border-black bg-secondary px-4 py-6 shadow-login md:px-8 md:py-12"
    >
      <div class="mr-12 hidden md:block">
        <img src="@/assets/images/login-image.svg" alt="login-image" />
      </div>
      <div class="flex flex-col items-center">
        <div class="mx-4 md:mx-10">
          <img src="@/assets/images/logo.png" alt="logo" />
        </div>
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>
