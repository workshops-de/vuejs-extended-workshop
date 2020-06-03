<template>
  <div>
    <div class="tabs">
      <div class="tabs__nav">
        <button
          v-for="tab in tabs"
          :key="tab"
          @click="currentTab = tab"
          class="tabs__link"
          :class="currentTab === tab ? 'tabs__link--active' : ''"
        >
          {{ tab }}
        </button>
      </div>
      <div class="tabs__content">
        <keep-alive>
          <component :is="currentTab"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Home from './Home.vue';
import Profile from './Profile.vue';

export default {
  components: {
    Home,
    Profile,
  },
  data() {
    return {
      currentTab: 'Home',
      tabs: ['Home', 'Profile'],
    };
  },
};
</script>

<style lang="scss">
  .tabs {
    &__nav {
      overflow: hidden;
      border: 1px solid #ccc;
      background-color: #f1f1f1;
    }

    &__link {
      background-color: inherit;
      float: left;
      border: none;
      outline: none;
      cursor: pointer;
      padding: 14px 16px;
      transition: 0.3s;

      &:hover {
        background-color: #ddd;
      }

      &--active {
        background-color: #ccc;
      }
    }

    &__content {
      padding: 6px 12px;
      border: 1px solid #ccc;
      border-top: none;
    }
  }
</style>
