<template>
  <div id="app">
    <div>
      Without filter:
      {{ msg }}
    </div>
    <div>
      With filter:
      {{ msg | truncate(11, '...') }}
    </div>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default Vue.extend({
  name: 'App',
  components: {
    HelloWorld,
  },
  data() {
    return {
      msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
