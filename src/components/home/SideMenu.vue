<script setup>
import { RouterLink } from 'vue-router';
import AvatarVue from '../Avatar.vue';
import IconButtonVue from '../ButtonIcon.vue';
import IconBellVue from '../icons/IconBell.vue';
import IconThumbsUpVue from '../icons/IconThumbsUp.vue';
import IconChatVue from '../icons/IconChat.vue';
defineProps({
  avatar: {
    type: String,
  },
  name: {
    type: String,
    default: 'Unknown',
  },
  userPageUrl: {
    type: String,
    default: '#',
  },
});
</script>

<template>
  <div class="flex flex-col border-2 border-black bg-white px-6 py-8">
    <RouterLink
      to="/post-create"
      class="mb-6 flex items-center justify-center rounded-lg border-2 border-black bg-primary py-2 text-lg text-white hover:bg-warning hover:text-black"
    >
      張貼動態
    </RouterLink>

    <ul class="ml-2 flex flex-col">
      <li class="group">
        <RouterLink :to="userPageUrl" class="mb-5 flex items-center">
          <AvatarVue
            size="50"
            :imgUrl="avatar"
            class="cursor-pointer group-hover:brightness-110"
          />
          <h3
            class="ml-4 font-bold group-hover:text-primary group-hover:underline"
          >
            {{ name }}
          </h3>
        </RouterLink>
      </li>
      <li class="group">
        <RouterLink to="/follow" class="mb-5 flex items-center">
          <IconButtonVue
            size="50"
            class="group-hover:bg-primary group-hover:text-white"
          >
            <IconBellVue class="h-6 w-6" />
          </IconButtonVue>
          <h3
            class="ml-4 font-bold group-hover:text-primary group-hover:underline"
          >
            追蹤名單
          </h3>
        </RouterLink>
      </li>
      <li class="group">
        <RouterLink to="/likes" class="mb-5 flex items-center">
          <IconButtonVue
            size="50"
            class="group-hover:bg-primary group-hover:text-white"
          >
            <IconThumbsUpVue class="h-6 w-6" />
          </IconButtonVue>
          <h3
            class="ml-4 font-bold group-hover:text-primary group-hover:underline"
          >
            我按讚的文章
          </h3>
        </RouterLink>
      </li>
      <li class="group">
        <RouterLink to="/chat-room-list" class="flex items-center">
          <IconButtonVue
            size="50"
            class="group-hover:bg-primary group-hover:text-white"
          >
            <IconChatVue class="h-6 w-6" />
          </IconButtonVue>
          <h3
            class="ml-4 font-bold group-hover:text-primary group-hover:underline"
          >
            聊天室
          </h3>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
