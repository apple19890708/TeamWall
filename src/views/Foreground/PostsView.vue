<script setup>
import { ref, onMounted } from 'vue';
import PostCard from '@/components/PostCard.vue';
import PostFilter from '@/components/PostFilter.vue';
import PostEmptyCard from '@/components/PostEmptyCard.vue';
import { apiPost, token } from '@/utils/apiPost';
import PostLoadingCard from '@/components/PostLoadingCard.vue';
const isLoading = ref(true);
const posts = ref([]);
const getPosts = (sort = 1, searchKey = '') => {
  // sort: 1 最新, 2 最舊, 3 熱門
  let sortValue = 'new'; // 時間排序, 預設 最新
  let likesValue = ''; // 熱門排序, 預設 無

  if (sort === 2) sortValue = 'old';
  if (sort === 3) likesValue = 'hot';

  apiPost
    .getAll(
      `timeSort=${sortValue}&search=${searchKey}&likesSort=${likesValue}&limit=9999`
    )
    .then((res) => {
      posts.value = res.data.data;
      isLoading.value = false;
    })
    .catch((err) => {
      console.log(err);
    });
};
onMounted(() => {
  if (token()) {
    getPosts();
  }
});
</script>

<template>
  <PostFilter @get-posts="getPosts" />

  <ul v-show="isLoading">
    <li v-for="index in 3" :key="index" class="mb-4">
      <PostLoadingCard />
    </li>
  </ul>

  <div v-show="!isLoading">
    <ul v-if="posts.length > 0">
      <li
        v-for="(item, index) in posts"
        :key="item.id"
        :class="{ 'mb-4': index < posts.length - 1 }"
      >
        <PostCard :post="item" />
      </li>
    </ul>

    <PostEmptyCard v-else>
      <p class="p-8 text-center text-subtitle">
        目前尚無動態，新增一則貼文吧！
      </p>
    </PostEmptyCard>
  </div>
</template>
