<template>
  <div id="app">
    <h2>modal component</h2>
    <button @click="showModal = true">Open</button>
    <AppModal :is-open="showModal" @update-visibility="showModal = $event">
      <template #headline>This is the overridden headline</template>
      <template #default>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis nisl semper leo
          rhoncus tincidunt sed sed lorem. Ut ut sem sapien. Maecenas bibendum sagittis est vitae
          efficitur. Aliquam porta lorem at ipsum molestie ultricies. Nulla nec tincidunt sem.
          Nullam tempor bibendum nibh, vel ultrices ante faucibus eu.</p>
      </template>
    </AppModal>
    <h2>accordion component</h2>
    <Tabs />
    <h2>custom dummy directive</h2>
    <p v-dummy="10">Should output 10: </p>
    <p v-dummy="'2,5'">Is between 2 and 5: </p>
    <p v-dummy="dataVal"></p>
    <p v-dummy:image="100">See the following image --> </p>
    <p v-dummy:image="'400,100x100,400'"></p>
    <p v-dummy:image="dataVal"></p>
    <h2>custom filter</h2>
    <div>
      Without filter:
      {{ msg }}
    </div>
    <div>
      With filter:
      {{ msg | truncate(11, '...') }}
    </div>
    <h2>custom format directive</h2>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import Tabs from './components/Tabs.vue';
import AppModal from './components/AppModal.vue';

export default Vue.extend({
  name: 'App',
  components: {
    AppModal,
    Tabs,
    HelloWorld,
  },
  data() {
    return {
      msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      dataVal: 255,
      showModal: false,
    };
  },
});
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
