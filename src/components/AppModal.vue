<template>
  <div class="modal" :class="{'modal--is-active': isOpen}">
    <div class="modal__content">
      <h1><slot name="headline">This is the headline</slot></h1>
      <slot></slot>
      <slot name="footer" :ok="ok" :cancel="cancel" :close="close">
        <p>
          <button @click="ok">OK</button>
          <button @click="cancel">Cancel</button>
          <button @click="close">Close</button>
        </p>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppModal',
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    ok() {
      console.log('ok clicked');
      this.$emit('ok');
      this.updateVisibility(false);
    },
    cancel() {
      console.log('cancel clicked');
      this.$emit('cancel');
      this.updateVisibility(false);
    },
    close() {
      console.log('close clicked');
      this.$emit('close');
      this.updateVisibility(false);
    },
    updateVisibility(visibility) {
      this.$emit('update-visibility', visibility);
    },
  },
};
</script>

<style lang="scss">
  /* The Modal (background) */
  .modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */

    &--is-active {
      display: block;
    }

    &__content {
      background-color: #fefefe;
      margin: 15% auto; /* 15% from the top and centered */
      padding: 20px;
      border: 1px solid #888;
      width: 80%; /* Could be more or less, depending on screen size */
    }

    /* The Close Button */
    &__close {
      color: #aaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
    }

    &__close:hover,
    &__close:focus {
      color: black;
      text-decoration: none;
      cursor: pointer;
    }
  }
</style>
