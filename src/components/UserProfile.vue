<template>
  <form action="">
    <label>
      Username:
      <input :value="username" @input="$emit('update:username', $event.target.value)">
    </label>
    <label>
      E-Mail:
      <input :value="email" @input="$emit('update:email', $event.target.value)">
    </label>
  </form>
</template>

<script>
export default {
  props: ['username', 'email'],
};
</script>
